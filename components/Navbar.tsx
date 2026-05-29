"use client";

import React, { useState } from "react";
import { Mail, Check, FileText } from "lucide-react";

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ksabhilash11111@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 h-16 glass-effect border-b border-border-subtle">
      <div 
        className="font-serif text-lg md:text-xl font-bold tracking-tighter text-primary cursor-pointer hover:opacity-85 transition-opacity" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Abhilash K S
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a 
          className="text-primary hover:text-accent-blue border-b-2 border-primary hover:border-accent-blue pb-0.5 font-sans text-[10px] font-semibold tracking-widest uppercase transition-all" 
          href="#work"
        >
          Work
        </a>
        <a 
          className="text-text-secondary hover:text-primary pb-0.5 font-sans text-[10px] font-semibold tracking-widest uppercase transition-colors" 
          href="#services"
        >
          Services
        </a>
        <a 
          className="text-text-secondary hover:text-primary pb-0.5 font-sans text-[10px] font-semibold tracking-widest uppercase transition-colors" 
          href="#about"
        >
          About
        </a>
        <a 
          className="text-text-secondary hover:text-primary pb-0.5 font-sans text-[10px] font-semibold tracking-widest uppercase transition-colors" 
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors cursor-pointer group"
          title="Copy email to clipboard"
        >
          {copied ? (
            <>
              <Check size={16} className="text-accent-blue animate-bounce" />
              <span className="text-[10px] uppercase tracking-wider font-semibold font-sans text-accent-blue">Copied</span>
            </>
          ) : (
            <>
              <Mail size={16} className="group-hover:stroke-accent-blue transition-colors" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-semibold font-sans group-hover:text-primary transition-colors">ksabhilash11111@gmail.com</span>
            </>
          )}
        </button>
        <a
          href="#"
          className="bg-primary text-white px-5 py-2 font-sans text-[10px] font-semibold tracking-wider uppercase hover:bg-accent-blue transition-all active:scale-95 flex items-center gap-1.5"
        >
          <FileText size={12} />
          Resume
        </a>
      </div>
    </nav>
  );
}
