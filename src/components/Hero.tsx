export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1C1C1C]">
      <div className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-02.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo mark */}
        <div className="flex justify-center mb-16">
          <div className="w-48 h-48 border border-[#C9A96E]/40 flex flex-col items-center justify-center gap-2">
            <span className="font-serif text-5xl font-medium text-[#C9A96E]">JCS</span>
            <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#C9A96E]/60">Enterprise LLC</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
          <span className="text-[#C9A96E]/60 text-[9px] tracking-[0.6em] uppercase font-sans">
            Roofing · Construction · Pools · Logistics
          </span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10">
          Built for<br />
          <em className="not-italic text-[#C9A96E]">Builders.</em>
        </h1>

        <p className="text-white/70 font-sans font-light text-lg md:text-xl max-w-xl mx-auto mb-14 leading-relaxed">
          Central Florida&apos;s licensed GC, Roofing, and Pool Construction company — plus full logistics, real estate, and project management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact"
            className="px-10 py-4 bg-[#C9A96E] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300">
            Request a Free Estimate
          </a>
          <a href="tel:+14075388810"
            className="px-10 py-4 border border-white text-white text-sm tracking-widest uppercase font-sans hover:bg-white hover:text-[#1C1C1C] transition-colors duration-300">
            (407) 538-8810
          </a>
        </div>
      </div>

      {/* Payment badges */}
      <div className="relative z-10 mt-16 flex flex-wrap justify-center items-center gap-3 px-6">
        {["Credit Card", "Stripe", "Square", "Zelle", "Financing 0%", "Crypto Accepted"].map((badge) => (
          <span key={badge}
            className="text-[10px] tracking-widest uppercase font-sans px-4 py-1.5 border border-white/20 text-white/50 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-colors duration-300">
            {badge}
          </span>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
