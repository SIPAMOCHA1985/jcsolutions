const brands = [
  {
    name: "IxoraGlass",
    tag: "Custom Glass Solutions",
    description: "Orlando's premier provider of frameless shower doors, custom glass enclosures, sliding glass doors, glass staircases, and bespoke architectural glass installations.",
    features: ["Frameless Shower Doors", "Custom Enclosures", "Sliding Glass Doors", "Glass Staircases"],
    url: "https://ixoraglass.com",
    urlShort: "ixoraglass.com",
    image: "/images/hero-01.jpg",
  },
  {
    name: "Ixora Living",
    tag: "Luxury Interiors & Remodeling",
    description: "Premium interior design and full-service remodeling for residential and commercial spaces. From concept to completion with sophistication and precision.",
    features: ["Interior Design", "Full Remodeling", "Kitchen & Bath", "Commercial Spaces"],
    url: "https://ixora-living.com",
    urlShort: "ixora-living.com",
    image: "/images/hero-03.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white border-b border-[#E5E5E0]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 pt-28 pb-8">
        <p className="font-sans text-[9px] font-medium tracking-[0.55em] uppercase text-[#C9A96E] mb-6">
          Our Brands
        </p>
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-serif font-medium text-[#0A0A0A] leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Proof of Execution.
          </h2>
          <p className="hidden md:block font-sans text-sm font-light text-[#6B6B6B] max-w-xs leading-relaxed text-right">
            Two operational brands generating revenue and building the JCS reputation across Central Florida.
          </p>
        </div>
      </div>

      {brands.map((b, i) => (
        <div key={b.name} className={`border-t border-[#E5E5E0] ${i % 2 === 1 ? "bg-[#F7F7F5]" : "bg-white"}`}>
          <div className={`max-w-screen-xl mx-auto px-8 lg:px-14 py-16 grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
            <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
              <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-4">
                {b.tag}
              </p>
              <h3 className="font-serif font-medium text-[#0A0A0A] mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                {b.name}
              </h3>
              <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed mb-8 max-w-md">
                {b.description}
              </p>

              <div className="grid grid-cols-2 gap-px border border-[#E5E5E0] mb-8">
                {b.features.map((f) => (
                  <div key={f} className="bg-white p-5">
                    <div className="w-4 h-px bg-[#C9A96E] mb-3" />
                    <p className="font-sans text-xs font-light text-[#0A0A0A]">{f}</p>
                  </div>
                ))}
              </div>

              <a href={b.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300">
                <span className="w-4 h-px bg-[#C9A96E]" />
                {b.urlShort}
              </a>
            </div>

            <div className={`relative aspect-[4/3] overflow-hidden border border-[#E5E5E0] ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
              <img
                src={b.image}
                alt={b.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/10" />
            </div>
          </div>
        </div>
      ))}

      <div className="border-t border-[#E5E5E0] bg-white">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-8">
          <p className="font-sans text-[9px] font-light tracking-[0.4em] uppercase text-[#6B6B6B] text-right">
            2774 E Colonial Drive, Suite C #1092, Orlando, FL 32803
          </p>
        </div>
      </div>
    </section>
  );
}
