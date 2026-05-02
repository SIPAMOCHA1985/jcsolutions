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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/97 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-sm"}`}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 h-[68px] flex items-center justify-between border-b border-[#E5E5E0]">
        <a href="#" className="flex items-center gap-3">
          <div className="w-px h-8 bg-[#C9A96E]" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-sm font-medium tracking-[0.18em] text-[#0A0A0A] uppercase">JC Solutions</span>
            <span className="font-sans text-[8px] font-light tracking-[0.4em] text-[#C9A96E] uppercase">Enterprise LLC</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["About","Services","Portfolio","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300">
              {l}
            </a>
          ))}
        </div>

        <a href="#contact"
          className="hidden md:block font-sans text-[10px] font-medium tracking-[0.3em] uppercase bg-[#0A0A0A] text-white px-6 py-2.5 hover:bg-[#C9A96E] transition-colors duration-300">
          Get a Quote
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-1.5">
          <span className={`block w-5 h-px bg-[#0A0A0A] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[#0A0A0A] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#0A0A0A] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E5E0] px-8 py-8 flex flex-col gap-6">
          {["About","Services","Portfolio","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#6B6B6B]">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
