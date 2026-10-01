import nodemailer from "nodemailer";
import crypto from "crypto";
import logger from "../../../lib/logger";
import { saveLead } from "../../../lib/leadStore";

function createTransporter() {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT) || 465;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  logger.info("SMTP_CONFIG", {
    host,
    port,
    user,
    secure: port === 465,
  });

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export default async function Handler(req, res) {
  const requestId = crypto.randomUUID();

  if (req.method !== "POST") {
    logger.warn("METHOD_NOT_ALLOWED", { requestId });
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, companyName, phone, email, product, comment, page, source, medium, campaign, referrer, landingPage, journey } =
    req.body;

  const leadData = {
    requestId,
    fullName,
    companyName,
    phone,
    email,
    product,
    comment,
    page,
    createdAt: new Date().toISOString(),
  };

  saveLead(leadData);
  logger.info("LEAD_STORED", { requestId, email, page });

  const transporter = createTransporter();

  // Verify SMTP connection before sending
  try {
    await transporter.verify();
    logger.info("SMTP_VERIFY_OK", { requestId });
  } catch (verifyErr) {
    logger.error("SMTP_VERIFY_FAILED", {
      requestId,
      error: verifyErr.message,
      code: verifyErr.code,
      command: verifyErr.command,
    });
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="background-color: #ecf0f1;">
          <td style="padding: 12px; font-weight: bold; width: 140px; border: 1px solid #bdc3c7;">Name:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Company:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${companyName || "N/A"}</td>
        </tr>
        <tr style="background-color: #ecf0f1;">
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Phone:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">+${phone}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Email:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">
            <a href="mailto:${email}" style="color: #3498db;">${email}</a>
          </td>
        </tr>
        <tr style="background-color: #ecf0f1;">
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Product:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${product || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Page:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${page || "N/A"}</td>
        </tr>
        <tr style="background-color: #ecf0f1;">
          <td style="padding: 12px; font-weight: bold; vertical-align: top; border: 1px solid #bdc3c7;">Message:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${comment || "No message provided"}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-left: 4px solid #28a745; color: #155724;">
        <strong>Received:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      </div>
    </div>
  `;

  const [emailResult, sheetResult] = await Promise.allSettled([
    transporter.sendMail({
      from: `"Atlas Technologies" <${process.env.EMAIL_USER}>`,
      to: "updates@atlastechnologiesindia.com",
      cc: ["olioclientwebsiteleads@gmail.com", "contact@atlastechnologiesindia.com"],
      replyTo: email,
      subject: "New Contact Form Submission ATLAS",
      html: htmlBody,
    }),

    fetch(process.env.GS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...leadData,
        source: source || "",
        medium: medium || "",
        campaign: campaign || "",
        referrer: referrer || "",
        landingPage: landingPage || "",
        journey: journey || "",
        timestamp: new Date().toISOString(),
      }),
    }),
  ]);

  const emailSuccess = emailResult.status === "fulfilled";
  const sheetSuccess = sheetResult.status === "fulfilled";

  logger.info("PROCESS_RESULT", { requestId, emailSuccess, sheetSuccess });

  if (emailSuccess) {
    logger.info("EMAIL_SENT", {
      requestId,
      messageId: emailResult.value?.messageId,
      response: emailResult.value?.response,
    });
  } else {
    logger.error("EMAIL_FAILED", {
      requestId,
      error: emailResult.reason?.message,
      code: emailResult.reason?.code,
      command: emailResult.reason?.command,
      responseCode: emailResult.reason?.responseCode,
    });
  }

  if (!sheetSuccess) {
    logger.error("SHEET_FAILED", {
      requestId,
      error: sheetResult.reason?.message,
    });
  }

  return res.status(200).json({
    success: true,
    requestId,
    email: { sent: emailSuccess },
    sheet: { saved: sheetSuccess },
  });
}