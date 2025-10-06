import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section by ID
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close mobile menu
    }
  };

  const menuItems = ["visa", "universities", "why", "contact"];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-700/40 via-blue-600/30 to-pink-500/30 shadow-2xl border-b border-white/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-white tracking-wide drop-shadow-lg">
            Global Study Hub
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {menuItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative group text-white font-medium px-3 py-2 overflow-hidden rounded-lg"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {/* Animated neon underline */}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}

          {/* CTA Button */}
          <button className="ml-4 px-5 py-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-blue-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white hover:text-yellow-300 transition-colors duration-300"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-700/70 via-blue-600/50 to-pink-500/60 backdrop-blur-lg shadow-2xl border-t border-white/20 animate-slide-down">
          <div className="flex flex-col text-center py-6 gap-3">
            {menuItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="py-3 text-white hover:text-yellow-300 font-medium transition-colors duration-300 rounded-lg mx-4"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button className="mx-4 my-2 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-blue-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
