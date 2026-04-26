"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <p className="font-serif text-xl text-white tracking-[0.12em] uppercase">
                JC Solutions
              </p>
              <p className="text-[#C9A96E] font-sans text-[9px] tracking-[0.4em] uppercase mt-1">
                Enterprise LLC
              </p>
            </div>
            <div className="h-px w-10 bg-[#C9A96E]/40 mb-5" />
            <p className="text-white/30 font-sans font-light text-sm leading-relaxed mb-4">
              {f.tagline}
            </p>
            <p className="text-white/15 font-sans font-light text-xs leading-relaxed">
              {f.legalLine}<br />
              {f.legalAddress}
            </p>
          </div>

          {/* Luxury Brands */}
          <div>
            <p className="text-[#C9A96E] font-sans text-[10px] tracking-[0.35em] uppercase mb-6">
              {f.physicalLabel}
            </p>
            <div className="space-y-3">
              {[
                { name: "IxoraGlass", url: "https://www.ixoraglass.com" },
                { name: "Ixora Living", url: "https://www.ixora-living.com" },
                { name: "LUMAE Luxury", url: "https://www.lumae-luxury.com" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/30 font-sans text-sm hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Digital Products */}
          <div>
            <p className="text-[#C9A96E] font-sans text-[10px] tracking-[0.35em] uppercase mb-6">
              {f.digitalLabel}
            </p>
            <div className="space-y-3">
              {[
                { name: "RepliQio", url: "https://www.repliqio.com" },
                { name: "PageForge", url: "https://www.thepageforge.com" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/30 font-sans text-sm hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[#C9A96E] font-sans text-[10px] tracking-[0.35em] uppercase mb-6">
              {f.linksLabel}
            </p>
            <div className="space-y-3">
              {[
                ["#about", f.linkAbout],
                ["#brands", f.linkBrands],
                ["#services", f.linkServices],
                ["#contact", f.linkContact],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-white/30 font-sans text-sm hover:text-white/60 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 font-sans text-xs tracking-wide">
            © {year} {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#C9A96E]/40" />
              <p className="text-white/15 font-sans text-xs">Orlando, Florida</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#25D366]/40" />
              <a href="https://wa.me/14075388810" className="text-white/15 font-sans text-xs hover:text-white/40 transition-colors duration-200">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
