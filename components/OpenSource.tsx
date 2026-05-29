"use client";

import React, { useState, useMemo } from "react";
import { GitBranch, Star, GitFork, Award } from "lucide-react";

export default function OpenSource() {
  const [hoveredTile, setHoveredTile] = useState<{ index: number; commits: number; date: string } | null>(null);

  // Generate 364 contribution tiles with fixed data so it doesn't shift on hot reload
  const tiles = useMemo(() => {
    const arr = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Seeded pseudo-randomness
    let seed = 42;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < 364; i++) {
      const val = random();
      let commits = 0;
      if (val > 0.85) commits = Math.floor(random() * 8) + 4; // High activity
      else if (val > 0.5) commits = Math.floor(random() * 4) + 1; // Low activity
      
      // Calculate a mock date
      const dayOffset = i;
      const monthIdx = Math.floor((dayOffset / 364) * 12);
      const day = (dayOffset % 28) + 1;
      const dateStr = `${months[monthIdx]} ${day}, 2025`;
      
      arr.push({ index: i, commits, date: dateStr });
    }
    return arr;
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto reveal">
      <div className="flex flex-col items-center space-y-6 text-center mb-16">
        <span className="font-sans text-[10px] font-bold tracking-widest text-accent-blue uppercase flex items-center gap-1.5 justify-center">
          <Award size={12} />
          Giving Back
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">
          Open Source Philosophy
        </h2>
        <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed">
          I believe high-performance, robust software is built on open collaboration. Part of my journey is contributing to systems and maintaining clean libraries that developers can rely on.
        </p>
      </div>

      {/* GitHub Mock Dashboard */}
      <div className="bg-surface-container p-6 md:p-12 border border-border-subtle hover:shadow-xl transition-shadow duration-500 relative select-none">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-full">
              <GitBranch size={20} />
            </div>
            <div className="text-left">
              <p className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
                GITHUB REPOSITORY
              </p>
              <a 
                href="https://github.com/ksabhilash-bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-serif text-lg md:text-xl font-bold leading-none hover:text-accent-blue transition-colors flex items-center gap-1.5"
              >
                @ksabhilash-bot
              </a>
            </div>
          </div>

          {/* Repo Stats */}
          <div className="flex gap-8">
            <div className="text-center">
              <div className="flex items-center gap-1 text-primary justify-center">
                <Star size={14} className="text-accent-amber fill-accent-amber" />
                <span className="font-bold text-base font-sans">42</span>
              </div>
              <p className="text-[9px] font-semibold text-text-secondary tracking-widest uppercase">Stars</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 text-primary justify-center">
                <GitFork size={14} />
                <span className="font-bold text-base font-sans">12</span>
              </div>
              <p className="text-[9px] font-semibold text-text-secondary tracking-widest uppercase">Forks</p>
            </div>
          </div>
        </div>

        {/* Dynamic Tooltip */}
        <div className="h-6 relative mb-2 w-full text-center">
          {hoveredTile ? (
            <div className="text-[9px] font-bold text-accent-blue font-sans tracking-wide uppercase transition-all duration-300">
              {hoveredTile.commits === 0 ? "No contributions" : `${hoveredTile.commits} commits`} on {hoveredTile.date}
            </div>
          ) : (
            <div className="text-[9px] font-bold text-text-secondary font-sans tracking-wide uppercase transition-all duration-300">
              Hover tiles to inspect contribution activity
            </div>
          )}
        </div>

        {/* Mock Grid Heatmap */}
        <div className="grid grid-cols-26 sm:grid-cols-52 gap-[2px] overflow-hidden p-2 bg-[#FCF9F8] border border-border-subtle">
          {tiles.map((tile) => {
            // Colors range from off-white to deep emerald green matching github
            let color = "bg-[#F0EDEC]"; // 0 commits
            if (tile.commits > 0 && tile.commits <= 2) color = "bg-[#9be9a8]";
            if (tile.commits > 2 && tile.commits <= 4) color = "bg-[#40c463]";
            if (tile.commits > 4 && tile.commits <= 6) color = "bg-[#30a14e]";
            if (tile.commits > 6) color = "bg-[#216e39]";

            return (
              <div
                key={tile.index}
                onMouseEnter={() => setHoveredTile(tile)}
                onMouseLeave={() => setHoveredTile(null)}
                className={`h-2 w-full ${color} cursor-pointer transition-all duration-150 hover:scale-125 hover:z-20`}
                style={{
                  opacity: tile.commits === 0 ? 0.4 : 1
                }}
              />
            );
          })}
        </div>

        <div className="mt-4 flex justify-between text-[8px] text-text-secondary font-sans font-bold tracking-widest uppercase">
          <span>JAN 2025</span>
          <span>DEC 2025</span>
        </div>
      </div>
    </section>
  );
}
