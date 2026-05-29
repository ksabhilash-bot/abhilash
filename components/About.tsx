import React from "react";
import { Sparkles, Calendar, BookOpen, GitPullRequest } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto reveal" id="about">
      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border-subtle pt-12">
        {/* Left Column: Heading and Established Date */}
        <div className="md:col-span-4 space-y-4">
          <span className="font-sans text-[10px] font-bold tracking-widest text-accent-blue uppercase flex items-center gap-1.5">
            <Sparkles size={12} />
            Background Context
          </span>
          <h2 className="font-serif text-3xl md:text-4xl italic font-bold text-primary">
            The Narrative
          </h2>
          <div className="flex items-center gap-2 pt-2 text-text-secondary">
            <Calendar size={14} />
            <p className="font-sans text-[10px] font-bold tracking-widest uppercase">
              Established 2024
            </p>
          </div>
        </div>

        {/* Right Column: Detailed Narrative */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            In an era of mass-produced web templates, I prioritize rigorous digital craftsmanship. My coding philosophy revolves around modular architectures, absolute layout precision, and strict adherence to clean, testable design principles. 
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            I believe that backend performance is just as crucial as front-end interactions. By uniting responsive React components with robust, fast backends (FastAPI/Express) containerized under Docker, I deliver scalable digital ecosystems designed to solve authentic business bottlenecks.
          </p>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 py-12 border-y border-border-subtle bg-surface-container-low px-6">
        {/* Stat 1 */}
        <div className="text-center space-y-1">
          <p className="font-serif text-5xl md:text-6xl font-bold text-primary">3</p>
          <div className="flex items-center justify-center gap-1.5 text-text-secondary">
            <BookOpen size={12} className="text-accent-blue" />
            <p className="font-sans text-[10px] font-bold tracking-wider uppercase">Cornerstone Projects</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="text-center border-l border-border-subtle space-y-1">
          <p className="font-serif text-5xl md:text-6xl font-bold text-primary">8+</p>
          <p className="font-sans text-[10px] font-bold tracking-wider text-text-secondary uppercase">Technologies Stacked</p>
        </div>

        {/* Stat 3 */}
        <div className="text-center border-l border-border-subtle space-y-1">
          <p className="font-serif text-5xl md:text-6xl font-bold text-primary">Active</p>
          <p className="font-sans text-[10px] font-bold tracking-wider text-text-secondary uppercase text-ellipsis overflow-hidden">Full-Stack Level</p>
        </div>

        {/* Stat 4 */}
        <div className="text-center border-l border-border-subtle space-y-1">
          <p className="font-serif text-5xl md:text-6xl font-bold text-primary">100%</p>
          <div className="flex items-center justify-center gap-1.5 text-text-secondary">
            <GitPullRequest size={12} className="text-accent-amber" />
            <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-ellipsis overflow-hidden">Handcrafted Code</p>
          </div>
        </div>
      </div>
    </section>
  );
}
