"use client";

import { useLanguage } from "@/lib/i18n";

const icons = [
  <svg key="glass" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeOpacity="0.4" />
  </svg>,
  <svg key="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>,
  <svg key="building" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H5m0 0H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  <svg key="screen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
];

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="bg-[#111111] px-6 lg:px-12">
      <div className="max-w-5xl mx-auto w-full py-28 md:py-36">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.6em] uppercase font-sans mb-5">
            {s.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            {s.h2.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="italic text-[#C9A96E]">{line}</span> : line}
              </span>
            ))}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
          </div>
          <p className="text-white/35 font-sans font-light text-sm max-w-md mx-auto leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/6">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#0A0A0A] p-10 group hover:bg-[#111111] transition-colors duration-300"
            >
              <div className="text-[#C9A96E]/40 mb-6 group-hover:text-[#C9A96E] transition-colors duration-300">
                {icons[i]}
              </div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/35 font-sans font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
