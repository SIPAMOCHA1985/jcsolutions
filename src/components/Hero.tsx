export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-between overflow-hidden">
      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#0C0C0C] to-[#0C0C0C] opacity-80" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:px-14 pt-28 pb-16">
        {/* Label */}
        <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/35 mb-12">
          (Holding Company — Central Florida)
        </p>

        {/* Giant headline */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-serif font-medium text-white leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 11vw, 11rem)" }}>
            JC Solutions
          </h1>
        </div>
        <div className="overflow-hidden mb-12">
          <h1 className="font-serif font-medium text-[#C9A96E] leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 11vw, 11rem)" }}>
            Enterprise
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="font-sans text-sm font-light text-white/45 max-w-xs leading-relaxed">
            Building premium brands across luxury construction, custom glass, and interior design.
          </p>
          <div className="flex items-center gap-6">
            <a href="#portfolio"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-white/60 hover:text-[#C9A96E] transition-colors duration-300">
              Explore Portfolio →
            </a>
            <a href="#contact"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase bg-[#C9A96E] text-[#0C0C0C] px-7 py-3 hover:bg-white transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative px-8 lg:px-14 pb-10 flex items-center gap-4">
        <div className="w-8 h-px bg-white/20" />
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20">Scroll</p>
      </div>
    </section>
  );
}
