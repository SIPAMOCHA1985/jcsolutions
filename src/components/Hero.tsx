"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <p className="text-[#C9A96E] text-xs tracking-[0.5em] uppercase font-sans mb-8">
          {h.eyebrow}
        </p>

        {/* Horizontal rule */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-8">
          {h.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span className="text-[#C9A96E]">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-white/50 font-sans font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14">
          {h.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#brands"
            className="px-10 py-4 bg-[#C9A96E] text-white text-sm tracking-[0.3em] uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300"
          >
            {h.cta}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-white/20 text-white/70 text-sm tracking-[0.3em] uppercase font-sans hover:border-white/50 hover:text-white transition-all duration-300"
          >
            {h.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}
