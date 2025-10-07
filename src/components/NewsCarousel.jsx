import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import news1 from "../assets/newz20989.jpeg";
import news2 from "../assets/studstory1.jpeg";
import news3 from "../assets/symiyastory.jpeg";

const newsData = [
  {
    id: 1,
    title: "APU Malaysia-তে 30% Scholarship নিয়ে Higher Study-এর দারুণ সুযোগ!",
    desc: `মালয়েশিয়ার one of the best tech university — Asia Pacific University of Technology & Innovation (APU) এ পড়ার golden chance!
এখনই apply করুন Global Study Hub এর মাধ্যমে — যেটি APU-এর official recruitment partner।
Grab করুন ৩০% পর্যন্ত scholarship, আর শুরু করুন আপনার dream study journey Malaysia-তে! 🇲🇾✨`,
    img: news1,
    date: "Oct 7, 2025",
  },
  {
    id: 2,
    title: "Student Success Story at University of Cyberjaya 🇲🇾",
    desc: `Meet Arafat from Bangladesh! 🇧🇩  
After completing his HSC, Arafat always dreamed of studying Medicine abroad.  
With the help of **Global Study Hub**, he got admitted to the **University of Cyberjaya (UoC)** — one of Malaysia’s top-ranked medical and healthcare universities. 🩺✨  

Today, Arafat is proudly studying **Bachelor of Medicine and Bachelor of Surgery (MBBS)** at UoC with a partial **merit-based scholarship**.  
He says: “Life in Malaysia is amazing — the campus, international environment, and friendly professors make learning enjoyable every day!” 🌏🎓`,
    img: news2,
    date: "Oct 7, 2024",
  },
  {
    id: 3,
    title: "Global Study Hub Student Visa Success!",
    desc: `Meet Symiya from Dhaka 🎓 — ওর childhood dream ছিল Malaysia তে higher study করা। কিন্তু visa process নিয়ে ছিল অনেক confusion আর ভয়।
Global Study Hub-এর proper guidance আর support পেয়ে, Rahim এখন University of Cyberjaya-তে পড়ছে Pharmacy! 🇲🇾💫
ওর মতো তুমিও পারবে! Just trust the process & apply through Global Study Hub today! 🌍✨`,
    img: news3,
    date: "Oct 3, 2024",
  },
];

export default function NewsSection() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsData.length);
      setExpanded(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="Feeds"
      className="relative py-20 overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
          Latest Feeds
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Stay updated with the latest news, updates, and success stories for
          students pursuing higher education abroad.
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 relative h-[450px] md:h-[500px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          {newsData.map(
            (news, idx) =>
              idx === current && (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -150 : 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: idx % 2 === 0 ? 150 : -150 }}
                  transition={{ duration: 1 }}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden ${
                    idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* 🖼️ Fully Responsive Image */}
                  <div className="md:w-1/2 w-full relative flex-1 h-64 md:h-auto z-10 overflow-hidden">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl md:rounded-l-3xl md:rounded-r-none transform transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {news.date}
                    </span>
                  </div>

                  {/* 📰 Content */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4 z-10">
                    <h3 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">
                      {news.title}
                    </h3>

                    <p
                      className={`text-gray-200 transition-all duration-300 ease-in-out ${
                        expanded ? "line-clamp-none" : "line-clamp-2"
                      }`}
                    >
                      {news.desc}
                    </p>

                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="self-start text-sm font-semibold text-yellow-300 hover:text-white transition-colors"
                    >
                      {expanded ? "Read Less ▲" : "Read More ▼"}
                    </button>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
