"use client";

import { useState, useEffect } from "react";
import { siteConfig, navLinks } from "@/lib/portfolio-data";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection("#" + sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a192f]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          &lt;{siteConfig.logo}/&gt;
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[#ccd6f6] hover:text-[#00d4ff] transition-colors duration-300 text-sm font-medium uppercase tracking-wider relative ${
                    activeSection === link.href ? "text-[#00d4ff]" : ""
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00d4ff]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#ccd6f6] hover:text-[#00d4ff] transition-colors text-xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#112240] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#ccd6f6] hover:text-[#00d4ff] text-xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium text-[#ccd6f6] hover:text-[#00d4ff] transition-colors ${
                  activeSection === link.href ? "text-[#00d4ff]" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
