import { NextResponse } from "next/server";
import { validateContact, hasErrors, type ContactInput } from "@/lib/validation";
import { siteConfig } from "@/data/site";

/**
 * POST /api/contact
 * Receives the contact form, validates it again on the server,
 * and emails it to you using Resend (https://resend.com).
 *
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY    – your Resend API key
 *   CONTACT_TO_EMAIL  – the inbox that should receive messages
 */

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const input: ContactInput = {
    name: String(body.name ?? "").trim(),
    email: String(body.email ?? "").trim(),
    subject: String(body.subject ?? "").trim(),
    message: String(body.message ?? "").trim(),
  };

  // Spam bot filled in the hidden field: pretend it worked, but do nothing.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ message: "Thank you! Your message has been sent." });
  }

  const errors = validateContact(input);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { message: "Please fix the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set — message not sent.");
    return NextResponse.json(
      {
        message: `The contact form isn't connected yet. Please email me directly at ${siteConfig.email}.`,
      },
      { status: 503 },
    );
  }

  const html = `
    <h2>New message from your portfolio</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(input.message)}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // "onboarding@resend.dev" works without a custom domain.
        from: `${siteConfig.name} Portfolio <onboarding@resend.dev>`,
        to: [to],
        reply_to: input.email,
        subject: `Portfolio: ${input.subject}`,
        html,
        text: `Name: ${input.name}\nEmail: ${input.email}\nSubject: ${input.subject}\n\n${input.message}`,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend error:", res.status, await res.text());
      return NextResponse.json(
        { message: "Sorry, your message could not be sent. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Thank you! Your message has been sent. I'll reply soon." });
  } catch (error) {
    console.error("[contact] Failed to send:", error);
    return NextResponse.json(
      { message: "Sorry, your message could not be sent. Please try again later." },
      { status: 500 },
    );
  }
}
