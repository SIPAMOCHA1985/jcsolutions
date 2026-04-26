"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative flex flex-col bg-[#FAFAF8] overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top-left corner accent */}
      <div className="absolute top-24 left-10 pointer-events-none hidden lg:block">
        <div className="w-px h-24 bg-gradient-to-b from-[#C9A96E] to-transparent" />
        <div className="h-px w-24 bg-gradient-to-r from-[#C9A96E] to-transparent" />
      </div>

      {/* Bottom-right corner accent */}
      <div className="absolute bottom-28 right-10 pointer-events-none hidden lg:block">
        <div className="h-px w-24 bg-gradient-to-l from-[#C9A96E] to-transparent ml-auto" />
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#C9A96E] ml-auto" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-36 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <p className="text-[#C9A96E] text-[10px] tracking-[0.55em] uppercase font-sans">
              {h.eyebrow}
            </p>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(56px,10vw,110px)] text-[#0A0A0A] leading-[1.0] tracking-tight mb-8">
            {h.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="italic text-[#0A0A0A]">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A96E]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>

          {/* Subheadline */}
          <p className="text-[#6B6B6B] font-sans font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14">
            {h.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#brands"
              className="px-12 py-4 bg-[#0A0A0A] text-white text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#C9A96E] transition-colors duration-300"
            >
              {h.cta}
            </a>
            <a
              href="#contact"
              className="px-12 py-4 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 bg-[#111111]">
        {[
          { value: h.stat1Value, label: h.stat1Label },
          { value: h.stat2Value, label: h.stat2Label },
          { value: h.stat3Value, label: h.stat3Label },
          { value: h.stat4Value, label: h.stat4Label },
        ].map((stat, i) => (
          <div
            key={i}
            className={`py-9 px-6 text-center ${i < 3 ? "border-r border-white/5" : ""} ${i >= 2 ? "border-t border-white/5 md:border-t-0" : ""}`}
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
