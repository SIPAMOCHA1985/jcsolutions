const brands = [
  {
    name: "IxoraGlass",
    tag: "Custom Glass Solutions",
    description: "Orlando's premier provider of frameless shower doors, custom glass enclosures, sliding glass doors, glass staircases, and bespoke architectural glass installations.",
    features: ["Frameless Shower Doors", "Custom Enclosures", "Sliding Glass Doors", "Glass Staircases"],
    url: "https://ixoraglass.com",
    urlShort: "ixoraglass.com",
  },
  {
    name: "Ixora Living",
    tag: "Luxury Interiors & Remodeling",
    description: "Premium interior design and full-service remodeling for residential and commercial spaces. From concept to completion with sophistication and precision.",
    features: ["Interior Design", "Full Remodeling", "Kitchen & Bath", "Commercial Spaces"],
    url: "https://ixora-living.com",
    urlShort: "ixora-living.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0C0C0C] border-t border-white/5">
      <div className="px-8 lg:px-14 pt-28 pb-8">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-6">
          (Our Portfolio)
        </p>
        <h2 className="font-serif font-medium text-white leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Luxury Spaces
        </h2>
        <h2 className="font-serif font-medium text-[#C9A96E] leading-[0.95] mb-24" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          &amp; Products
        </h2>
      </div>

      {brands.map((b, i) => (
        <div key={b.name} className={`border-t border-white/10 px-8 lg:px-14 py-20 grid lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? "bg-[#0f0f0f]" : ""}`}>
          <div>
            <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-6">
              {b.tag}
            </p>
            <h3 className="font-serif font-medium text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              {b.name}
            </h3>
            <p className="font-sans text-sm font-light text-white/45 leading-relaxed mb-10 max-w-md">
              {b.description}
            </p>
            <a href={b.url} target="_blank" rel="noopener noreferrer"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-white/40 hover:text-[#C9A96E] transition-colors duration-300">
              {b.urlShort} &rarr;
            </a>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10">
            {b.features.map((f) => (
              <div key={f} className="bg-[#0C0C0C] p-8">
                <div className="w-6 h-px bg-[#C9A96E]/60 mb-4" />
                <p className="font-sans text-xs font-light text-white/60">{f}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="px-8 lg:px-14 py-16 border-t border-white/10">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/20 text-right">
          2774 E Colonial Drive, Suite C #1092, Orlando, FL 32803
        </p>
      </div>
    </section>
  );
}
