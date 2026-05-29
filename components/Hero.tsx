"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Server, Terminal, Cpu } from "lucide-react";
import mee from "../public/mee.jpeg";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(mee.src);
  const [tryPng, setTryPng] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageError = () => {
    if (!tryPng) {
      setImgSrc(mee.src);
      setTryPng(true);
    } else {
      setImgSrc("/hero-fallback.png");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5 range
    const y = (e.clientY - top) / height - 0.5;

    // Scale up coordinates to 24px maximum movement
    setCoords({ x: x * 24, y: y * 24 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center px-6 md:px-16 max-w-[1200px] mx-auto py-16 md:py-24 gap-12 select-none">
      {/* Editorial Tech Details */}
      <div className="w-full md:w-3/5 space-y-8 order-2 md:order-1 reveal active">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-accent-blue" />
          <span className="font-sans text-[10px] font-bold tracking-widest text-accent-blue uppercase flex items-center gap-1.5">
            <Cpu size={12} />
            Full-Stack Software Craftsman
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-primary">
          I Build High-Performance Digital Products That Scale.
        </h1>

        <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
          Hi, I&apos;m{" "}
          <strong className="text-primary font-semibold">Abhilash K S</strong>.
          I specialize in designing pixel-perfect, interactive React and Next.js
          interfaces paired with robust, highly-optimized backend architectures
          (FastAPI, Express, Node.js), containerized with Docker, and boosted by
          advanced caching systems.
        </p>

        {/* Dynamic Skill Badges */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container border border-border-subtle font-sans text-[10px] font-semibold tracking-wider text-text-secondary uppercase">
            <Terminal size={10} className="text-accent-blue" /> Next.js & React
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container border border-border-subtle font-sans text-[10px] font-semibold tracking-wider text-text-secondary uppercase">
            <Server size={10} className="text-accent-amber" /> FastAPI & Express
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container border border-border-subtle font-sans text-[10px] font-semibold tracking-wider text-text-secondary uppercase">
            Docker & Redis Caching
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            className="bg-primary text-white px-8 py-4 text-center font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-accent-blue hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            href="#work"
          >
            Explore My Work
            <ArrowRight size={14} />
          </a>
          <a
            className="border border-primary text-primary px-8 py-4 text-center font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
            href="#contact"
          >
            Let&apos;s Work Together
            <ChevronRight size={14} />
          </a>
        </div>
      </div>

      {/* Portrait Container with Mouse Parallax */}
      <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[360px] h-[450px] md:h-[550px] border border-border-subtle overflow-hidden cursor-crosshair bg-surface-container select-none group"
          id="hero-img-container"
        >
          <img
            alt="Abhilash K S Portrait"
            src={imgSrc}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:grayscale"
            style={{
              transform: `translate(${coords.x}px, ${coords.y}px) scale(${isHovered ? 1.08 : 1.02})`,
              transition: isHovered
                ? "transform 0.05s ease-out, filter 0.8s ease"
                : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease",
            }}
          />
          {/* Inner Drafting Frame Border */}
          <div className="absolute inset-0 border-[10px] border-paper-white pointer-events-none transition-transform duration-500 group-hover:scale-95" />
          <div className="absolute inset-[10px] border border-border-subtle pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
