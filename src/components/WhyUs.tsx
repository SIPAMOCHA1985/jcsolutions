const features = [
  { icon: "📋", title: "Dedicated Project Manager", description: "One PM coordinates your project from first call to final delivery." },
  { icon: "🏗️", title: "Supply Chain Control", description: "Materials sourced, imported, and delivered on time and on budget." },
  { icon: "✅", title: "Licensed & Insured", description: "Fully licensed in Florida. Compliant, professional, and accountable." },
  { icon: "📊", title: "Free Estimates", description: "Know exactly what to expect before committing to anything." },
  { icon: "🤝", title: "B2B Focused", description: "Built for contractors, developers, flippers, and investors." },
  { icon: "💳", title: "All Payments Accepted", description: "Cards, Zelle, financing plans, wire transfers, and crypto." },
  { icon: "⏱️", title: "On-Time Delivery", description: "We don't miss deadlines. Your schedule is our schedule." },
  { icon: "🌎", title: "Bilingual Team", description: "English and Spanish speaking. Serving all of Central Florida." },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Full Service
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            What We Deliver
          </h2>
          <p className="text-white/50 font-sans font-light max-w-xl mx-auto">
            From the first call to the final delivery — we handle every step so you can focus on growing your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {features.map((item) => (
            <div key={item.title}
              className="bg-[#1C1C1C] p-8 hover:bg-[#252525] transition-colors duration-300 group">
              <span className="text-3xl mb-5 block">{item.icon}</span>
              <h3 className="font-serif text-lg text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/50 font-sans font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact"
            className="inline-block text-sm tracking-widest uppercase px-10 py-4 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition-all duration-300 font-sans">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
