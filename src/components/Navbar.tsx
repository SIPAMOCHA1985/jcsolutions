"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Our Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E8ED]" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-base font-medium tracking-[0.2em] text-[#1D1D1F] uppercase">
            JC Solutions
          </span>
          <span className="font-sans text-[9px] font-light tracking-[0.35em] text-[#C9A96E] uppercase">
            Enterprise LLC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs font-medium tracking-widest uppercase text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="font-sans text-xs font-medium tracking-widest uppercase bg-[#1D1D1F] text-white px-5 py-2.5 hover:bg-[#C9A96E] transition-colors"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#1D1D1F] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[#1D1D1F] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#1D1D1F] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E8ED] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs font-medium tracking-widest uppercase text-[#6E6E73]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-xs font-medium tracking-widest uppercase bg-[#1D1D1F] text-white px-5 py-3 text-center"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
