import { NextResponse } from "next/server";
import { Resend } from "resend";

const LEAD_ENGINE_URL = "http://187.124.151.145:3001/leads";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, zip, service, budget, message } = body;

    // 1. Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "JC Solutions <noreply@jcsolutionsenterprise.com>",
        to: ["info@jcsolutionsenterprise.com"],
        replyTo: email,
        subject: `New Inquiry — ${service || "General"} | ${name}`,
        html: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>ZIP:</strong> ${zip}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });
    }

    // 2. Send to Lead Engine for AI scoring + GHL sync
    try {
      const leRes = await fetch(LEAD_ENGINE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, zip, service, budget, message }),
      });
      const leData = await leRes.json();
      console.log(`[LEAD ENGINE] Score: ${leData.score}/10 | ID: ${leData.leadId}`);
    } catch (leErr) {
      // Lead Engine failure doesn't block the user
      console.error("[LEAD ENGINE]", leErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
