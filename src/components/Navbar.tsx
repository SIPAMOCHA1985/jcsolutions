"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0C0C0C]/95 backdrop-blur-md" : "bg-[#0C0C0C]/80 backdrop-blur-sm"}`}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 h-[72px] flex items-center justify-between border-b border-white/8">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-sm font-medium tracking-[0.22em] text-white uppercase">JC Solutions</span>
          <span className="font-sans text-[8px] font-light tracking-[0.4em] text-[#C9A96E] uppercase">Enterprise LLC</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Payments", href: "#payments" },
            { label: "Contact", href: "#contact" },
          ].map(l => (
            <a key={l.label} href={l.href}
              className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+14075388810" className="font-sans text-[10px] font-light text-white/40 tracking-wider">
            (407) 538-8810
          </a>
          <a href="#contact"
            className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase border border-[#C9A96E] text-[#C9A96E] px-5 py-2.5 hover:bg-[#C9A96E] hover:text-[#0C0C0C] transition-all duration-300">
            Get a Quote
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-1.5">
          <span className={`block w-5 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0C0C0C] border-t border-white/10 px-8 py-8 flex flex-col gap-6">
          {[
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Payments", href: "#payments" },
            { label: "Contact", href: "#contact" },
          ].map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-white/60">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="border border-[#C9A96E] text-[#C9A96E] px-6 py-3 font-sans text-[10px] tracking-[0.3em] uppercase text-center">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
