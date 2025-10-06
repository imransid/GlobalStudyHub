import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";

export default function HeroSection() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [ripples, setRipples] = useState([]);

  // Modern palette: Blue, Green, Amber, Sky Blue
  const colors = ["#1D4ED8", "#10B981", "#F59E0B", "#3B82F6"];

  // Mouse move handler
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Scroll handler for ripple effect
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Add ripple randomly on scroll
    if (Math.random() < 0.015) {
      setRipples((prev) => [
        ...prev.slice(-10),
        {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: scrollY + Math.random() * 100,
          size: Math.random() * 60 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
      ]);
    }

    // Parallax blobs
    const blobs = heroRef.current.querySelectorAll(".parallax");
    blobs.forEach((blob) => {
      const speed = blob.dataset.speed;
      blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mouse trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => [
        ...prev.slice(-15),
        {
          x: mousePos.x + Math.random() * 20 - 10,
          y: mousePos.y + Math.random() * 20 - 10,
          id: Date.now() + Math.random(),
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 2,
        },
      ]);
    }, 60);
    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative text-center py-32 md:py-40 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Slow Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-teal-800/60 to-green-700/70 backdrop-blur-md animate-[gradientShift_60s_ease_infinite]"></div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center gap-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl drop-shadow-lg relative group">
          Your trusted pathway to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 animate-textGlow relative inline-block">
            Top Universities in Malaysia
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Guiding your journey with success, confidence, and care.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(29,78,216,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 text-white shadow-xl hover:shadow-teal-400/50 transition-all duration-300 animate-pulse"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Parallax blobs */}
      <div
        className="absolute -top-12 left-1/4 w-20 h-20 rounded-full bg-blue-400/40 blur-3xl parallax"
        data-speed="0.03"
      ></div>
      <div
        className="absolute bottom-16 right-1/3 w-24 h-24 rounded-full bg-teal-400/30 blur-3xl parallax"
        data-speed="0.05"
      ></div>
      <div
        className="absolute top-1/2 left-10 w-12 h-12 rounded-full bg-green-400/30 blur-xl parallax"
        data-speed="0.07"
      ></div>

      {/* Neon floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/70 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: "4s",
          }}
        ></div>
      ))}

      {/* Mouse trail */}
      {trail.map((dot) => (
        <span
          key={dot.id}
          className="absolute rounded-full pointer-events-none blur-sm animate-fade"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            transform: "translate(-50%, -50%)",
          }}
        ></span>
      ))}

      {/* Ripple effects on scroll */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full opacity-50 animate-ripple"
          style={{
            left: r.x,
            top: r.y,
            width: `${r.size}px`,
            height: `${r.size}px`,
            backgroundColor: r.color,
            transform: "translate(-50%, -50%)",
          }}
        ></span>
      ))}
    </section>
  );
}
