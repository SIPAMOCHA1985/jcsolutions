const services = [
  {
    num: "01",
    title: "Logistics & Distribution",
    body: "Materials sourcing, import coordination, warehousing, and last-mile delivery to your job site. On time, every time.",
  },
  {
    num: "02",
    title: "Construction Solutions",
    body: "End-to-end support for remodeling, new construction, and property flipping. From planning to final punch list.",
  },
  {
    num: "03",
    title: "Real Estate & Renting",
    body: "Property acquisition support, renovation management, and rental operations. Full-cycle real estate solutions.",
  },
  {
    num: "04",
    title: "Project Management",
    body: "Dedicated PMs for your commercial or residential projects. Timelines, budgets, vendors — all under control.",
  },
  {
    num: "05",
    title: "Free Consultations & Estimates",
    body: "Not sure where to start? Book a complimentary 30-minute consultation. We provide detailed project estimates at no cost.",
  },
  {
    num: "06",
    title: "Custom Glass & Interiors",
    body: "Through IxoraGlass and Ixora Living — luxury custom glass installations and premium interior remodeling.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F7F7F5]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-sans text-[10px] font-medium tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
              What We Offer
            </p>
            <h2 className="font-serif font-medium text-[#0A0A0A] leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Our Services
            </h2>
          </div>
          <p className="font-sans text-sm font-light text-[#6B6B6B] max-w-xs leading-relaxed">
            Every project is approached with the same dedication to results, precision, and the long-term success of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {services.map((s) => (
            <div key={s.num}>
              <p className="font-serif text-4xl font-light text-[#C9A96E] mb-4">{s.num}</p>
              <h3 className="font-serif text-xl font-medium text-[#0A0A0A] mb-3">{s.title}</h3>
              <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
