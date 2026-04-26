"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* fail silently */ }
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left — info */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">
            {c.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            {c.h2.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="not-italic text-[#C9A96E]">{line}</em> : line}
              </span>
            ))}
          </h2>
          <p className="text-white/60 font-sans font-light leading-relaxed mb-12">
            {c.subtitle}
          </p>

          <div className="space-y-6 text-white/60 font-sans font-light text-sm">
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Phone</p>
              <p>{c.infoPhone}</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Email</p>
              <p>{c.infoEmail}</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Location</p>
              <p>{c.infoLocation}</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Hours</p>
              <p>{c.infoHours}</p>
            </div>
          </div>

          <a
            href="https://wa.me/14075388810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-6 py-3 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-sans hover:bg-[#C9A96E] hover:text-white transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="h-full flex items-center justify-center text-center py-20">
              <div>
                <p className="font-serif text-3xl text-white mb-4">{c.formSuccess}</p>
                <p className="text-white/60 font-sans font-light">{c.formSubmit}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">{c.formName}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">{c.formEmail}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">{c.formPhone}</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">{c.formService}</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none cursor-pointer">
                    <option value="" className="bg-[#1C1C1C]">—</option>
                    {c.serviceOptions.map(o => <option key={o} value={o} className="bg-[#1C1C1C]">{o}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">{c.formMessage}</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="mt-4 w-full py-4 bg-[#C9A96E] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300">
                {form.message ? c.formSubmitting : c.formSubmit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
