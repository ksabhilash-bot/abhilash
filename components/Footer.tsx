import React from "react";
import { Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-t border-border-subtle select-none">
      {/* Left side details */}
      <div className="space-y-4 max-w-sm">
        <div className="font-serif text-2xl font-bold tracking-tighter text-primary">
          Abhilash K S
        </div>
        <p className="font-sans text-xs text-text-secondary leading-relaxed">
          &copy; {currentYear} Abhilash K S. Handcrafted with passion, absolute precision, and a commitment to high-performance systems engineering.
        </p>
      </div>

      {/* Right side quick connections */}
      <div className="flex flex-col sm:flex-row gap-x-16 gap-y-6">
        {/* Navigation indices */}
        <div className="space-y-3">
          <p className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
            EXPLORE
          </p>
          <div className="flex flex-col gap-2 font-sans text-xs font-semibold uppercase tracking-wider">
            <a href="#work" className="text-text-secondary hover:text-accent-blue transition-colors">Case Studies</a>
            <a href="#services" className="text-text-secondary hover:text-accent-blue transition-colors">Services</a>
            <a href="#about" className="text-text-secondary hover:text-accent-blue transition-colors">About</a>
            <a href="#contact" className="text-text-secondary hover:text-accent-blue transition-colors">Contact</a>
          </div>
        </div>

        {/* Dynamic Connect anchors */}
        <div className="space-y-3">
          <p className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
            CONNECT
          </p>
          <div className="flex flex-col gap-2 font-sans text-xs font-semibold uppercase tracking-wider">
            <a href="https://github.com/ksabhilash-bot" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-k-s-b801ab386?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-primary">LinkedIn</a>
            <a href="mailto:ksabhilash11111@gmail.com" className="text-text-secondary hover:text-primary transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-primary">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
