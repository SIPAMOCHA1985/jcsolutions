import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Licensed Roofing Contractor Orlando FL | JC Solutions Enterprise",
  description: "Licensed roofing installation, repair, and replacement in Central Florida. Storm damage specialists. Free estimates. Call (407) 538-8810.",
  keywords: ["roofing contractor Orlando", "roof replacement Orlando FL", "storm damage roof repair", "licensed roofer Central Florida"],
};

const services = [
  { num: "01", title: "Roof Replacement", desc: "Full tear-off and replacement with premium materials — shingles, tile, metal, and flat roofing systems." },
  { num: "02", title: "Roof Repair", desc: "Leaks, missing shingles, flashing damage — fast and reliable repairs that last." },
  { num: "03", title: "Storm Damage", desc: "Hurricane and storm damage specialists. We work with your insurance to maximize your claim." },
  { num: "04", title: "New Construction", desc: "Roofing for new builds and additions. Coordinated directly with your GC schedule." },
  { num: "05", title: "Inspections & Reports", desc: "Certified roof inspections for home purchases, insurance renewals, and permit compliance." },
  { num: "06", title: "Financing Available", desc: "0% interest financing options. Start your project today with flexible monthly payments." },
];

const steps = [
  { n: "1", title: "Free Inspection", desc: "We come to you — no cost, no commitment. Full roof assessment and photo documentation." },
  { n: "2", title: "Detailed Estimate", desc: "Receive a line-by-line proposal within 24 hours. Know exactly what you're paying before we start." },
  { n: "3", title: "Permit & Schedule", desc: "We handle all permits. You get a confirmed start date before we leave your property." },
  { n: "4", title: "Installation", desc: "Licensed crew. Clean jobsite. Final walk-through with you before we close the project." },
];

export default function RoofingPage() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <a href="/" className="flex flex-col leading-none">
            <span className="font-serif text-sm font-medium tracking-[0.22em] text-white uppercase">JC Solutions</span>
            <span className="font-sans text-[8px] font-light tracking-[0.4em] text-[#C9A96E] uppercase">Enterprise LLC</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm tracking-widest uppercase text-white/50 hover:text-[#C9A96E] transition-colors font-sans font-light">Services</a>
            <a href="/roofing" className="text-sm tracking-widest uppercase text-[#C9A96E] font-sans font-light">Roofing</a>
            <a href="/pools" className="text-sm tracking-widest uppercase text-white/50 hover:text-[#C9A96E] transition-colors font-sans font-light">Pools</a>
            <a href="/#contact" className="text-sm tracking-widest uppercase text-white/50 hover:text-[#C9A96E] transition-colors font-sans font-light">Contact</a>
          </div>
          <a href="/#contact"
            className="text-sm tracking-widest uppercase px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0C0C0C] transition-all duration-300 font-sans">
            Free Estimate
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1C1C1C]">
        <div className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/hero-02.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
            <span className="text-[#C9A96E]/60 text-[9px] tracking-[0.6em] uppercase font-sans">Licensed · Insured · Florida</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10">
            Licensed<br />
            <em className="not-italic text-[#C9A96E]">Roofing.</em>
          </h1>
          <p className="text-white/70 font-sans font-light text-lg md:text-xl max-w-xl mx-auto mb-14 leading-relaxed">
            Installation, repair, and storm damage restoration across Central Florida. Zero upfront with our financing plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact"
              className="px-10 py-4 bg-[#C9A96E] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300">
              Get Free Estimate
            </a>
            <a href="tel:+14075388810"
              className="px-10 py-4 border border-white text-white text-sm tracking-widest uppercase font-sans hover:bg-white hover:text-[#1C1C1C] transition-colors duration-300">
              (407) 538-8810
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6 lg:px-12 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div>
              <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C]">Roofing Services</h2>
            </div>
            <p className="text-[#6B6B6B] font-sans font-light max-w-sm leading-relaxed">
              Every roofing project backed by our Florida state license, full insurance, and workmanship warranty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#E2DDD5]">
            {services.map((s) => (
              <div key={s.num} className="bg-[#FAF9F6] p-10 lg:p-14 group hover:bg-[#F0EDE6] transition-colors duration-300">
                <span className="text-[#C9A96E] font-serif text-4xl mb-6 block opacity-60">{s.num}</span>
                <h3 className="font-serif text-2xl text-[#1C1C1C] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">{s.title}</h3>
                <p className="text-[#6B6B6B] font-sans font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">How It Works</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Process</h2>
            <p className="text-white/50 font-sans font-light max-w-xl mx-auto">
              From first call to final walk-through — a clear, transparent process with no surprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {steps.map((step) => (
              <div key={step.n} className="bg-[#1C1C1C] p-8 hover:bg-[#252525] transition-colors duration-300 group">
                <span className="font-serif text-3xl text-[#C9A96E] mb-5 block">{step.n}</span>
                <h3 className="font-serif text-lg text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">{step.title}</h3>
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-20 px-6 lg:px-12 bg-[#141414]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {[
            { v: "Licensed", l: "Florida State Roofing License" },
            { v: "Insured", l: "Full Liability & Workers Comp" },
            { v: "0%", l: "Interest Financing Available" },
            { v: "24h", l: "Estimate Turnaround" },
          ].map((s) => (
            <div key={s.l} className="bg-[#141414] py-10 px-6 text-center">
              <p className="font-serif text-3xl md:text-4xl font-medium text-[#C9A96E] mb-2">{s.v}</p>
              <p className="font-sans text-xs font-light text-white/40 tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28 px-6 lg:px-12 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div>
              <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">Our Work</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C]">Roofing Gallery</h2>
            </div>
            <p className="text-[#6B6B6B] font-sans font-light max-w-sm leading-relaxed">
              Licensed crew, clean jobsite, professional results — every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DDD5]">
            {[
              "/images/roofing/roof-01.jpg",
              "/images/roofing/roof-02.jpg",
              "/images/roofing/roof-03.jpg",
              "/images/roofing/roof-04.jpg",
              "/images/roofing/roof-05.jpg",
              "/images/roofing/roof-06.jpg",
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden bg-[#D6D0C5] aspect-video group">
                <img src={src} alt={`Roofing project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">Free — No Obligation</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">Request Your<br />Free Estimate</h2>
          <p className="text-white/50 font-sans font-light mb-12 leading-relaxed">
            We come to your property, assess the roof, and deliver a detailed written estimate within 24 hours. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="tel:+14075388810"
              className="px-10 py-4 bg-[#C9A96E] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300">
              Call (407) 538-8810
            </a>
            <a href="https://wa.me/14075388810" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest uppercase font-sans hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300">
              WhatsApp Us
            </a>
          </div>
          <p className="text-white/30 font-sans font-light text-sm">
            Or email us at <span className="text-[#C9A96E]">info@jcsolutionsenterprise.com</span>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
