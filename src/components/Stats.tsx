export default function Stats() {
  return (
    <section className="bg-[#111111] border-y border-white/8">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {[
            { value: "10+", label: "Years Combined Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "2", label: "Active Brands" },
            { value: "100%", label: "On-Time Execution" },
          ].map((s) => (
            <div key={s.label} className="py-8 px-8 text-center">
              <p className="font-serif text-3xl font-medium text-[#C9A96E] mb-1">{s.value}</p>
              <p className="font-sans text-[10px] font-light text-white/40 tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
