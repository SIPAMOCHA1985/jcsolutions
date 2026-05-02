export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-between overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-02.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/70 to-transparent" />
      </div>

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      {/* Main content */}
      <div className="relative flex-1 grid lg:grid-cols-2 gap-0">
        {/* Left — texto */}
        <div className="flex flex-col justify-center px-8 lg:px-14 pt-32 pb-16">
          <p className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-white/30 mb-14">
            (Business Solutions — Central Florida)
          </p>

          <div className="overflow-hidden mb-2">
            <h1 className="font-serif font-medium text-white leading-[0.92]" style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}>
              Built for
            </h1>
          </div>
          <div className="overflow-hidden mb-14">
            <h1 className="font-serif font-medium text-[#C9A96E] leading-[0.92]" style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}>
              Builders.
            </h1>
          </div>

          <p className="font-sans text-sm font-light text-white/45 max-w-sm leading-relaxed mb-12">
            Logistics, distribution, and project management for construction, remodeling, and real estate industries.
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

        {/* Right — 3 imágenes en grid */}
        <div className="hidden lg:grid grid-rows-3 h-full min-h-screen">
          {["/images/hero-01.jpg", "/images/hero-02.jpg", "/images/hero-03.jpg"].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0C0C0C]/40" />
              {/* Gold vertical line separator */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#C9A96E]/20" />
            </div>
          ))}
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
