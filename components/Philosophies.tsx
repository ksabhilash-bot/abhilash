import React from "react";
import { Lightbulb, Workflow } from "lucide-react";

export default function Philosophies() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto reveal">
      <div className="space-y-32">
        {/* Philosophy 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <Lightbulb size={16} className="text-accent-amber" />
              <p className="font-sans text-[10px] font-bold tracking-widest text-accent-amber uppercase">
                Philosophy 01
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-primary">
              Business-Oriented Thinking
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              I don&apos;t write code in a vacuum. As an engineer, my primary role is to build assets that drive authentic business value—whether that means speeding up pages to boost user retention, streamlining data queries to decrease infrastructure bills, or containerizing applications to accelerate deployment cycles.
            </p>
          </div>

          {/* Graphic Blueprint */}
          <div className="w-full md:w-1/2 h-64 bg-surface-container flex items-center justify-center border border-border-subtle overflow-hidden relative group">
            {/* Animated Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e2e1_1px,transparent_1px),linear-gradient(to_bottom,#e5e2e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-35" />
            
            {/* Blueprint SVG Growth Trend */}
            <svg 
              className="w-48 h-32 text-border-subtle group-hover:text-accent-blue transition-colors duration-500 transform group-hover:scale-110 ease-out z-10" 
              viewBox="0 0 200 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Axes */}
              <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="10" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Growth Curve */}
              <path 
                d="M 10 90 Q 50 85 90 60 T 170 20" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                className="path-animate" 
              />
              
              {/* Highlight Nodes */}
              <circle cx="90" cy="60" r="4" fill="currentColor" />
              <circle cx="170" cy="20" r="5" fill="#2563EB" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Label Markers */}
              <rect x="110" y="10" width="50" height="15" rx="3" fill="#FCF9F8" stroke="currentColor" strokeWidth="1" />
              <text x="115" y="21" fill="#111111" fontSize="6" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">MAX VALUE</text>
            </svg>
          </div>
        </div>

        {/* Philosophy 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <Workflow size={16} className="text-accent-blue" />
              <p className="font-sans text-[10px] font-bold tracking-widest text-accent-blue uppercase">
                Philosophy 02
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-primary">
              Clean, Scalable Architecture
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Maintainability is non-negotiable. I structuralize systems using strictly isolated components and service-oriented patterns. By isolating database controllers, keeping route operations thin, and containerizing runtimes, I generate codebases that stay easy to test, expand, and onboard for new peers.
            </p>
          </div>

          {/* Graphic Blueprint */}
          <div className="w-full md:w-1/2 h-64 bg-surface-container flex items-center justify-center border border-border-subtle overflow-hidden relative group">
            {/* Animated Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e2e1_1px,transparent_1px),linear-gradient(to_bottom,#e5e2e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-35" />
            
            {/* Blueprint SVG Architecture Connections */}
            <svg 
              className="w-48 h-32 text-border-subtle group-hover:text-accent-amber transition-colors duration-500 transform group-hover:scale-110 ease-out z-10" 
              viewBox="0 0 200 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Architecture node containers */}
              {/* Client Component */}
              <rect x="15" y="35" width="40" height="30" rx="2" fill="#FCF9F8" stroke="currentColor" strokeWidth="1.5" />
              <text x="23" y="52" fill="#111111" fontSize="6" fontFamily="sans-serif" fontWeight="bold">REACT UI</text>
              
              {/* API Gateway */}
              <rect x="80" y="35" width="40" height="30" rx="2" fill="#FCF9F8" stroke="currentColor" strokeWidth="1.5" />
              <text x="85" y="52" fill="#111111" fontSize="6" fontFamily="sans-serif" fontWeight="bold">FASTAPI</text>
              
              {/* Database / Redis Caching */}
              <rect x="145" y="15" width="40" height="25" rx="2" fill="#FCF9F8" stroke="currentColor" strokeWidth="1.5" />
              <text x="154" y="30" fill="#111111" fontSize="6" fontFamily="sans-serif" fontWeight="bold">REDIS</text>
              
              <rect x="145" y="60" width="40" height="25" rx="2" fill="#FCF9F8" stroke="currentColor" strokeWidth="1.5" />
              <text x="152" y="75" fill="#111111" fontSize="6" fontFamily="sans-serif" fontWeight="bold">DB / PG</text>
              
              {/* Connections (Lines) */}
              <path d="M 55 50 H 80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 120 45 L 145 30" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 120 55 L 145 70" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
