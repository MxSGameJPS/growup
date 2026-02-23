"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons"; // Added import for FloatingButtons

export default function Home() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <CaseStudies />
      <Footer />
      <FloatingButtons /> {/* Added FloatingButtons component */}
    </div>
  );
}
