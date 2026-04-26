"use client";

import { useLanguage } from "@/lib/i18n";

const GlassIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="40" height="40" rx="2" stroke="#C9A96E" strokeWidth="1.5" />
    <path d="M4 18h40M4 30h40M18 4v40M30 4v40" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.35" />
    <circle cx="24" cy="24" r="3" fill="#C9A96E" fillOpacity="0.6" />
  </svg>
);

const LivingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path d="M6 42V22L24 6l18 16v20" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="18" y="30" width="12" height="12" stroke="#C9A96E" strokeWidth="1.2" strokeOpacity="0.5" />
    <path d="M14 22h6M28 22h6" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />
  </svg>
);

const LumaeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path d="M24 4l5 10 11 1.6-8 7.8 1.9 11L24 29l-9.9 5.4L16 23.4l-8-7.8L19 14z" stroke="#C9A96E" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="5" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.4" />
  </svg>
);

const RepliqIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="4" y="8" width="32" height="24" rx="4" stroke="#C9A96E" strokeWidth="1.5" />
    <path d="M12 18h16M12 24h10" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M36 22l8 4-8 4v-8z" fill="#C9A96E" fillOpacity="0.6" />
    <circle cx="38" cy="38" r="6" stroke="#C9A96E" strokeWidth="1.2" />
    <path d="M36 38h4M38 36v4" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const PageforgeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="8" y="4" width="28" height="36" rx="2" stroke="#C9A96E" strokeWidth="1.5" />
    <path d="M14 14h20M14 20h20M14 26h12" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M30 32l4-4 4 4M34 28v10" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Brands() {
  const { t } = useLanguage();
  const b = t.brands;

  const physicalBrands = [
    {
      data: b.ixoraGlass,
      icon: <GlassIcon />,
      accent: "#C9A96E",
      number: "01",
    },
    {
      data: b.ixoraLiving,
      icon: <LivingIcon />,
      accent: "#8BAF9A",
      number: "02",
    },
    {
      data: b.lumae,
      icon: <LumaeIcon />,
      accent: "#B8A0D4",
      number: "03",
    },
  ];

  const digitalBrands = [
    {
      data: b.repliq,
      icon: <RepliqIcon />,
      accent: "#4F9EF0",
      number: "04",
    },
    {
      data: b.pageforge,
      icon: <PageforgeIcon />,
      accent: "#50C878",
      number: "05",
    },
  ];

  return (
    <section id="brands" className="bg-[#FAFAF8]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 text-center">
        <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-5">
          {b.sectionLabel}
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#C9A96E]/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <div className="h-px w-16 bg-[#C9A96E]/40" />
        </div>
      </div>

      {/* ── PHYSICAL BRANDS ── */}
      <div className="bg-white border-y border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A] mb-3">
              {b.physicalLabel}
            </h2>
            <p className="text-[#6B6B6B] font-sans font-light max-w-2xl">
              {b.physicalSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {physicalBrands.map(({ data, icon, accent, number }) => (
              <div
                key={number}
                className="group border border-[#E8E3DA] bg-[#FAFAF8] p-9 flex flex-col hover:border-[#C9A96E]/40 hover:shadow-lg transition-all duration-400"
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {icon}
                  </div>
                  <span
                    className="font-serif text-5xl leading-none"
                    style={{ color: `${accent}18` }}
                  >
                    {number}
                  </span>
                </div>

                {/* Brand name */}
                <h3 className="font-serif text-2xl text-[#0A0A0A] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {data.name}
                </h3>
                <p
                  className="font-sans text-[10px] tracking-[0.4em] uppercase mb-5"
                  style={{ color: accent }}
                >
                  {data.tagline}
                </p>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: `${accent}30` }} />

                {/* Description */}
                <p className="text-[#6B6B6B] font-sans font-light text-sm leading-relaxed mb-7 flex-1">
                  {data.description}
                </p>

                {/* Services */}
                <ul className="space-y-2 mb-8">
                  {data.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-[#999] font-sans text-xs tracking-wide"
                    >
                      <span className="w-4 h-px flex-shrink-0" style={{ background: accent }} />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={`https://www.${data.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans transition-colors duration-200 text-[#0A0A0A]/40 hover:text-[#C9A96E]"
                >
                  <span>{data.url}</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DIGITAL BRANDS ── */}
      <div className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="mb-12">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-sans mb-4">
              {b.digitalLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              {b.digitalLabel}
            </h2>
            <p className="text-white/40 font-sans font-light max-w-2xl">
              {b.digitalSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {digitalBrands.map(({ data, icon, accent, number }) => (
              <div
                key={number}
                className="group border border-white/8 bg-white/4 p-10 flex flex-col hover:border-[#C9A96E]/30 hover:bg-white/6 transition-all duration-400"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {icon}
                  </div>
                  <span
                    className="font-serif text-5xl leading-none"
                    style={{ color: `${accent}18` }}
                  >
                    {number}
                  </span>
                </div>

                {/* Brand name */}
                <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {data.name}
                </h3>
                <p
                  className="font-sans text-[10px] tracking-[0.4em] uppercase mb-5"
                  style={{ color: accent }}
                >
                  {data.tagline}
                </p>

                <div className="h-px mb-6" style={{ background: `${accent}25` }} />

                {/* Description */}
                <p className="text-white/45 font-sans font-light text-sm leading-relaxed mb-7 flex-1">
                  {data.description}
                </p>

                {/* Services */}
                <ul className="space-y-2 mb-8">
                  {data.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-white/30 font-sans text-xs tracking-wide"
                    >
                      <span className="w-4 h-px flex-shrink-0" style={{ background: `${accent}80` }} />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Live badge + link */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 border text-[10px] tracking-[0.3em] uppercase font-sans"
                    style={{ borderColor: `${accent}40`, color: accent }}>
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
