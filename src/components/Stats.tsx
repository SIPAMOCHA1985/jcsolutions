export default function Stats() {
  return (
    <section className="relative bg-[#0C0C0C] min-h-[80vh] flex items-center overflow-hidden border-t border-white/5">
      {/* Background text watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[20vw] font-medium text-white/[0.02] leading-none select-none pointer-events-none pr-4">
        JCS
      </div>

      <div className="relative w-full px-8 lg:px-14 py-24">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-20">
          (Our Track Record)
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {[
            { value: "10+", label: "Years of Experience", sub: "across Central Florida" },
            { value: "500+", label: "Projects Completed", sub: "residential & commercial" },
            { value: "2", label: "Active Brands", sub: "IxoraGlass · Ixora Living" },
            { value: "100%", label: "Client Satisfaction", sub: "every project, every time" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif font-medium text-[#C9A96E] leading-none mb-4" style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}>
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
