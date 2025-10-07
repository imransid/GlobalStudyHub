import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import story1 from "../assets/story1.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/vstory3.jpg";
import vstory4 from "../assets/vstory4.jpg";
import vstory5 from "../assets/vstory5.jpg";
import visaApprove from "../assets/visaApprove.jpg";

export default function VisaSection() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = async () => {
    setIsPaused(true);
    await controls.stop();
  };

  const handleMouseLeave = async () => {
    setIsPaused(false);
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 50, ease: "linear" },
    });
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 50, ease: "linear" },
    });
  }, [controls]);

  const images = [
    {
      src: story1,
      name: "Ferdous Jannatul",
      university: "University of Cyberjaya",
    },
    {
      src: vstory4,
      name: "SULTANA TAMIMA",
      university: "Asia Pacific University",
    },
    {
      src: story2,
      name: "Himel MD NEAZ UDDIN",
      university: " University of Cyberjaya",
    },
    {
      src: story3,
      name: "Khatun Barna",
      university: " University of Cyberjaya",
    },
    { src: vstory5, name: "AYSHY NUSRAT PASS", university: "TAYLORS" },
  ];

  return (
    <section
      id="visa"
      className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
          Visa Success Stories
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re proud to maintain a{" "}
          <span className="font-semibold text-blue-700">
            100% visa success rate
          </span>{" "}
          for students pursuing their dreams abroad.
        </p>

        {/* Carousel Wrapper */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div className="flex gap-6" animate={controls}>
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-6">
                {images.map((img, i) => (
                  <motion.div
                    key={`${loopIndex}-${i}`}
                    whileHover={{ scale: 1.05, rotate: 0.5 }}
                    className="relative min-w-[260px] md:min-w-[340px] rounded-3xl overflow-hidden shadow-2xl border border-blue-100 group"
                  >
                    {/* Student Image */}
                    <img
                      src={img.src}
                      alt={`Visa Success ${i + 1}`}
                      className="w-full h-[316px] md:h-[380px] lg:h-[444px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Larger Visa Approved Badge (lower position) */}
                    <img
                      src={visaApprove}
                      alt="Visa Approved"
                      className="absolute bottom-10 right-6 w-28 md:w-36 lg:w-44 z-50 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay with student name & university */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                      <p className="text-white text-sm font-medium">
                        🎓 {img.name} – {img.university}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom Glow Bar */}
        <div className="mt-10 h-1 w-32 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 mx-auto rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
