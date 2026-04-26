"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
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
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">

          {/* Left: info */}
          <div className="py-28 px-8 lg:px-16 bg-[#FAFAF8] border-r border-[#E8E3DA]">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-6">
              {c.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] leading-tight mb-8">
              {c.h2}
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C9A96E]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            </div>
            <p className="text-[#6B6B6B] font-sans font-light leading-relaxed mb-14">
              {c.subtitle}
            </p>

            {/* Contact info */}
            <div className="space-y-7 mb-12">
              {[
                {
                  label: c.infoPhone,
                  href: `tel:${c.infoPhone.replace(/\D/g, "")}`,
                  svg: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="#C9A96E" strokeWidth="1.3" className="w-4 h-4 flex-shrink-0">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                },
                {
                  label: c.infoEmail,
                  href: `mailto:${c.infoEmail}`,
                  svg: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="#C9A96E" strokeWidth="1.3" className="w-4 h-4 flex-shrink-0">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                },
                {
                  label: c.infoLocation,
                  href: null,
                  svg: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="#C9A96E" strokeWidth="1.3" className="w-4 h-4 flex-shrink-0">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" stroke="#C9A96E" />
                    </svg>
                  ),
                },
                {
                  label: c.infoHours,
                  href: null,
                  svg: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="#C9A96E" strokeWidth="1.3" className="w-4 h-4 flex-shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" stroke="#C9A96E" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  {item.svg}
                  {item.href ? (
                    <a href={item.href} className="text-[#6B6B6B] font-sans font-light text-sm hover:text-[#C9A96E] transition-colors duration-200">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[#6B6B6B] font-sans font-light text-sm">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/14075388810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-[#25D366]/40 text-[#25D366] text-xs tracking-widest uppercase font-sans hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="py-28 px-8 lg:px-16 bg-white">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-16 h-16 border border-[#C9A96E]/40 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#6B6B6B] font-sans font-light text-lg">{c.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A0A0A]/50 font-sans text-[10px] tracking-widest uppercase mb-2">
                      {c.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A0A0A]/50 font-sans text-[10px] tracking-widest uppercase mb-2">
                      {c.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A0A0A]/50 font-sans text-[10px] tracking-widest uppercase mb-2">
                      {c.formPhone}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A0A0A]/50 font-sans text-[10px] tracking-widest uppercase mb-2">
                      {c.formService}
                    </label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A]/70 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    >
                      <option value="">—</option>
                      {c.serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#0A0A0A]/50 font-sans text-[10px] tracking-widest uppercase mb-2">
                    {c.formMessage}
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-[#E8E3DA] text-[#0A0A0A] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500/70 font-sans text-xs">{c.formError}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[#0A0A0A] text-white text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#C9A96E] disabled:opacity-50 transition-colors duration-300"
                >
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
