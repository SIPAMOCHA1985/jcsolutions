export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A0A0A] px-8 lg:px-14 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-[#C9A96E]" />
              <div>
                <p className="font-serif text-base font-medium tracking-[0.2em] uppercase text-white">JC Solutions</p>
                <p className="font-sans text-[8px] tracking-[0.4em] text-[#C9A96E] uppercase">Enterprise LLC</p>
              </div>
            </div>
            <p className="font-sans text-xs font-light text-white/30 max-w-xs leading-relaxed">
              A Florida-based enterprise delivering logistics, construction solutions, and real estate services across Central Florida.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
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
            &copy; {year} JC Solutions Enterprise LLC. Florida Licensed &amp; Insured.
          </p>
          <p className="font-sans text-[11px] font-light text-white/20">
            2774 E Colonial Dr, Suite C #1092, Orlando FL 32803
          </p>
        </div>
      </div>
    </footer>
  );
}
