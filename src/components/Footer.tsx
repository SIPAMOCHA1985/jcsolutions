export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 px-8 lg:px-14 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <p className="font-serif text-base font-medium tracking-[0.2em] uppercase text-white mb-1">JC Solutions</p>
            <p className="font-sans text-[8px] tracking-[0.45em] text-[#C9A96E] uppercase mb-6">Enterprise LLC</p>
            <p className="font-sans text-xs font-light text-white/30 max-w-xs leading-relaxed">
              Central Florida&apos;s premier business solutions partner for construction, logistics, distribution, and real estate.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            {[
              { href: "#services", label: "Services" },
              { href: "#about", label: "About" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#payments", label: "Payments" },
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
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-3">
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
