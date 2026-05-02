export default function Stats() {
  return (
    <section className="bg-[#F7F7F5] border-y border-[#E5E5E0]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E5E5E0]">
          {[
            { value: "10+", label: "Years Combined", sub: "Industry Experience" },
            { value: "500+", label: "Projects Delivered", sub: "Construction & Remodeling" },
            { value: "2", label: "Active Brands", sub: "IxoraGlass · Ixora Living" },
            { value: "100%", label: "On-Time Execution", sub: "Guaranteed Performance" },
          ].map((s, i) => (
            <div key={s.label} className={`px-8 py-6 flex flex-col ${i % 2 === 0 && i !== 0 ? "border-t border-[#E5E5E0] lg:border-t-0" : ""}`}>
              <p className="font-serif font-medium text-[#0A0A0A] leading-none mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                {s.value}
              </p>
              <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[#0A0A0A] mb-1">
                {s.label}
              </p>
              <p className="font-sans text-[10px] font-light text-[#6B6B6B]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
