export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#1D1D1F 1px, transparent 1px), linear-gradient(90deg, #1D1D1F 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-sans text-xs font-medium tracking-[0.4em] uppercase text-[#C9A96E] mb-8">
            Florida &mdash; Based Holding Company
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-[#1D1D1F] mb-4 leading-[1.05]">
            JC Solutions
          </h1>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-[#C9A96E] mb-10 leading-[1.05]">
            Enterprise
          </h1>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-[#C9A96E] mb-10" />

          {/* Subtitle */}
          <p className="font-sans text-lg md:text-xl font-light text-[#6E6E73] max-w-2xl leading-relaxed mb-12">
            Building premium brands across luxury construction, custom glass, and interior design.
            From concept to completion &mdash; executed with precision and sophistication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="font-sans text-xs font-medium tracking-[0.3em] uppercase bg-[#1D1D1F] text-white px-8 py-4 hover:bg-[#C9A96E] transition-colors duration-300 text-center"
            >
              Explore Our Portfolio
            </a>
            <a
              href="#contact"
              className="font-sans text-xs font-medium tracking-[0.3em] uppercase border border-[#1D1D1F] text-[#1D1D1F] px-8 py-4 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F7] to-transparent" />
    </section>
  );
}
