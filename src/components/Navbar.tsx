"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const n = t.navbar;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-white font-serif text-lg tracking-[0.15em] uppercase">
            JC Solutions
          </span>
          <span className="text-[#C9A96E] font-sans text-[9px] tracking-[0.4em] uppercase">
            Enterprise LLC
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            ["#about", n.about],
            ["#brands", n.brands],
            ["#services", n.services],
            ["#contact", n.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-white/60 hover:text-white font-sans text-xs tracking-widest uppercase transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-xs font-sans tracking-wider">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 transition-colors ${language === "en" ? "text-[#C9A96E]" : "text-white/30 hover:text-white/60"}`}
            >
              EN
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 transition-colors ${language === "es" ? "text-[#C9A96E]" : "text-white/30 hover:text-white/60"}`}
            >
              ES
            </button>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-widest uppercase font-sans hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
          >
            {n.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-t border-white/5 px-6 py-8 space-y-6">
          {[
            ["#about", n.about],
            ["#brands", n.brands],
            ["#services", n.services],
            ["#contact", n.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 font-sans text-sm tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
            <button onClick={() => setLanguage("en")} className={`text-xs tracking-wider font-sans ${language === "en" ? "text-[#C9A96E]" : "text-white/40"}`}>EN</button>
            <span className="text-white/20">|</span>
            <button onClick={() => setLanguage("es")} className={`text-xs tracking-wider font-sans ${language === "es" ? "text-[#C9A96E]" : "text-white/40"}`}>ES</button>
          </div>
        </div>
      )}
    </nav>
  );
}
