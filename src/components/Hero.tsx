export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-between overflow-hidden">
      {/* Grid overlay urbano */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:px-14 pt-32 pb-16">
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-14">
          (Business Solutions — Central Florida)
        </p>

        <div className="overflow-hidden mb-2">
          <h1 className="font-serif font-medium text-white leading-[0.92]" style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}>
            Built for
          </h1>
        </div>
        <div className="overflow-hidden mb-14">
          <h1 className="font-serif font-medium text-[#C9A96E] leading-[0.92]" style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}>
            Builders.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p className="font-sans text-sm font-light text-white/40 max-w-sm leading-relaxed">
            Logistics, distribution, and project management for the construction, remodeling, and real estate industries.
          </p>
          <div className="flex items-center gap-6">
            <a href="#services"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-white/50 hover:text-[#C9A96E] transition-colors duration-300">
              Our Services →
            </a>
            <a href="#contact"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase bg-[#C9A96E] text-[#0C0C0C] px-7 py-3 hover:bg-white transition-colors duration-300">
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative px-8 lg:px-14 pb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-white/15" />
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/15">Scroll</p>
        </div>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/15">
          JC Solutions Enterprise LLC
        </p>
      </div>
    </section>
  );
}
