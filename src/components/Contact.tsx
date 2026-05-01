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
    "w-full bg-transparent border-b border-[#E8E8ED] focus:border-[#C9A96E] outline-none py-3 font-sans text-sm font-light text-[#1D1D1F] placeholder:text-[#6E6E73] transition-colors";

  return (
    <section id="contact" className="bg-[#1D1D1F] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left — info */}
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.4em] uppercase text-[#C9A96E] mb-6">
              Let&apos;s Talk
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight mb-4">
              Start Your<br />
              <span className="text-[#C9A96E]">Project Today</span>
            </h2>
            <p className="font-sans text-sm font-light text-white/50 leading-relaxed mb-10">
              Whether you&apos;re envisioning a luxury remodel or a custom glass installation, our team is ready.
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-1">Phone</p>
                <a href="tel:+14075388810" className="font-sans text-sm font-light text-white hover:text-[#C9A96E] transition-colors">
                  (407) 538-8810
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-1">Email</p>
                <a href="mailto:info@jcsolutionsenterprise.com" className="font-sans text-sm font-light text-white hover:text-[#C9A96E] transition-colors">
                  info@jcsolutionsenterprise.com
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-1">Location</p>
                <p className="font-sans text-sm font-light text-white/70">Orlando, FL &mdash; Greater Orlando Area</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-1">Hours</p>
                <p className="font-sans text-sm font-light text-white/70">Mon &ndash; Sat: 8:00 AM &ndash; 7:00 PM</p>
              </div>
              <a
                href="https://wa.me/14075388810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 font-sans text-xs tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 border border-[#C9A96E] flex items-center justify-center mb-6">
                  <span className="text-[#C9A96E] text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Message Received</h3>
                <p className="font-sans text-sm font-light text-white/50">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] block mb-3">
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
                  <label className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] block mb-3">
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

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] block mb-3">
                      Phone Number
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
                    <label className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] block mb-3">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} bg-transparent`}
                    >
                      <option value="" className="bg-[#1D1D1F]">Select...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#1D1D1F]">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] block mb-3">
                    Tell Us About Your Project
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
                  className="w-full bg-[#C9A96E] text-white font-sans text-xs font-medium tracking-[0.3em] uppercase py-4 hover:bg-white hover:text-[#1D1D1F] transition-colors duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="font-sans text-xs text-red-400 text-center">
                    Something went wrong. Please call us at (407) 538-8810.
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
