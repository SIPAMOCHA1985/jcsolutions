"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const services = [
    "Logistics & Distribution",
    "Construction Solutions",
    "Real Estate & Renting",
    "Project Management",
    "Custom Glass & Interiors",
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
    "w-full bg-white border-b border-[#E5E5E0] focus:border-[#0A0A0A] outline-none py-4 font-sans text-sm font-light text-[#0A0A0A] placeholder:text-[#6B6B6B]/50 transition-colors duration-300";

  return (
    <section id="contact" className="bg-[#F7F7F5] border-b border-[#E5E5E0]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 pt-28 pb-28">
        <p className="font-sans text-[9px] font-medium tracking-[0.55em] uppercase text-[#C9A96E] mb-16">
          Contact
        </p>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left */}
          <div>
            <h2 className="font-serif font-medium text-[#0A0A0A] leading-[0.95] mb-12" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Let&apos;s Build<br />
              <span className="text-[#C9A96E]">Together.</span>
            </h2>

            <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed mb-12 max-w-sm">
              Whether you need logistics support, project management, or a complete construction solution — our team is ready to deliver.
            </p>

            <div className="space-y-8 border-t border-[#E5E5E0] pt-10">
              {[
                { label: "Phone", value: "(407) 538-8810", href: "tel:+14075388810" },
                { label: "Email", value: "info@jcsolutionsenterprise.com", href: "mailto:info@jcsolutionsenterprise.com" },
                { label: "Location", value: "Orlando, FL — Greater Central Florida" },
                { label: "Hours", value: "Mon – Sat: 8:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-1.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="font-sans text-sm font-light text-[#0A0A0A] hover:text-[#C9A96E] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm font-light text-[#6B6B6B]">{item.value}</p>
                  )}
                </div>
              ))}

              <a
                href="https://wa.me/14075388810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] px-6 py-3 font-sans text-[10px] tracking-[0.35em] uppercase hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white border border-[#E5E5E0] p-10">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-14 h-14 border-2 border-[#C9A96E] flex items-center justify-center mb-8">
                  <span className="text-[#C9A96E] text-xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-[#0A0A0A] mb-3">Message Received</h3>
                <p className="font-sans text-sm font-light text-[#6B6B6B]">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#6B6B6B] block mb-2">
                    Full Name *
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
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#6B6B6B] block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#6B6B6B] block mb-2">
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
                    <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#6B6B6B] block mb-2">
                      Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#6B6B6B] block mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project or needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#0A0A0A] text-white font-sans text-[10px] font-medium tracking-[0.4em] uppercase py-4 hover:bg-[#C9A96E] transition-colors duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="font-sans text-xs text-red-600 text-center">
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
