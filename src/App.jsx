import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  CheckCircle,
  Send,
  Menu,
  X,
} from "lucide-react";
import VisaSection from "./components/VisaSucessStory";
import OurPartnerUniversities from "./components/OurPartnerUniversities";
import Navbar from "./components/AppHeader";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      {/* header end */}

      {/* <section
        id="hero"
        className="relative text-center py-32 md:py-40 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Your trusted pathway to top universities in Malaysia — guiding your
            journey with success, confidence, and care.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 text-lg bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-lg">
              Apply Now
            </button>
            <button className="px-6 py-3 text-lg border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-blue-900 rounded-lg">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section> */}

      <HeroSection />

      {/*  */}

      <VisaSection />

      {/* partner */}

      <OurPartnerUniversities />

      {/*  */}

      <section id="why" className="py-20 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Global Study Hub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Globe2 className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                ),
                title: "Authorized Representative",
                desc: "We officially represent top Malaysian universities for admission and guidance.",
              },
              {
                icon: (
                  <CheckCircle className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                ),
                title: "Guaranteed Admission Guidance",
                desc: "Our expert counselors ensure smooth application and selection processes.",
              },
              {
                icon: (
                  <Send className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                ),
                title: "Fast Visa Processing",
                desc: "We help students secure their visa approvals quickly with precision.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-blue-800 shadow-lg"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Start Your Journey Today
        </h2>
        <p className="text-gray-600 mb-8">
          Chat with our experts and start your application today!
        </p>
        <button className="text-lg px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-lg">
          WhatsApp Us Now
        </button>
      </section>

      <footer className="py-10 bg-blue-900 text-gray-200 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Global Study Hub. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
