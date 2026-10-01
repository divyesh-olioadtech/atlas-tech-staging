import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  console.log("🔍 Checking SendGrid Configuration...");

  // Check if API key exists
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    console.error("❌ SENDGRID_API_KEY not found in environment variables!");
    return res.status(500).json({
      success: false,
      error: "API key not configured",
      help: "Add SENDGRID_API_KEY to your .env.local file",
    });
  }

  console.log("✅ API Key found");
  console.log("   Starts with:", apiKey.substring(0, 8));
  console.log("   Length:", apiKey.length);

  // Set API key
  sgMail.setApiKey(apiKey);

  // Try sending
  try {
    console.log("📤 Attempting to send test email...");

    const msg = {
      to: "olioclientwebsiteleads@gmail.com",
      from: "atlastechnologies4u@gmail.com",
      subject: "SendGrid Configuration Test",
      text: "This is a test email to verify SendGrid is working.",
      html: "<strong>This is a test email to verify SendGrid is working.</strong>",
    };

    const response = await sgMail.send(msg);

    console.log("✅ Email sent successfully!");
    console.log("   Response:", JSON.stringify(response, null, 2));

    return res.status(200).json({
      success: true,
      message: "Email sent! Check SendGrid activity feed in 1-2 minutes.",
      response: response[0],
      checkHere: "https://app.sendgrid.com/email_activity",
    });
  } catch (error) {
    console.error("❌ SendGrid Error:", error);

    if (error.code === 401) {
      return res.status(401).json({
        success: false,
        error: "Invalid API Key",
        message: "Your API key is not valid. Create a new one in SendGrid.",
        help: "https://app.sendgrid.com/settings/api_keys",
      });
    }

    if (error.code === 403) {
      return res.status(403).json({
        success: false,
        error: "Sender not verified",
        message: "Verify atlastechnologies4u@gmail.com in SendGrid",
        help: "https://app.sendgrid.com/settings/sender_auth/senders",
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      details: error.response?.body,
    });
  }
}
