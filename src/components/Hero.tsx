"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative flex flex-col bg-[#FAFAF8] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-28 left-12 pointer-events-none hidden lg:block">
        <div className="w-px h-28 bg-gradient-to-b from-[#C9A96E] to-transparent" />
        <div className="h-px w-28 bg-gradient-to-r from-[#C9A96E] to-transparent" />
      </div>
      <div className="absolute bottom-32 right-12 pointer-events-none hidden lg:block">
        <div className="h-px w-28 bg-gradient-to-l from-[#C9A96E] to-transparent ml-auto" />
        <div className="w-px h-28 bg-gradient-to-b from-transparent to-[#C9A96E] ml-auto" />
      </div>

      {/* Main content — generous vertical space */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-44 pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-3 mb-14">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <p className="text-[#C9A96E] text-[10px] tracking-[0.6em] uppercase font-sans">
              {h.eyebrow}
            </p>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>

          {/* Headline — very large */}
          <h1 className="font-serif text-[clamp(60px,12vw,130px)] text-[#0A0A0A] leading-[0.92] tracking-tight mb-10">
            {h.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="not-italic text-[#0A0A0A]">{line}</em> : line}
              </span>
            ))}
          </h1>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A96E]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>

          {/* Subheadline */}
          <p className="text-[#6B6B6B] font-sans font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16">
            {h.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#brands"
              className="w-full sm:w-auto px-12 py-4 bg-[#0A0A0A] text-white text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#C9A96E] transition-colors duration-300 text-center"
            >
              {h.cta}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-4 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#C9A96E] hover:text-white transition-all duration-300 text-center"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — dark, flush to bottom */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 bg-[#111111]">
        {[
          { value: h.stat1Value, label: h.stat1Label },
          { value: h.stat2Value, label: h.stat2Label },
          { value: h.stat3Value, label: h.stat3Label },
          { value: h.stat4Value, label: h.stat4Label },
        ].map((stat, i) => (
          <div
            key={i}
            className={`py-8 px-6 text-center ${i < 3 ? "border-r border-white/6" : ""} ${i >= 2 ? "border-t border-white/6 md:border-t-0" : ""}`}
          >
            <div className="font-serif text-3xl md:text-4xl text-[#C9A96E] mb-1.5">
              {stat.value}
            </div>
            <div className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
