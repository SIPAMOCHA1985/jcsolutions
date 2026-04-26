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
      <div className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-3">
              {b.sectionLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A] mb-3">
              {b.physicalLabel}
            </h2>
            <p className="text-[#6B6B6B] font-sans font-light text-sm max-w-xl leading-relaxed">
              {b.physicalSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brands.map(({ data, icon, accent, number }) => (
              <div
                key={number}
                className="group bg-white rounded-sm border border-[#E8E3DA] shadow-md hover:shadow-xl p-8 flex flex-col transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {icon}
                  </div>
                  <span className="font-serif text-4xl leading-none" style={{ color: `${accent}18` }}>
                    {number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#0A0A0A] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {data.name}
                </h3>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color: accent }}>
                  {data.tagline}
                </p>
                <div className="h-px mb-5" style={{ background: `${accent}30` }} />
                <p className="text-[#6B6B6B] font-sans font-light text-sm leading-relaxed mb-6 flex-1">
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
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-[#0A0A0A]/40 hover:text-[#C9A96E] transition-colors duration-200"
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
