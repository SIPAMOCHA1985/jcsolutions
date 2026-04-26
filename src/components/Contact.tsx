"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">

          {/* Left — info panel, dark */}
          <div className="bg-[#111111] py-24 px-8 lg:px-14">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-5">
              {c.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl text-white leading-tight mb-8">
              {c.h2}
            </h2>
            <div className="h-px w-12 bg-[#C9A96E]/50 mb-8" />
            <p className="text-white/40 font-sans font-light leading-relaxed mb-12 text-sm">
              {c.subtitle}
            </p>

            <div className="space-y-6 mb-12">
              {[
                { label: c.infoPhone,    href: `tel:${c.infoPhone.replace(/\D/g, "")}`,  icon: "📞" },
                { label: c.infoEmail,    href: `mailto:${c.infoEmail}`,                   icon: "✉" },
                { label: c.infoLocation, href: null,                                      icon: "📍" },
                { label: c.infoHours,    href: null,                                      icon: "🕐" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-base mt-0.5 opacity-60">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="text-white/55 font-sans font-light text-sm hover:text-[#C9A96E] transition-colors duration-200">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white/55 font-sans font-light text-sm">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/14075388810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-[#25D366]/30 text-[#25D366]/70 text-xs tracking-widest uppercase font-sans hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Right — form, light */}
          <div className="bg-white py-24 px-8 lg:px-14 border-l border-[#E8E3DA]">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-14 h-14 border border-[#C9A96E]/40 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" className="w-7 h-7">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#6B6B6B] font-sans font-light text-base">{c.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A0A0A]/40 font-sans text-[10px] tracking-widest uppercase mb-2">{c.formName}</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#0A0A0A]/40 font-sans text-[10px] tracking-widest uppercase mb-2">{c.formEmail}</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A0A0A]/40 font-sans text-[10px] tracking-widest uppercase mb-2">{c.formPhone}</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#0A0A0A]/40 font-sans text-[10px] tracking-widest uppercase mb-2">{c.formService}</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A]/70 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors">
                      <option value="">—</option>
                      {c.serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#0A0A0A]/40 font-sans text-[10px] tracking-widest uppercase mb-2">{c.formMessage}</label>
                  <textarea rows={6} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors resize-none" />
                </div>
                {status === "error" && <p className="text-red-500/70 font-sans text-xs">{c.formError}</p>}
                <button type="submit" disabled={status === "sending"}
                  className="w-full py-4 bg-[#0A0A0A] text-white text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#C9A96E] disabled:opacity-50 transition-colors duration-300">
                  {status === "sending" ? c.formSubmitting : c.formSubmit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
