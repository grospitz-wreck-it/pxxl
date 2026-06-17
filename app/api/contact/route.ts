import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

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
      subject: `[${subject}] neue kontaktanfrage`,
      text: `
name: ${name}

e-mail: ${email}

nachricht:

${message}
`,
    });

    return NextResponse.redirect(
      new URL("/contact?success=1", request.url),
      303
    );
  } catch (error) {
    console.error(error);

    return NextResponse.redirect(
      new URL("/contact?error=1", request.url),
      303
    );
  }
}