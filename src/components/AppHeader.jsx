import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [graduation, setGraduation] = useState("");
  const [program, setProgram] = useState("");
  const [country, setCountry] = useState("");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const menuItems = ["visa", "universities", "why", "contact", "Feeds"];

  const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const message = `📋 *New Application Form*%0A
    // 👤 Name: ${name}%0A
    // 📱 WhatsApp: ${whatsapp}%0A
    // 📧 Email: ${email}%0A
    // 🎓 Graduation: ${graduation}%0A
    // 📘 Program: ${program}%0A
    // 🌍 Country: ${country}`;

    //     const whatsappUrl = `https://wa.me/601161344181?text=${message}`;
    //     window.open(whatsappUrl, "_blank");

    //     alert("✅ Application submitted! Opening WhatsApp...");
    setShowForm(false);

    // clear form
    setName("");
    setWhatsapp("");
    setEmail("");
    setGraduation("");
    setProgram("");
    setCountry("");
  };

  return (
    <>
      {/* 🌐 Navbar */}
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
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => setShowForm(true)}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-blue-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300"
            >
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
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowForm(true);
                }}
                className="mx-4 my-2 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-blue-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 🪄 Animated Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gradient-to-br from-purple-700 via-pink-500 to-blue-500 rounded-3xl shadow-2xl p-8 w-11/12 md:w-[500px] text-white relative overflow-hidden"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-3xl font-extrabold text-center mb-6 drop-shadow-lg">
                Apply for Study Abroad 🌍
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 focus:bg-white/30 focus:outline-none transition"
                />
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp Number"
                  required
                  className="px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 focus:bg-white/30 focus:outline-none transition"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 focus:bg-white/30 focus:outline-none transition"
                />
                <input
                  type="text"
                  value={graduation}
                  onChange={(e) => setGraduation(e.target.value)}
                  placeholder="Last Graduation (e.g., BSc in CSE)"
                  className="px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 focus:bg-white/30 focus:outline-none transition"
                />
                <input
                  type="text"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  placeholder="Interested Program (e.g., MBA, Engineering)"
                  className="px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 focus:bg-white/30 focus:outline-none transition"
                />
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/20 text-white focus:bg-white/30 focus:outline-none transition"
                >
                  <option value="">Preferred Country</option>
                  <option>Malaysia 🇲🇾</option>
                  <option>UK 🇬🇧</option>
                  <option>Canada 🇨🇦</option>
                  <option>Australia 🇦🇺</option>
                  <option>USA 🇺🇸</option>
                </select>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-300/40 transition-all"
                >
                  Submit Application 🚀
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
