"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", zip: "", service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const services = [
    "Logistics & Distribution",
    "Construction Solutions",
    "Real Estate & Renting",
    "Project Management",
    "Custom Glass & Interiors",
    "Free Consultation",
    "Other",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] outline-none pb-3 pt-1 font-sans text-sm font-light text-white placeholder:text-white/25 transition-colors duration-300";

  return (
    <section id="contact" className="bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
          {/* Left */}
          <div>
            <p className="font-sans text-[10px] font-medium tracking-[0.5em] uppercase text-[#C9A96E] mb-6">
              Let&apos;s Work Together
            </p>
            <h2 className="font-serif font-medium text-white leading-[0.95] mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Request Your<br />Free Estimate
            </h2>
            <p className="font-sans text-sm font-light text-white/40 leading-relaxed mb-12 max-w-sm">
              Whether you need logistics support, project management, or a complete construction solution — we&apos;re ready. Book a complimentary 30-minute consultation to get started.
            </p>

            <div className="space-y-6">
              {[
                { label: "Email", value: "info@jcsolutionsenterprise.com", href: "mailto:info@jcsolutionsenterprise.com" },
                { label: "Phone", value: "(407) 538-8810", href: "tel:+14075388810" },
                { label: "Location", value: "Orlando, FL — Central Florida" },
                { label: "Hours", value: "Mon – Sat: 8:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="font-sans text-sm font-light text-white/60 hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm font-light text-white/60">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <a href="https://wa.me/14075388810" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 border border-white/15 text-white/50 px-8 py-3 font-sans text-[10px] tracking-[0.35em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300">
              WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-28 text-center">
                <div className="w-16 h-16 border border-[#C9A96E] flex items-center justify-center mb-8">
                  <span className="text-[#C9A96E] text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">We&apos;ll Be In Touch</h3>
                <p className="font-sans text-sm font-light text-white/40">
                  Expect a call or email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Your Name</label>
                    <input type="text" required placeholder="John Smith"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Email Address</label>
                    <input type="email" required placeholder="john@company.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Phone Number</label>
                    <input type="tel" placeholder="(407) 000-0000"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Zip Code</label>
                    <input type="text" placeholder="32803"
                      value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Service</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} bg-transparent cursor-pointer`}>
                      <option value="" className="bg-[#0C0C0C]">Select a service</option>
                      {services.map(s => <option key={s} value={s} className="bg-[#0C0C0C]">{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Project Budget</label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={`${inputClass} bg-transparent cursor-pointer`}>
                      <option value="" className="bg-[#0C0C0C]">—</option>
                      {["Under $10K","$10K – $50K","$50K – $100K","$100K – $500K","$500K+"].map(b => (
                        <option key={b} value={b} className="bg-[#0C0C0C]">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 block mb-3">Tell Us About Your Project</label>
                  <textarea rows={4} placeholder="Describe your needs, timeline, and goals..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="w-full bg-[#C9A96E] text-[#0C0C0C] font-sans text-[11px] font-medium tracking-[0.4em] uppercase py-5 hover:bg-white transition-colors duration-300 disabled:opacity-50">
                  {status === "sending" ? "Sending..." : "Request My Free Estimate"}
                </button>

                {status === "error" && (
                  <p className="font-sans text-xs text-red-400/70 text-center">
                    Something went wrong. Please call (407) 538-8810.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
