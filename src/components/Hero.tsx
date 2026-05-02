export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col overflow-hidden pt-[68px]">
      {/* Gold accent top strip */}
      <div className="h-1 bg-[#C9A96E] w-full" />

      <div className="flex-1 grid lg:grid-cols-[1fr_45%] min-h-[calc(100vh-69px)]">
        {/* Left — texto */}
        <div className="flex flex-col justify-center px-8 lg:px-14 py-20 bg-white">
          <p className="font-sans text-[9px] font-medium tracking-[0.55em] uppercase text-[#C9A96E] mb-10">
            Central Florida · Business Solutions
          </p>

          <h1 className="font-serif font-medium text-[#0A0A0A] leading-[0.9] mb-8" style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)" }}>
            Built for<br />
            <span className="text-[#C9A96E]">Builders.</span>
          </h1>

          <p className="font-sans text-sm font-light text-[#6B6B6B] max-w-md leading-relaxed mb-12 border-l-2 border-[#C9A96E] pl-5">
            Logistics, distribution, and project management solutions for construction, remodeling, and real estate companies across Central Florida.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#contact"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase bg-[#0A0A0A] text-white px-8 py-4 hover:bg-[#C9A96E] transition-colors duration-300">
              Request a Quote
            </a>
            <a href="#services"
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300 flex items-center gap-2">
              <span className="w-6 h-px bg-[#6B6B6B]" />
              Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-[#E5E5E0] flex items-center gap-8">
            <div className="text-center">
              <p className="font-serif text-2xl font-medium text-[#0A0A0A]">10+</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">Years</p>
            </div>
            <div className="w-px h-10 bg-[#E5E5E0]" />
            <div className="text-center">
              <p className="font-serif text-2xl font-medium text-[#0A0A0A]">500+</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">Projects</p>
            </div>
            <div className="w-px h-10 bg-[#E5E5E0]" />
            <div className="text-center">
              <p className="font-serif text-2xl font-medium text-[#0A0A0A]">FL</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">Licensed</p>
            </div>
          </div>
        </div>

        {/* Right — imagen con overlay */}
        <div className="relative hidden lg:block">
          <img
            src="/images/hero-02.jpg"
            alt="JC Solutions — Construction & Logistics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/30" />
          {/* Gold vertical strip */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A96E]" />
          {/* Badge */}
          <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-sm p-6 border-l-2 border-[#C9A96E]">
            <p className="font-sans text-[8px] font-medium tracking-[0.45em] uppercase text-[#C9A96E] mb-1">Est. Florida</p>
            <p className="font-serif text-sm font-medium text-[#0A0A0A]">JC Solutions Enterprise LLC</p>
            <p className="font-sans text-[9px] font-light text-[#6B6B6B] mt-1">Licensed & Insured · Central Florida</p>
          </div>
        </div>
      </div>
    </section>
  );
}
