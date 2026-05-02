const services = [
  {
    num: "01",
    title: "Logistics & Distribution",
    body: "Materials sourcing, import coordination, warehousing, and last-mile delivery to your job site. On time, every time.",
    tag: "Supply Chain",
  },
  {
    num: "02",
    title: "Construction Solutions",
    body: "End-to-end support for remodeling, new construction, and property flipping. From planning to final punch list.",
    tag: "Build & Remodel",
  },
  {
    num: "03",
    title: "Real Estate & Renting",
    body: "Property acquisition support, renovation management, and rental operations. Full-cycle real estate solutions.",
    tag: "Real Estate",
  },
  {
    num: "04",
    title: "Project Management",
    body: "Dedicated PMs for your commercial or residential projects. Timelines, budgets, vendors — all under control.",
    tag: "Management",
  },
  {
    num: "05",
    title: "Custom Glass & Interiors",
    body: "Through IxoraGlass and Ixora Living — luxury custom glass installations and premium interior remodeling.",
    tag: "Specialty",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F7F7F5] border-b border-[#E5E5E0]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="font-sans text-[9px] font-medium tracking-[0.55em] uppercase text-[#C9A96E] mb-6">
              What We Do
            </p>
            <h2 className="font-serif font-medium text-[#0A0A0A] leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Our Services
            </h2>
          </div>
          <p className="font-sans text-sm font-light text-[#6B6B6B] max-w-xs leading-relaxed">
            Comprehensive business solutions for builders, developers, and property investors across Central Florida.
          </p>
        </div>

        <div className="border border-[#E5E5E0] divide-y divide-[#E5E5E0] bg-white">
          {services.map((s) => (
            <div key={s.num}
              className="grid md:grid-cols-[80px_1fr_1.5fr_140px] gap-6 items-center px-8 py-8 group hover:bg-[#F7F7F5] transition-colors duration-300">
              <span className="font-serif text-2xl font-light text-[#E5E5E0] group-hover:text-[#C9A96E] transition-colors duration-300">
                {s.num}
              </span>
              <h3 className="font-serif text-lg font-medium text-[#0A0A0A]">
                {s.title}
              </h3>
              <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed">{s.body}</p>
              <div className="hidden md:flex justify-end">
                <span className="font-sans text-[9px] font-medium tracking-[0.4em] uppercase text-[#6B6B6B] border border-[#E5E5E0] px-3 py-1.5">
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
