const services = [
  {
    num: "01",
    title: "Custom Glass",
    body: "Precision-cut frameless glass for showers, enclosures, doors, and architectural features.",
  },
  {
    num: "02",
    title: "Interior Remodeling",
    body: "Complete kitchen, bathroom, and living space transformations with luxury finishes.",
  },
  {
    num: "03",
    title: "Kitchen & Bath",
    body: "Full kitchen and bathroom renovations with premium fixtures, custom cabinetry, and luxury finishes.",
  },
  {
    num: "04",
    title: "Commercial Projects",
    body: "Office lobbies, retail spaces, hotels, and hospitality interiors built to impress.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F7] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1D1D1F]">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-sm font-light text-[#6E6E73] max-w-xs leading-relaxed">
            From the first consultation to the final installation, we manage every detail.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#E8E8ED]">
          {services.map((s) => (
            <div key={s.num} className="bg-white p-10 hover:bg-[#FFFDF8] transition-colors duration-300">
              <p className="font-serif text-5xl font-light text-[#C9A96E]/20 mb-4 leading-none">
                {s.num}
              </p>
              <h3 className="font-serif text-xl font-medium text-[#1D1D1F] mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-sm font-light text-[#6E6E73] leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
