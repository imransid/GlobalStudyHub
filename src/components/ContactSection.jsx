import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import office1 from "../assets/office1.jpg";
import office2 from "../assets/office2.jpg";
import office3 from "../assets/office3.jpg";

const officeData = [
  {
    id: 1,
    title: "Petaling Jaya Office",
    address:
      "Leisure Commercial Square, B2, Level 3, Jalan PJS 8/9, Petaling Jaya 46150, Selangor",
    img: office1,
  },
  {
    id: 2,
    title: "Dhaka Office",
    address: "Nikunjo 2, House 12/Road 13, Khilkhet, Dhaka",
    img: office2,
  },
  {
    id: 3,
    title: "Chattogram Office",
    address: "Ground Floor, Ambia Shirine, 106 Jamalkhan Road, 4900 Chattogram",
    img: office3,
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(270deg, #4ADEDE, #F472B6, #A78BFA, #FCD34D)",
        backgroundSize: "800% 800%",
        animation: "gradientMove 60s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
            100% {background-position:0% 50%;}
          }
        `}
      </style>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
          Visit our offices, chat with our experts, or connect online to start
          your application today!
        </p>
      </div>

      {/* Office Cards */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-4">
        {officeData.map((office, idx) => (
          <motion.div
            key={office.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto z-10">
              <img
                src={office.img}
                alt={office.title}
                className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-r-none"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4 z-10">
              <h3 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">
                {office.title}
              </h3>
              <p className="text-gray-200">{office.address}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="https://wa.me/60173175466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-400/50 transition-all duration-300"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+60173175466"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-400/50 transition-all duration-300"
                >
                  Call: +60 17-317 5466
                </a>
                <a
                  href="https://www.instagram.com/_globalstudyhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-400/50 transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Neon Particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: "4s",
          }}
        ></div>
      ))}
    </section>
  );
}
