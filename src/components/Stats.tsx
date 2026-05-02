export default function Stats() {
  return (
    <section className="py-10 px-6 lg:px-12 bg-[#141414] border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
        {[
          { value: "1", label: "Year in Operation" },
          { value: "30+", label: "Projects Delivered" },
          { value: "5+", label: "Active Brands" },
          { value: "100%", label: "On-Time Execution" },
        ].map((s) => (
          <div key={s.label} className="bg-[#141414] py-8 px-6 text-center">
            <p className="font-serif text-3xl md:text-4xl font-medium text-[#C9A96E] mb-2">{s.value}</p>
            <p className="font-sans text-xs font-light text-white/40 tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
