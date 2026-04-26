"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-6">
              {a.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] leading-tight mb-8">
              {a.h2.split("\n").map((line, i) => (
                <span key={i} className="block">{i === 1 ? <span className="italic">{line}</span> : line}</span>
              ))}
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C9A96E]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            </div>
            <p className="text-[#6B6B6B] font-sans font-light text-base leading-relaxed">
              {a.body}
            </p>
          </div>

          {/* Right: visual grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-[#FAFAF8] border border-[#E8E3DA] p-8 flex flex-col">
              <div className="w-8 h-8 mb-6">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <rect x="2" y="10" width="28" height="20" rx="1" stroke="#C9A96E" strokeWidth="1.5" />
                  <path d="M2 17h28" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.4" />
                  <path d="M11 10V6a5 5 0 0110 0v4" stroke="#C9A96E" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-2">Luxury</p>
              <p className="font-serif text-[#0A0A0A] text-lg leading-snug">Premium construction & interior brands</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111111] p-8 flex flex-col">
              <div className="w-8 h-8 mb-6">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <rect x="4" y="4" width="24" height="24" rx="4" stroke="#C9A96E" strokeWidth="1.5" />
                  <path d="M10 16h4M18 13l4 3-4 3" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-2">Digital</p>
              <p className="font-serif text-white text-lg leading-snug">AI-powered SaaS products at scale</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F0E8] border border-[#E8E3DA] p-8 flex flex-col col-span-2">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">Our commitment</p>
              <p className="font-serif text-[#0A0A0A] text-2xl leading-snug">
                "Every brand we build is an expression of one standard: <span className="italic text-[#C9A96E]">uncompromising excellence.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
