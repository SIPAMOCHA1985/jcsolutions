"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
              {a.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              {a.h2.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <em className="not-italic text-[#C9A96E]">{line}</em> : line}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-white/50 font-sans font-light max-w-sm leading-relaxed">
            {a.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {a.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1C1C1C] p-10 group hover:bg-white/5 transition-colors duration-300"
            >
              <span className="text-3xl mb-6 block">{item.icon}</span>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/50 font-sans font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-12 py-4 border border-[#C9A96E] text-[#C9A96E] text-sm tracking-widest uppercase font-sans hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
          >
            {a.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
