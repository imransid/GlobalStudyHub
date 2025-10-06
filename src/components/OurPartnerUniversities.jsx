"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurPartnerUniversities() {
  const stories = [
    {
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
      title: "🎓 Malaysia Visa Approved",
      name: "Ferdous Jannatul",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1000&q=80",
      title: "🇬🇧 UK Study Visa Success",
      name: "Mehedi Hasan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328d88b3?auto=format&fit=crop&w=1000&q=80",
      title: "🇨🇦 Canada Student Visa Granted",
      name: "Sadia Noor",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590080875831-91a9f7f3a8c9?auto=format&fit=crop&w=1000&q=80",
      title: "🇦🇺 Australia Study Visa",
      name: "Rafiq Ahmed",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      title: "🇲🇾 Malaysia Visa Approved",
      name: "Tania Rahman",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, stories.length]);

  return (
    <section
      id="universities"
      className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
          Our Partner Universities
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re proud to be an{" "}
          <span className="font-semibold text-blue-700">
            authorized representative
          </span>{" "}
          of top-ranked universities across{" "}
          <span className="font-semibold text-blue-700">
            Malaysia and other global destinations
          </span>
          , helping students connect with trusted institutions for a successful
          academic journey.
        </p>

        {/* Fade Carousel */}
        <div
          className="relative h-[420px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={stories[index].image}
              src={stories[index].image}
              alt={stories[index].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end pb-10">
            <motion.div
              key={stories[index].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white px-4"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {stories[index].title}
              </h3>
              <p className="text-sm opacity-90">{stories[index].name}</p>
            </motion.div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Bottom Glow Bar */}
        <div className="mt-10 h-1 w-32 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 mx-auto rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
