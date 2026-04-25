"use client";

import { useLanguage } from "@/lib/i18n";

export default function Brands() {
  const { t } = useLanguage();
  const b = t.brands;

  const brands = [
    {
      data: b.ixoraGlass,
      accent: "#C9A96E",
      number: "01",
      bg: "bg-[#111111]",
    },
    {
      data: b.ixoraLiving,
      accent: "#8BAF9A",
      number: "02",
      bg: "bg-[#0F0F0F]",
    },
    {
      data: b.lumae,
      accent: "#B8A0D4",
      number: "03",
      bg: "bg-[#111111]",
    },
  ];

  return (
    <section id="brands" className="py-32 px-6 lg:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">
            {b.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            {b.h2}
          </h2>
          <p className="text-white/40 font-sans font-light max-w-lg mx-auto">
            {b.subtitle}
          </p>
        </div>

        {/* Brand cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {brands.map(({ data, accent, number, bg }) => (
            <div key={number} className={`${bg} p-10 lg:p-12 flex flex-col group`}>
              {/* Number */}
              <span className="font-serif text-6xl leading-none mb-8"
                style={{ color: `${accent}15` }}>
                {number}
              </span>

              {/* Name */}
              <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                {data.name}
              </h3>
              <p className="font-sans text-xs tracking-widest uppercase mb-6"
                style={{ color: accent }}>
                {data.tagline}
              </p>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: `${accent}30` }} />

              {/* Description */}
              <p className="text-white/40 font-sans font-light text-sm leading-relaxed mb-8 flex-1">
                {data.description}
              </p>

              {/* Services list */}
              <ul className="space-y-2 mb-8">
                {data.services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-white/30 font-sans text-xs tracking-wide">
                    <span className="w-3 h-px" style={{ background: accent }} />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={`https://www.${data.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans transition-colors duration-200"
                style={{ color: `${accent}80` }}
                onMouseEnter={e => (e.currentTarget.style.color = accent)}
                onMouseLeave={e => (e.currentTarget.style.color = `${accent}80`)}
              >
                <span>{data.url}</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
