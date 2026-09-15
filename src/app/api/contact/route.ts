import { NextResponse } from "next/server";

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

const NAME_MAX = 50;
const EMAIL_MAX = 254;
const MSG_MIN = 10;
const MSG_MAX = 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Escape submitted content for safe inclusion inside an HTML email body.
 * Braces are escaped too so Brevo's template syntax ({{ ... }}) can never
 * be injected by a visitor.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/{/g, "&#123;")
    .replace(/}/g, "&#125;");
}

function getConfig() {
  const { BREVO_API_KEY, CONTACT_EMAIL, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME } = process.env;
  if (!BREVO_API_KEY || !CONTACT_EMAIL || !BREVO_SENDER_EMAIL || !BREVO_SENDER_NAME) {
    return null;
  }
  return {
    apiKey: BREVO_API_KEY,
    contactEmail: CONTACT_EMAIL,
    senderEmail: BREVO_SENDER_EMAIL,
    senderName: BREVO_SENDER_NAME,
  };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid submission. Please try again." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  // Honeypot field: bots fill hidden fields. Silently accept but send nothing.
  if (website) {
    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 },
    );
  }

  const nameValid = name.length >= 2 && name.length <= NAME_MAX;
  const emailValid = EMAIL_PATTERN.test(email) && email.length <= EMAIL_MAX;
  const messageValid = message.length >= MSG_MIN && message.length <= MSG_MAX;

  if (!nameValid || !emailValid || !messageValid) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const config = getConfig();
  if (!config) {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  const sentAt = new Date().toISOString();

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const payload = {
    sender: { name: config.senderName, email: config.senderEmail },
    to: [{ email: config.contactEmail, name: "Ujjwal Baunthiyal" }],
    replyTo: { email, name },
    subject: `New portfolio contact message from ${name}`,
    textContent: [
      "A new message was sent from the portfolio contact form.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      `Submitted at: ${sentAt}`,
    ].join("\n"),
    htmlContent: [
      '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111827">',
      "<h2 style=\"margin:0 0 16px\">New portfolio contact message</h2>",
      `<p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>`,
      "<p><strong>Message:</strong></p>",
      `<blockquote style="margin:8px 0;padding:12px 16px;border-left:3px solid #3b82f6;background:#f3f4f6">${safeMessage}</blockquote>`,
      `<p style="color:#6b7280;font-size:12px">Submitted at: ${sentAt}</p>`,
      "</div>",
    ].join(""),
  };

  try {
    const response = await fetch(BREVO_URL, {
      method: "POST",
      headers: {
        "api-key": config.apiKey,
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`[contact] Brevo responded with status ${response.status}`);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("[contact] Failed to reach Brevo", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 502 },
    );
  }
}