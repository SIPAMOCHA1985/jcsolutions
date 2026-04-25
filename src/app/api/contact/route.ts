import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "JC Solutions <info@jcsolutionsenterprise.com>",
      to: "info@jcsolutionsenterprise.com",
      replyTo: email,
      subject: `New Inquiry — ${service || "General"} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;">
          <p style="color:#C9A96E;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:24px;">
            New Message — JCSOLUTIONSENTERPRISE.COM
          </p>
          <h2 style="font-size:20px;font-weight:400;margin-bottom:24px;border-bottom:1px solid #222;padding-bottom:16px;">
            ${name}
          </h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;color:#ccc;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Phone</td><td style="padding:8px 0;color:#ccc;">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Service</td><td style="padding:8px 0;color:#C9A96E;">${service || "—"}</td></tr>
          </table>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #222;">
            <p style="color:#888;font-size:12px;margin-bottom:8px;">Message</p>
            <p style="color:#ccc;font-size:14px;line-height:1.7;">${message}</p>
          </div>
          <p style="margin-top:32px;color:#333;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">
            JC SOLUTIONS ENTERPRISE LLC · A brand of JC Solutions Enterprise LLC, Florida
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
