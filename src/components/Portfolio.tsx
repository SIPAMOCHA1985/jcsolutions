const brands = [
  {
    name: "IxoraGlass",
    tag: "Custom Glass Solutions",
    image: "/images/hero-01.jpg",
    description: "Orlando's premier provider of frameless shower doors, custom glass enclosures, sliding glass doors, glass staircases, and bespoke architectural glass installations.",
    features: ["Frameless Shower Doors", "Custom Enclosures", "Sliding Glass Doors", "Glass Staircases"],
    url: "https://ixoraglass.com",
    urlShort: "ixoraglass.com",
  },
  {
    name: "Ixora Living",
    tag: "Luxury Interiors & Remodeling",
    image: "/images/hero-03.jpg",
    description: "Premium interior design and full-service remodeling for residential and commercial spaces. From concept to completion with sophistication and precision.",
    features: ["Interior Design", "Full Remodeling", "Kitchen & Bath", "Commercial Spaces"],
    url: "https://ixora-living.com",
    urlShort: "ixora-living.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1C1C1C]">
            Our Brands
          </h2>
          <p className="text-[#6B6B6B] font-sans font-light mt-4 max-w-xl mx-auto">
            Two operational brands generating real revenue and building the JCS reputation across Central Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#E2DDD5]">
          {brands.map((b) => (
            <div key={b.name} className="bg-[#FAF9F6] group">
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: "280px" }}>
                <img src={b.image} alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#1C1C1C]/30" />
              </div>
              {/* Content */}
              <div className="p-10 lg:p-12">
                <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-3">{b.tag}</p>
                <h3 className="font-serif text-3xl text-[#1C1C1C] mb-4">{b.name}</h3>
                <p className="text-[#6B6B6B] font-sans font-light leading-relaxed mb-8">{b.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {b.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-4 h-px bg-[#C9A96E] flex-shrink-0" />
                      <span className="text-[#6B6B6B] font-sans font-light text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <a href={b.url} target="_blank" rel="noopener noreferrer"
                  className="inline-block text-sm tracking-widest uppercase px-8 py-3 border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 font-sans">
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
