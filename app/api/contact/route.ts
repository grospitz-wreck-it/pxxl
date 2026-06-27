import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Honeypot prüfen

    const website =
      formData.get("website")?.toString() ?? "";

    if (website) {
      return Response.redirect(
        new URL("/contact/success", request.url)
      );
    }

    const subject =
      formData.get("subject")?.toString() ?? "";

    const name =
      formData.get("name")?.toString() ?? "";

    const email =
      formData.get("email")?.toString() ?? "";

    const message =
      formData.get("message")?.toString() ?? "";

    await resend.emails.send({
      from: "onboarding@resend.dev",
      replyTo: email,
      to: process.env.CONTACT_EMAIL!,
      subject: `[${subject}] Neue Kontaktanfrage`,
      text: `
name: ${name}

e-mail: ${email}

nachricht:

${message}
`,
    });

    return Response.redirect(
      new URL("/contact/success", request.url)
    );
  } catch (error) {
    console.error(error);

    return Response.redirect(
      new URL("/contact/success", request.url)
    );
  }
}