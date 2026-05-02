export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-16 px-6 lg:px-12 bg-[#141414] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
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
                className="font-sans text-xs font-light text-white/30 hover:text-[#C9A96E] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-3">
          <p className="font-sans text-xs font-light text-white/20">
            &copy; {year} JC Solutions Enterprise LLC. Florida Licensed &amp; Insured.
          </p>
          <p className="font-sans text-xs font-light text-white/20">
            2774 E Colonial Dr, Suite C #1092, Orlando FL 32803
          </p>
        </div>
      </div>
    </footer>
  );
}
