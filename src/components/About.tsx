"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="bg-[#111111] min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center py-32">
        <p className="text-[#C9A96E] text-[10px] tracking-[0.6em] uppercase font-sans mb-8">
          {a.sectionLabel}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
          {a.h2.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <span className="italic text-[#C9A96E]">{line}</span> : line}
            </span>
          ))}
        </h2>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>
        <p className="text-white/45 font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {a.body}
        </p>
      </div>
    </section>
  );
}
