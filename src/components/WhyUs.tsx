export default function WhyUs() {
  return (
    <section id="about" className="bg-[#0C0C0C] border-t border-white/5">
      <div className="px-8 lg:px-14 py-28">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-16">
          (Why JCS)
        </p>

        <div className="mb-24">
          <h2 className="font-serif font-medium text-white leading-[0.95] mb-2" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            Where Logistics
          </h2>
          <h2 className="font-serif font-medium text-[#C9A96E] leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            Meets Execution.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-white/10">
          {[
            {
              num: "01",
              title: "Project Management",
              body: "Certified project managers trained in imports, distribution, and end-to-end process management. Nothing falls through the cracks.",
            },
            {
              num: "02",
              title: "Supply Chain Control",
              body: "We close the gap between material sourcing and job-site delivery — cutting lead times and eliminating costly delays.",
            },
            {
              num: "03",
              title: "B2B Solutions",
              body: "Built specifically for construction, remodeling, flipping, and real estate companies. We speak your language.",
            },
          ].map((p, i) => (
            <div key={p.num} className={`py-12 pr-10 ${i > 0 ? "border-l border-white/10 pl-10" : ""}`}>
              <p className="font-serif text-5xl font-light text-white/8 mb-8 leading-none">{p.num}</p>
              <h3 className="font-serif text-xl font-medium text-white mb-4">{p.title}</h3>
              <p className="font-sans text-sm font-light text-white/40 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 flex justify-end">
          <a href="#contact"
            className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-white/40 hover:text-[#C9A96E] transition-colors duration-300">
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
