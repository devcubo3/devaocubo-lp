"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 glass-card border-b border-gray-200 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-primary rounded-md transform rotate-12 opacity-80" />
              <div className="absolute inset-0 bg-gray-600 rounded-md transform -rotate-6 scale-90" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                DEV³
              </div>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">
              <span className="text-brand-dark-grey">Dev ao</span>
              <span className="text-primary">Cubo</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#diagnostico"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Diagnóstico
            </a>
            <a
              href="#cubos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Cubos
            </a>
            <a
              href="#resultados"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Resultados
            </a>
            <a
              href="#cta"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1"
            >
              Iniciar Diagnóstico
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 mt-2 pt-4 space-y-4 animate-in">
            <a
              href="#diagnostico"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Diagnóstico
            </a>
            <a
              href="#cubos"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Cubos
            </a>
            <a
              href="#resultados"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#cta"
              className="block bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full font-bold shadow-lg text-center"
              onClick={() => setMenuOpen(false)}
            >
              Iniciar Diagnóstico
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
