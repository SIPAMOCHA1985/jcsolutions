export default function Stats() {
  return (
    <section className="bg-[#111111] border-t border-white/5">
      <div className="px-8 lg:px-14 py-24">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-20">
          (By the Numbers)
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {[
            { value: "10+", label: "Years Combined", sub: "industry expertise" },
            { value: "500+", label: "Projects Supported", sub: "construction & remodeling" },
            { value: "2", label: "Brands Deployed", sub: "IxoraGlass · Ixora Living" },
            { value: "100%", label: "On-Time Execution", sub: "every project, every time" },
          ].map((s) => (
            <div key={s.label} className="border-l border-white/8 pl-6 first:border-l-0 first:pl-0">
              <p className="font-serif font-medium text-[#C9A96E] leading-none mb-4" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
                {s.value}
              </p>
              <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-white mb-1">
                {s.label}
              </p>
              <p className="font-sans text-[11px] font-light text-white/30">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
