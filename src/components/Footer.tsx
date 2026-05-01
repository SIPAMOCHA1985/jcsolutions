export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E8E8ED] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <p className="font-serif text-base font-medium tracking-[0.2em] uppercase text-[#1D1D1F] mb-1">
              JC Solutions
            </p>
            <p className="font-sans text-[9px] font-light tracking-[0.35em] text-[#C9A96E] uppercase mb-5">
              Enterprise LLC
            </p>
            <p className="font-sans text-xs font-light text-[#6E6E73] leading-relaxed">
              A Florida-based holding company delivering luxury construction, custom glass, and interior design across Central Florida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#portfolio", label: "Our Portfolio" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-xs font-light text-[#6E6E73] hover:text-[#C9A96E] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Luxury Brands */}
          <div>
            <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-5">
              Luxury Brands
            </p>
            <ul className="space-y-3">
              {[
                { href: "https://ixoraglass.com", label: "IxoraGlass" },
                { href: "https://ixora-living.com", label: "Ixora Living" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-light text-[#6E6E73] hover:text-[#C9A96E] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E8E8ED] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] font-light text-[#6E6E73]">
            &copy; {year} JC Solutions Enterprise LLC. All rights reserved. Orlando, Florida.
          </p>
          <p className="font-sans text-[11px] font-light text-[#6E6E73]">
            Licensed &amp; Insured &mdash; State of Florida
          </p>
        </div>
      </div>
    </footer>
  );
}
