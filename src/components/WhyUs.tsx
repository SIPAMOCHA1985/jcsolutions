export default function WhyUs() {
  return (
    <section id="about" className="bg-[#111111] min-h-screen flex flex-col justify-center border-t border-white/5">
      <div className="px-8 lg:px-14 py-28">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-16">
          (Our Beliefs)
        </p>

        <div className="mb-24">
          <h2 className="font-serif font-medium text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
            A Holding Company
          </h2>
          <h2 className="font-serif font-medium text-[#C9A96E] leading-[0.95]" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
            Built for Excellence.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-white/10">
          {[
            {
              num: "01",
              title: "10+ Years of Experience",
              body: "Over a decade building luxury spaces and delivering premium results across Central Florida.",
            },
            {
              num: "02",
              title: "End-to-End Execution",
              body: "From consultation to installation, we manage every detail so you never have to worry.",
            },
            {
              num: "03",
              title: "100% Client Satisfaction",
              body: "Our reputation is built on results. Every project completed to the absolute highest standard.",
            },
          ].map((p, i) => (
            <div key={p.num} className={`py-12 pr-10 ${i > 0 ? "border-l border-white/10 pl-10" : ""}`}>
              <p className="font-serif text-5xl font-light text-white/10 mb-8 leading-none">{p.num}</p>
              <h3 className="font-serif text-xl font-medium text-white mb-4">{p.title}</h3>
              <p className="font-sans text-sm font-light text-white/40 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 flex justify-end">
          <a href="#contact"
            className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-white/50 hover:text-[#C9A96E] transition-colors duration-300">
            Start a Project &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
