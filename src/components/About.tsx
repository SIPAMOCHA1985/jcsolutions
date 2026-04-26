"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;
  const h = t.hero;

  return (
    <section id="about" className="bg-[#111111] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header + body */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-5">
            {a.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
            {a.h2.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="italic text-[#C9A96E]">{line}</span> : line}
              </span>
            ))}
          </h2>
          <div className="h-px w-16 bg-[#C9A96E]/50 mb-8" />
          <p className="text-white/50 font-sans font-light text-base leading-relaxed">
            {a.body}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/8">
          {[
            { value: h.stat1Value, label: h.stat1Label },
            { value: h.stat2Value, label: h.stat2Label },
            { value: h.stat3Value, label: h.stat3Label },
            { value: h.stat4Value, label: h.stat4Label },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-10 px-8 flex flex-col items-center text-center border-white/8 ${i > 0 ? "border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
            >
              <span className="font-serif text-4xl md:text-5xl text-[#C9A96E] mb-2">
                {stat.value}
              </span>
              <span className="text-white/35 font-sans text-[10px] tracking-[0.35em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
