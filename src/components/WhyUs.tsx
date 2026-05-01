const pillars = [
  {
    icon: "🏆",
    title: "10+ Years of Experience",
    body: "Over a decade building luxury spaces and delivering premium results across Central Florida.",
  },
  {
    icon: "⚡",
    title: "End-to-End Execution",
    body: "From consultation to installation, we manage every detail so you don't have to.",
  },
  {
    icon: "⭐",
    title: "100% Client Satisfaction",
    body: "Our reputation is built on results. Every project completed to the highest standard.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#F5F5F7] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20">
          <p className="font-sans text-xs font-medium tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
            Why Choose Us
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1D1D1F] leading-tight">
              A Holding Company<br />
              <span className="text-[#C9A96E]">Built for Excellence</span>
            </h2>
            <p className="font-sans text-sm font-light text-[#6E6E73] max-w-sm leading-relaxed">
              Every project under our umbrella shares the same DNA: uncompromising standards, tailored execution, and lasting value.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <div key={p.title} className="group">
              <div className="bg-white p-10 h-full border border-[#E8E8ED] hover:border-[#C9A96E] transition-colors duration-300">
                <span className="text-3xl mb-6 block">{p.icon}</span>
                <p className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A96E] mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-xl font-medium text-[#1D1D1F] mb-4">
                  {p.title}
                </h3>
                <p className="font-sans text-sm font-light text-[#6E6E73] leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="font-sans text-xs font-medium tracking-[0.3em] uppercase bg-[#1D1D1F] text-white px-10 py-4 hover:bg-[#C9A96E] transition-colors duration-300 inline-block"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
