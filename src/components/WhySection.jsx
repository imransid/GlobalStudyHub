import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, CheckCircle, Send } from "lucide-react";

export default function WhySection() {
  const items = [
    {
      icon: <Globe2 className="w-10 h-10 mx-auto mb-4 text-yellow-400" />,
      title: "Authorized Representative",
      desc: "We officially represent top Malaysian universities for admission and guidance.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 mx-auto mb-4 text-yellow-400" />,
      title: "Guaranteed Admission Guidance",
      desc: "Our expert counselors ensure smooth application and selection processes.",
    },
    {
      icon: <Send className="w-10 h-10 mx-auto mb-4 text-yellow-400" />,
      title: "Fast Visa Processing",
      desc: "We help students secure their visa approvals quickly with precision.",
    },
  ];

  // Framer Motion Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // delay between each item
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="why" className="py-20 bg-blue-700 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose Global Study Hub?
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} // triggers every scroll
        >
          {items.map((itemData) => (
            <motion.div
              key={itemData.title}
              variants={item}
              className="p-6 rounded-2xl bg-blue-800 shadow-lg"
            >
              {itemData.icon}
              <h3 className="text-xl font-semibold mb-2">{itemData.title}</h3>
              <p className="text-blue-100 text-sm">{itemData.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
