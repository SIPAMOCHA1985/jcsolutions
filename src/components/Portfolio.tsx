const brands = [
  {
    name: "IxoraGlass",
    tag: "Custom Glass Solutions",
    description:
      "Orlando's premier provider of frameless shower doors, custom glass enclosures, sliding glass doors, glass staircases, and bespoke architectural glass installations.",
    features: [
      "Frameless Shower Doors",
      "Custom Enclosures",
      "Sliding Glass Doors",
      "Glass Staircases",
    ],
    url: "https://ixoraglass.com",
    urlLabel: "ixoraglass.com →",
    accent: "#C9A96E",
  },
  {
    name: "Ixora Living",
    tag: "Luxury Interiors & Remodeling",
    description:
      "Premium interior design and full-service remodeling for residential and commercial spaces. From concept to completion, we transform environments with sophistication and precision.",
    features: [
      "Interior Design",
      "Full Remodeling",
      "Kitchen & Bath",
      "Commercial Spaces",
    ],
    url: "https://ixora-living.com",
    urlLabel: "ixora-living.com →",
    accent: "#C9A96E",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20">
          <p className="font-sans text-xs font-medium tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
            Our Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1D1D1F] mb-4">
            Luxury Spaces &amp; Products
          </h2>
          <p className="font-sans text-sm font-light text-[#6E6E73] max-w-xl leading-relaxed">
            Two specialized brands delivering exceptional quality across custom glass and luxury interior remodeling.
          </p>
        </div>

        {/* Brand cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((b) => (
            <div
              key={b.name}
              className="border border-[#E8E8ED] p-10 hover:border-[#C9A96E] transition-colors duration-300 group"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 border border-[#C9A96E] mb-8 flex items-center justify-center">
                <div className="w-4 h-4 bg-[#C9A96E] opacity-50" />
              </div>

              <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-3">
                {b.tag}
              </p>
              <h3 className="font-serif text-2xl font-medium text-[#1D1D1F] mb-4">
                {b.name}
              </h3>
              <p className="font-sans text-sm font-light text-[#6E6E73] leading-relaxed mb-6">
                {b.description}
              </p>

              <ul className="space-y-2 mb-8">
                {b.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="block w-6 h-px bg-[#C9A96E]" />
                    <span className="font-sans text-xs font-light text-[#1D1D1F]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-medium tracking-widest uppercase text-[#C9A96E] hover:text-[#1D1D1F] transition-colors"
              >
                {b.urlLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
