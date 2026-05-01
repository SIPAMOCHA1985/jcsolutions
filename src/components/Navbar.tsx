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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0C0C0C]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 h-[72px] flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-sm font-medium tracking-[0.22em] text-white uppercase">JC Solutions</span>
          <span className="font-sans text-[8px] font-light tracking-[0.4em] text-[#C9A96E] uppercase">Enterprise LLC</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["About","Portfolio","Services","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors duration-300">
              {l}
            </a>
          ))}
        </div>

        <a href="#contact"
          className="hidden md:block font-sans text-[10px] font-medium tracking-[0.3em] uppercase border border-white/20 text-white px-6 py-2.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300">
          Start a Project
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-1.5">
          <span className={`block w-5 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0C0C0C] border-t border-white/10 px-8 py-8 flex flex-col gap-6">
          {["About","Portfolio","Services","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-white/60">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
