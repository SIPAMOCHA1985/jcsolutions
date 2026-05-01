import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "JC Solutions <noreply@jcsolutionsenterprise.com>",
      to: ["info@jcsolutionsenterprise.com"],
      replyTo: email,
      subject: `New Project Inquiry — ${service || "General"}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
