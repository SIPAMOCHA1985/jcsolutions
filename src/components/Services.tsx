const services = [
  { title: "Logistics & Distribution", description: "Materials, sourcing, and last-mile delivery to your job site — on time, every time." },
  { title: "Construction Solutions", description: "End-to-end support from planning to final punch list for any build or remodel." },
  { title: "Real Estate & Renting", description: "Acquisition support, renovation management, and rental operations under one roof." },
  { title: "Project Management", description: "Dedicated PMs handling timelines, budgets, and vendors so you don't have to." },
  { title: "Free Consultations & Estimates", description: "30-minute complimentary consultation. Detailed estimates at no cost, before you commit." },
  { title: "Custom Glass & Interiors", description: "Luxury glass installations and premium interior remodeling through our sister brands." },
];

export default function Services() {
  return (
    <section id="services" className="py-40 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Our Services
          </h2>
          <p className="text-[#6B6B6B] font-sans font-light max-w-lg mx-auto leading-relaxed">
            Every project approached with the same dedication to results, precision, and your long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#E2DDD5]">
          {services.map((service, idx) => (
            <div key={idx}
              className="bg-[#FAF9F6] p-12 lg:p-16 group hover:bg-[#F0EDE6] transition-colors duration-300">
              <span className="text-[#C9A96E] font-serif text-5xl mb-8 block opacity-40">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-[#1C1C1C] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#6B6B6B] font-sans font-light leading-relaxed text-sm max-w-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
