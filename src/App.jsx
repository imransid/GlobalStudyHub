import React, { useState } from "react";
import VisaSection from "./components/VisaSucessStory";
import OurPartnerUniversities from "./components/OurPartnerUniversities";
import Navbar from "./components/AppHeader";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import NewsCarousel from "./components/NewsCarousel";

import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      {/* header end */}

      <HeroSection />

      {/*  */}

      <VisaSection />

      {/* partner */}

      <OurPartnerUniversities />

      {/*  */}

      <NewsCarousel />

      <WhySection />

      <ContactSection />

      {/*  */}

      <footer className="py-10 bg-blue-900 text-gray-200 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Global Study Hub. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
