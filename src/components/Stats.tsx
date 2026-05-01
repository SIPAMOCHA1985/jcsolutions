const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "2", label: "Active Brands" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-[#1D1D1F] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium text-[#C9A96E] mb-2">
                {s.value}
              </p>
              <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
