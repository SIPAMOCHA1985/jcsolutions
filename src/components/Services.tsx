const services = [
  { title: "General Contractor", description: "Licensed GC for commercial and residential projects across Central Florida — from permits to final inspection." },
  { title: "Roofing", description: "Licensed roofing installation, repair, and replacement. Residential and commercial. Storm damage specialists." },
  { title: "Pool Construction", description: "Custom pool design and construction. Licensed and insured. Residential and commercial installations." },
  { title: "Construction Solutions", description: "End-to-end support for remodeling, new construction, and property flipping. From planning to final punch list." },
  { title: "Logistics & Distribution", description: "Materials sourcing, import coordination, warehousing, and last-mile delivery to your job site. On time, every time." },
  { title: "Real Estate & Renting", description: "Property acquisition support, renovation management, and rental operations. Full-cycle real estate solutions." },
  { title: "Project Management", description: "Dedicated PMs for your commercial or residential projects. Timelines, budgets, vendors — all under control." },
  { title: "Free Consultations & Estimates", description: "Book a complimentary 30-minute consultation. We provide detailed project estimates at no cost — know exactly what to expect before committing." },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C]">
              Our Services
            </h2>
          </div>
          <p className="text-[#6B6B6B] font-sans font-light max-w-sm leading-relaxed">
            Licensed GC, Roofing, and Pool Construction — plus full logistics, real estate, and project management across Central Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#E2DDD5]">
          {services.map((service, idx) => (
            <div key={idx}
              className="bg-[#FAF9F6] p-10 lg:p-14 group hover:bg-[#F0EDE6] transition-colors duration-300">
              <span className="text-[#C9A96E] font-serif text-4xl mb-6 block opacity-60">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-[#1C1C1C] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#6B6B6B] font-sans font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
