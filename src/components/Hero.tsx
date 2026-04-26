"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0A0A0A] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-28 left-12 pointer-events-none hidden lg:block">
        <div className="w-px h-28 bg-gradient-to-b from-[#C9A96E]/50 to-transparent" />
        <div className="h-px w-28 bg-gradient-to-r from-[#C9A96E]/50 to-transparent" />
      </div>
      <div className="absolute bottom-32 right-12 pointer-events-none hidden lg:block">
        <div className="h-px w-28 bg-gradient-to-l from-[#C9A96E]/50 to-transparent ml-auto" />
        <div className="w-px h-28 bg-gradient-to-b from-transparent to-[#C9A96E]/50 ml-auto" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-40 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="h-px w-10 bg-[#C9A96E]/60" />
            <p className="text-[#C9A96E] text-[10px] tracking-[0.6em] uppercase font-sans">
              {h.eyebrow}
            </p>
            <div className="h-px w-10 bg-[#C9A96E]/60" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight mb-8">
            {h.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="not-italic text-[#C9A96E]">{line}</em> : line}
              </span>
            ))}
          </h1>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
          </div>

          {/* Subheadline */}
          <p className="text-white/50 font-sans font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14">
            {h.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#brands"
              className="w-full sm:w-auto px-12 py-4 bg-[#C9A96E] text-white text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300 text-center"
            >
              {h.cta}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-4 border border-white/20 text-white/70 text-xs tracking-[0.4em] uppercase font-sans hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300 text-center"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/8">
        {[
          { value: h.stat1Value, label: h.stat1Label },
          { value: h.stat2Value, label: h.stat2Label },
          { value: h.stat3Value, label: h.stat3Label },
          { value: h.stat4Value, label: h.stat4Label },
        ].map((stat, i) => (
          <div
            key={i}
            className={`py-8 px-6 text-center bg-[#111111] ${i < 3 ? "border-r border-white/6" : ""} ${i >= 2 ? "border-t border-white/6 md:border-t-0" : ""}`}
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
