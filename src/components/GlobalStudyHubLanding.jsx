import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  GraduationCap,
  Globe2,
  CheckCircle,
  Send,
  Menu,
  X,
  Star,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function GlobalStudyHubLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Ferdous J.",
      country: "Bangladesh",
      text: "Global Study Hub made my visa process simple. I got admitted to APU and arrived smoothly!",
      rating: 5,
    },
    {
      name: "Aisha R.",
      country: "Bangladesh",
      text: "Great counseling and quick support. The team guided me step-by-step through the application.",
      rating: 5,
    },
    {
      name: "Rahim S.",
      country: "Bangladesh",
      text: "Professional, fast, and trustworthy. Highly recommend Global Study Hub for Malaysia admissions.",
      rating: 5,
    },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <img
              src={logo}
              alt="Global Study Hub Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="font-bold text-lg text-blue-700">
              Global Study Hub
            </h1>
          </div>
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <button
              onClick={() => scrollTo("visa")}
              className="hover:text-blue-700"
            >
              Visa Success
            </button>
            <button
              onClick={() => scrollTo("universities")}
              className="hover:text-blue-700"
            >
              Universities
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className="hover:text-blue-700"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollTo("why")}
              className="hover:text-blue-700"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-blue-700"
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <div className="flex flex-col text-center py-4">
              {["visa", "universities", "testimonials", "why", "contact"].map(
                (id) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative text-center py-28 md:py-36 text-white bg-cover bg-center mt-16"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/72"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <img
            src={logo}
            alt="Global Study Hub"
            className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Study Abroad with{" "}
            <span className="text-yellow-300">Global Study Hub</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Your trusted pathway to top universities in Malaysia — guiding your
            journey with success, confidence, and care.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button className="px-6 py-3 text-lg">Apply Now</Button>
            <Button variant="outline" className="px-6 py-3 text-lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Visa Success Section */}
      <section id="visa" className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            Visa Success Stories
          </h2>
          <p className="text-gray-600 mb-8 md:mb-10">
            Proudly maintaining a 100% visa success rate for our students
            pursuing higher education abroad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl shadow-md hover:shadow-lg transition bg-white"
              >
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    Success Story #{item}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Another student from Bangladesh achieved their dream of
                    studying in Malaysia through our guidance.
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section
        id="universities"
        className="py-16 md:py-20 bg-white text-center"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-700">
            Our Partner Universities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "University of Cyberjaya",
              "Asia Pacific University",
              "UCSI University",
              "Taylor's University",
            ].map((uni) => (
              <motion.div
                key={uni}
                whileHover={{ scale: 1.05 }}
                className="p-6 border rounded-2xl shadow-sm bg-gray-50"
              >
                <GraduationCap className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                <p className="font-semibold text-gray-700">{uni}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">
            What Students Say
          </h2>
          <p className="text-gray-600 mb-8">
            Real stories from students who trusted Global Study Hub.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-2xl shadow-md text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Why Choose Global Study Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="p-6 rounded-2xl bg-blue-800 shadow-lg text-left"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 mb-8">
            Chat with our experts and start your application today!
          </p>
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button size="lg" className="text-lg px-8 py-4">
              WhatsApp Us Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-gray-200 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Global Study Hub. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
