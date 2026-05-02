"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Payments", href: "#payments" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0C0C0C]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-sm font-medium tracking-[0.22em] text-white uppercase">JC Solutions</span>
          <span className="font-sans text-[8px] font-light tracking-[0.4em] text-[#C9A96E] uppercase">Enterprise LLC</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}
                className="text-sm tracking-widest uppercase text-[#6B6B6B] hover:text-[#C9A96E] transition-colors font-sans font-light">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+14075388810"
            className="text-sm font-sans text-white/60 hover:text-[#C9A96E] transition-colors tracking-wide">
            (407) 538-8810
          </a>
          <a href="#contact"
            className="text-sm tracking-widest uppercase px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0C0C0C] transition-all duration-300 font-sans">
            Get a Quote
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0C0C0C] border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-white/60 hover:text-[#C9A96E] transition-colors font-sans">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase px-6 py-3 bg-[#C9A96E] text-[#0C0C0C] text-center font-sans font-medium">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
