export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10 px-8 lg:px-14 py-14">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-14">
        <div>
          <p className="font-serif text-base font-medium tracking-[0.2em] uppercase text-white mb-1">JC Solutions</p>
          <p className="font-sans text-[9px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Enterprise LLC</p>
          <p className="font-sans text-xs font-light text-white/30 max-w-xs leading-relaxed">
            A Florida-based holding company delivering luxury construction, custom glass, and interior design across Central Florida.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-3">
          {[
            { href: "#about", label: "About" },
            { href: "#portfolio", label: "Portfolio" },
            { href: "#services", label: "Services" },
            { href: "#contact", label: "Contact" },
            { href: "https://ixoraglass.com", label: "IxoraGlass" },
            { href: "https://ixora-living.com", label: "Ixora Living" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="font-sans text-[11px] font-light text-white/30 hover:text-[#C9A96E] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-3">
        <p className="font-sans text-[11px] font-light text-white/20">
          &copy; {year} JC Solutions Enterprise LLC. Orlando, Florida. Licensed &amp; Insured.
        </p>
        <p className="font-sans text-[11px] font-light text-white/20">
          2774 E Colonial Dr, Suite C #1092, Orlando FL 32803
        </p>
      </div>
    </footer>
  );
}
