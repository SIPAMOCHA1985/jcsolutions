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
    <section id="portfolio" className="bg-[#F7F7F5] border-t border-[#E5E5E0]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] font-medium tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Our Work
          </p>
          <h2 className="font-serif font-medium text-[#0A0A0A] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Our Brands
          </h2>
          <p className="font-sans text-sm font-light text-[#6B6B6B] mt-4 max-w-xl mx-auto">
            Two operational brands generating real revenue and building the JCS reputation across Central Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((b) => (
            <div key={b.name} className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="p-10">
                <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-3">
                  {b.tag}
                </p>
                <h3 className="font-serif font-medium text-[#0A0A0A] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  {b.name}
                </h3>
                <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed mb-8">
                  {b.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {b.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-4 h-px bg-[#C9A96E] flex-shrink-0" />
                      <p className="font-sans text-xs font-light text-[#6B6B6B]">{f}</p>
                    </div>
                  ))}
                </div>

                <a href={b.url} target="_blank" rel="noopener noreferrer"
                  className="inline-block font-sans text-[10px] font-medium tracking-[0.35em] uppercase border border-[#0A0A0A] text-[#0A0A0A] px-6 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300">
                  Visit {b.urlShort}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
