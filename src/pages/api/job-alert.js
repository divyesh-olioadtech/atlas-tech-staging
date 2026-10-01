export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const GS_URL = process.env.GS;

  if (!GS_URL) {
    return res.status(500).json({ success: false, message: "Apps Script URL not configured" });
  }

  try {
    const payload = {
      email,
      page: "Job Alert Signup",
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(GS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, message: data.error || "Failed to save" });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
