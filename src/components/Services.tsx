const services = [
  { num: "01", title: "Custom Glass", body: "Precision-cut frameless glass for showers, enclosures, doors, and architectural features." },
  { num: "02", title: "Interior Remodeling", body: "Complete kitchen, bathroom, and living space transformations with luxury finishes." },
  { num: "03", title: "Kitchen & Bath", body: "Full renovations with premium fixtures, custom cabinetry, and luxury finishes." },
  { num: "04", title: "Commercial Projects", body: "Office lobbies, retail spaces, hotels, and hospitality interiors built to impress." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] border-t border-white/5">
      <div className="px-8 lg:px-14 py-28">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-16">
          (What We Do)
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <h2 className="font-serif font-medium text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Our Services
          </h2>
          <p className="font-sans text-sm font-light text-white/35 max-w-xs leading-relaxed">
            From the first consultation to the final installation, we manage every detail.
          </p>
        </div>

        <div className="divide-y divide-white/10">
          {services.map((s) => (
            <div key={s.num} className="py-10 grid md:grid-cols-[80px_1fr_1fr] gap-6 group hover:bg-white/[0.02] transition-colors duration-300 -mx-8 px-8 lg:-mx-14 lg:px-14">
              <span className="font-serif text-2xl font-light text-white/15">{s.num}</span>
              <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#C9A96E] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="font-sans text-sm font-light text-white/40 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
