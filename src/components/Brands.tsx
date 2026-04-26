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
const LumaeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <path d="M20 3l4.2 8.5L34 13l-7 6.8 1.6 9.4L20 24.6l-8.6 4.6L13 19.8 6 13l9.8-1.5z" stroke="#B8A0D4" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const RepliqIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect x="2" y="6" width="28" height="20" rx="3" stroke="#4F9EF0" strokeWidth="1.5" />
    <path d="M8 14h14M8 19h9" stroke="#4F9EF0" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="32" cy="30" r="6" stroke="#4F9EF0" strokeWidth="1.2" />
    <path d="M30 30h4M32 28v4" stroke="#4F9EF0" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
const PageforgeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect x="6" y="2" width="24" height="32" rx="2" stroke="#50C878" strokeWidth="1.5" />
    <path d="M11 11h18M11 17h18M11 23h12" stroke="#50C878" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M26 28l4-4 4 4" stroke="#50C878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 24v10" stroke="#50C878" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Brands() {
  const { t } = useLanguage();
  const b = t.brands;

  const physicalBrands = [
    { data: b.ixoraGlass,  icon: <GlassIcon />,   accent: "#C9A96E", number: "01" },
    { data: b.ixoraLiving, icon: <LivingIcon />,  accent: "#8BAF9A", number: "02" },
    { data: b.lumae,       icon: <LumaeIcon />,   accent: "#B8A0D4", number: "03" },
  ];
  const digitalBrands = [
    { data: b.repliq,     icon: <RepliqIcon />,    accent: "#4F9EF0", number: "04" },
    { data: b.pageforge,  icon: <PageforgeIcon />, accent: "#50C878", number: "05" },
  ];

  return (
    <section id="brands">

      {/* ── PHYSICAL BRANDS — white bg ── */}
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

          <div className="grid md:grid-cols-3 gap-6">
            {physicalBrands.map(({ data, icon, accent, number }) => (
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

      {/* ── DIGITAL BRANDS — dark bg ── */}
      <div className="bg-[#111111] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-3">
              {b.digitalLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              {b.digitalLabel}
            </h2>
            <p className="text-white/40 font-sans font-light text-sm max-w-xl leading-relaxed">
              {b.digitalSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {digitalBrands.map(({ data, icon, accent, number }) => (
              <div
                key={number}
                className="group bg-white/5 border border-white/10 hover:border-[#C9A96E]/30 p-10 flex flex-col transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
                <div className="h-px mb-5" style={{ background: `${accent}25` }} />
                <p className="text-white/45 font-sans font-light text-sm leading-relaxed mb-6 flex-1">
                  {data.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {data.services.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-white/30 font-sans text-xs">
                      <span className="w-4 h-px flex-shrink-0" style={{ background: `${accent}80` }} />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 border text-[9px] tracking-[0.3em] uppercase font-sans"
                    style={{ borderColor: `${accent}40`, color: accent }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                    Live
                  </span>
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
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
