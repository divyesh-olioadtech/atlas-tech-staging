import nodemailer from "nodemailer";
import crypto from "crypto";
import logger from "../../../lib/logger";
import { saveLead } from "../../../lib/leadStore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const requestId = crypto.randomUUID();
  const { fullName, phone, email, brochureName, source, medium, campaign, referrer, landingPage, journey } = req.body;

  if (!fullName || !phone || !email || !brochureName) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const leadData = {
    requestId,
    type: "brochure-download",
    fullName,
    phone,
    email,
    brochureName,
    timestamp: new Date().toISOString(),
  };

  saveLead(leadData);
  logger.info("BROCHURE_LEAD_STORED", { requestId, email, brochureName });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">
        New Brochure Download Lead
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="background-color: #ecf0f1;">
          <td style="padding: 12px; font-weight: bold; width: 140px; border: 1px solid #bdc3c7;">Name:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Phone:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">+${phone}</td>
        </tr>
        <tr style="background-color: #ecf0f1;">
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Email:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">
            <a href="mailto:${email}" style="color: #3498db;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; border: 1px solid #bdc3c7;">Brochure:</td>
          <td style="padding: 12px; border: 1px solid #bdc3c7;">${brochureName}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-left: 4px solid #28a745; color: #155724;">
        <strong>Received:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      </div>
    </div>
  `;

  const [sheetResult, emailResult] = await Promise.allSettled([
    fetch(process.env.GS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        phone,
        email,
        product: brochureName,
        companyName: "",
        comment: "Brochure Download",
        page: "Brochure Modal",
        source: source || "",
        medium: medium || "",
        campaign: campaign || "",
        referrer: referrer || "",
        landingPage: landingPage || "",
        journey: journey || "",
        timestamp: new Date().toISOString(),
      }),
    }),
    transporter.sendMail({
      from: `"Atlas Technologies" <${process.env.EMAIL_USER}>`,
      to: "updates@atlastechnologiesindia.com",
      cc: "olioclientwebsiteleads@gmail.com, contact@atlastechnologiesindia.com",
      replyTo: email,
      subject: "New Brochure Download Lead - ATLAS",
      html: htmlBody,
    }),
  ]);

  const sheetSuccess = sheetResult.status === "fulfilled";
  const emailSuccess = emailResult.status === "fulfilled";

  logger.info("BROCHURE_LEAD_RESULT", { requestId, sheetSuccess, emailSuccess });

  if (!sheetSuccess) {
    logger.error("BROCHURE_SHEET_FAILED", { requestId, error: sheetResult.reason?.message });
  }

  if (!emailSuccess) {
    logger.error("BROCHURE_EMAIL_FAILED", { requestId, error: emailResult.reason?.message });
  }

  return res.status(200).json({
    success: true,
    requestId,
    sheet: { saved: sheetSuccess },
    email: { sent: emailSuccess },
  });
}
