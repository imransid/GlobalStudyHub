import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import news1 from "../assets/bg.jpg";
import news2 from "../assets/bg.jpg";
import news3 from "../assets/bg.jpg";

const newsData = [
  {
    id: 1,
    title: "Malaysia University Admission Opens",
    desc: "Top universities in Malaysia open admission for international students. Apply now for 2025 intake.",
    img: news1,
    date: "Oct 7, 2025",
  },
  {
    id: 2,
    title: "Scholarships for International Students",
    desc: "Exciting scholarship opportunities available for students aiming to study abroad in Malaysia.",
    img: news2,
    date: "Oct 5, 2025",
  },
  {
    id: 3,
    title: "Student Visa Success Stories",
    desc: "Read inspiring stories from students who successfully secured their Malaysia student visas.",
    img: news3,
    date: "Oct 3, 2025",
  },
];

export default function NewsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="news"
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

      <div className="max-w-6xl mx-auto px-4 relative h-[400px] md:h-[450px]">
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
                  {/* Image */}
                  <div className="md:w-1/2 relative h-64 md:h-auto z-10">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-r-none"
                    />
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {news.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4 z-10">
                    <h3 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-gray-200">{news.desc}</p>
                    <button className="self-start mt-2 px-5 py-3 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                      Read More
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
