export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-center text-center overflow-hidden pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/images/hero-02.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#0C0C0C]/85" />
      </div>

      {/* Gold top line */}
      <div className="absolute top-[72px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl mx-auto">
        {/* Monogram */}
        <div className="w-20 h-20 border border-[#C9A96E]/40 flex items-center justify-center mb-8">
          <span className="font-serif text-2xl font-medium text-[#C9A96E]">JCS</span>
        </div>

        <p className="font-sans text-[10px] font-light tracking-[0.6em] uppercase text-[#C9A96E] mb-8">
          Logistics · Distribution · Execution
        </p>

        <h1 className="font-serif font-medium text-white leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          Built for<br />
          <span className="text-[#C9A96E]">Builders.</span>
        </h1>

        <p className="font-sans text-base font-light text-white/50 max-w-xl leading-relaxed mb-12">
          Central Florida&apos;s premier business solutions partner for construction, remodeling, real estate, and property investment companies.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact"
            className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase bg-[#C9A96E] text-[#0C0C0C] px-10 py-4 hover:bg-white transition-colors duration-300">
            Request a Free Estimate
          </a>
          <a href="#services"
            className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase border border-white/20 text-white/60 px-10 py-4 hover:border-white hover:text-white transition-all duration-300">
            Our Services
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C9A96E]/40" />
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20">Scroll</p>
      </div>
    </section>
  );
}
