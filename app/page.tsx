"use client";

import React, { useEffect } from "react";
import GrainOverlay from "@/components/GrainOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophies from "@/components/Philosophies";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Check if user has preferred reduced motion to respect settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      const reveals = document.querySelectorAll(".reveal");

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -60px 0px", // trigger slightly before fully on screen
        },
      );

      reveals.forEach((reveal) => revealObserver.observe(reveal));

      return () => {
        reveals.forEach((reveal) => revealObserver.unobserve(reveal));
      };
    } else {
      // Immediately reveal everything if animations are turned off at OS level
      document.querySelectorAll(".reveal").forEach((reveal) => {
        reveal.classList.add("active");
      });
    }
  }, []);

  return (
    <>
      {/* Texture Grain Overlay */}
      <GrainOverlay />

      {/* Sticky Editorial Navigation */}
      <Navbar />

      <main className="mt-16 bg-[#F8F6F2] relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Narrative / About section */}
        <About />

        {/* Services & Core Capabilities */}
        <Services />

        {/* Technical philosophies */}
        <Philosophies />

        {/* Immersive Case Studies */}
        <Projects />

        {/* Technical stack infinite marquee divider */}
        <div className="py-12 border-y border-border-subtle bg-primary text-paper-white overflow-hidden my-16 select-none">
          <div className="marquee-container">
            <div className="marquee-track gap-16 md:gap-24 font-serif text-5xl md:text-7xl font-bold uppercase py-2">
              <span className="text-[#a8bfff] opacity-60">React.js</span>
              <span className="text-white opacity-40">Next.js</span>
              <span className="text-[#a8bfff] opacity-60">TypeScript</span>
              <span className="text-white opacity-35">Node.js</span>
              <span className="text-[#ffb95f] opacity-65">FastAPI</span>
              <span className="text-white opacity-35">Express</span>
              <span className="text-[#ffb95f] opacity-65">Docker</span>
              <span className="text-white opacity-35">Caching</span>
              <span className="text-[#a8bfff] opacity-60">Deployment</span>

              {/* Loop replication */}
              <span className="text-[#a8bfff] opacity-60">React.js</span>
              <span className="text-white opacity-40">Next.js</span>
              <span className="text-[#a8bfff] opacity-60">TypeScript</span>
              <span className="text-white opacity-35">Node.js</span>
              <span className="text-[#ffb95f] opacity-65">FastAPI</span>
              <span className="text-white opacity-35">Express</span>
              <span className="text-[#ffb95f] opacity-65">Docker</span>
              <span className="text-white opacity-35">Caching</span>
              <span className="text-[#a8bfff] opacity-60">Deployment</span>
            </div>
          </div>
        </div>

        {/* Dynamic GitHub contribution visual */}
        <OpenSource />

        {/* Structural network grids */}
        <Socials />

        {/* Clean, validated contact layout */}
        <Contact />
      </main>

      {/* TYpographic footer */}
      <Footer />
    </>
  );
}
