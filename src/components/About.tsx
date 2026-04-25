"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">
              {a.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              {a.h2}
            </h2>
            <div className="h-px w-16 bg-[#C9A96E]/40 mb-8" />
            <p className="text-white/50 font-sans font-light text-base leading-relaxed">
              {a.body}
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {[
              { value: a.stat1Value, label: a.stat1Label },
              { value: a.stat2Value, label: a.stat2Label },
              { value: a.stat3Value, label: a.stat3Label },
              { value: a.stat4Value, label: a.stat4Label },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0D0D0D] p-10 flex flex-col items-center justify-center text-center">
                <span className="font-serif text-4xl md:text-5xl text-[#C9A96E] mb-3">
                  {stat.value}
                </span>
                <span className="text-white/40 font-sans text-xs tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
