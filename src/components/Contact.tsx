"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const services = [
    "Custom Glass",
    "Interior Remodeling",
    "Kitchen & Bath",
    "Commercial Project",
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
    "w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] outline-none py-4 font-sans text-sm font-light text-white placeholder:text-white/25 transition-colors duration-300";

  return (
    <section id="contact" className="bg-[#0C0C0C] border-t border-white/5">
      <div className="px-8 lg:px-14 pt-28 pb-28">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-16">
          (Let&apos;s Talk)
        </p>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left */}
          <div>
            <h2 className="font-serif font-medium text-white leading-[0.95] mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Start Your
            </h2>
            <h2 className="font-serif font-medium text-[#C9A96E] leading-[0.95] mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Project Today
            </h2>

            <p className="font-sans text-sm font-light text-white/40 leading-relaxed mb-16 max-w-sm">
              Whether you&apos;re envisioning a luxury remodel or a custom glass installation, our team is ready.
            </p>

            <div className="space-y-8 border-t border-white/10 pt-12">
              {[
                { label: "Phone", value: "(407) 538-8810", href: "tel:+14075388810" },
                { label: "Email", value: "info@jcsolutionsenterprise.com", href: "mailto:info@jcsolutionsenterprise.com" },
                { label: "Location", value: "Orlando, FL — Greater Orlando Area" },
                { label: "Hours", value: "Mon – Sat: 8:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-2">
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

              <a
                href="https://wa.me/14075388810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/15 text-white/50 px-6 py-3 font-sans text-[10px] tracking-[0.35em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-28 text-center">
                <div className="w-14 h-14 border border-[#C9A96E] flex items-center justify-center mb-8">
                  <span className="text-[#C9A96E] text-xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Message Received</h3>
                <p className="font-sans text-sm font-light text-white/40">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] block mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] block mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] block mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(407) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] block mb-3">
                      Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} bg-[#0C0C0C]`}
                    >
                      <option value="" className="bg-[#0C0C0C] text-white/40">Select...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0C0C0C] text-white">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] block mb-3">
                    Your Project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#C9A96E] text-[#0C0C0C] font-sans text-[10px] font-medium tracking-[0.4em] uppercase py-5 hover:bg-white transition-colors duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
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
