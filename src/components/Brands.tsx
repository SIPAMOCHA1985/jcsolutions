"use client";

import { useLanguage } from "@/lib/i18n";

const GlassIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect x="2" y="2" width="36" height="36" rx="2" stroke="#C9A96E" strokeWidth="1.5" />
    <path d="M2 14h36M2 26h36M14 2v36M26 2v36" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);
const LivingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <path d="M4 36V18L20 4l16 14v18" stroke="#8BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="15" y="24" width="10" height="12" stroke="#8BAF9A" strokeWidth="1.2" strokeOpacity="0.5" />
  </svg>
);

export default function Brands() {
  const { t } = useLanguage();
  const b = t.brands;

  const brands = [
    { data: b.ixoraGlass,  icon: <GlassIcon />,   accent: "#C9A96E", number: "01" },
    { data: b.ixoraLiving, icon: <LivingIcon />,  accent: "#8BAF9A", number: "02" },
  ];

  return (
    <section id="brands">
      <div className="bg-[#0A0A0A] py-28 md:py-36 px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.6em] uppercase font-sans mb-5">
              {b.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              {b.physicalLabel}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
            </div>
            <p className="text-white/40 font-sans font-light text-sm max-w-xl mx-auto leading-relaxed">
              {b.physicalSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brands.map(({ data, icon, accent, number }) => (
              <div
                key={number}
                className="group bg-white/5 border border-white/10 hover:border-[#C9A96E]/40 p-10 flex flex-col transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {icon}
                  </div>
                  <span className="font-serif text-4xl leading-none" style={{ color: `${accent}18` }}>
                    {number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {data.name}
                </h3>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color: accent }}>
                  {data.tagline}
                </p>
                <div className="h-px mb-5" style={{ background: `${accent}30` }} />
                <p className="text-white/45 font-sans font-light text-sm leading-relaxed mb-6 flex-1">
                  {data.description}
                </p>
                <ul className="space-y-2 mb-7">
                  {data.services.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-[#999] font-sans text-xs">
                      <span className="w-4 h-px flex-shrink-0" style={{ background: accent }} />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://www.${data.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-white/30 hover:text-[#C9A96E] transition-colors duration-200"
                >
                  <span>{data.url}</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
