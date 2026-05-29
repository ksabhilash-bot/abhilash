"use client";

import React, { useState } from "react";
import { ArrowRight, Terminal, Monitor, Container, ExternalLink } from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projectList = [
    {
      index: "01",
      title: "Project Orion: Foundation Dashboard",
      tagline: "Enterprise analytical data dashboard demonstrating full-stack React and high-density client statistics.",
      description: "Developed as a cornerstone data platform for administrative teams. Features real-time state synchronizations, advanced client-side filtering arrays, and responsive SVG visual graphs that remain smooth even under 50,000 active telemetry streams.",
      tech: ["NEXT.JS", "TYPESCRIPT", "D3.JS", "TAILWIND"],
      link: "#",
      visual: (
        <div className="w-full h-full bg-[#1e1e24] p-4 text-[#cfd2d9] font-mono text-[10px] flex flex-col justify-between select-none">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-[#30303b] pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#27c93f] rounded-full inline-block" />
            </div>
            <span className="text-[#626875] font-sans font-semibold tracking-wider text-[8px] uppercase">ORION ANALYTICS ENGINE</span>
            <Monitor size={10} className="text-accent-blue" />
          </div>
          
          {/* Dashboard Visual Grid */}
          <div className="grid grid-cols-3 gap-2 my-3 flex-1">
            {/* Stat Block 1 */}
            <div className="bg-[#17171c] p-2 border border-[#30303b] flex flex-col justify-between">
              <span className="text-[#626875] text-[7px] uppercase font-sans">Active req</span>
              <span className="text-white text-xs font-bold font-sans">14,282/s</span>
            </div>
            {/* Stat Block 2 */}
            <div className="bg-[#17171c] p-2 border border-[#30303b] flex flex-col justify-between">
              <span className="text-[#626875] text-[7px] uppercase font-sans">Latency</span>
              <span className="text-accent-blue text-xs font-bold font-sans">0.82ms</span>
            </div>
            {/* Stat Block 3 */}
            <div className="bg-[#17171c] p-2 border border-[#30303b] flex flex-col justify-between">
              <span className="text-[#626875] text-[7px] uppercase font-sans">Cache Hit</span>
              <span className="text-[#27c93f] text-xs font-bold font-sans">98.4%</span>
            </div>
          </div>
          
          {/* Simulated SVG Wave Line Graph */}
          <div className="bg-[#17171c] border border-[#30303b] p-2 flex-1 relative flex items-end h-20">
            <svg className="w-full h-full text-accent-blue" viewBox="0 0 100 30" fill="none">
              <path 
                d="M0,25 Q15,20 30,10 T60,18 T90,5 L100,5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
              <path 
                d="M0,25 Q15,20 30,10 T60,18 T90,5 L100,5 L100,30 L0,30 Z" 
                fill="currentColor" 
                fillOpacity="0.08" 
              />
            </svg>
            <span className="absolute bottom-1 right-2 text-[#626875] text-[6px]">LIVE FREQUENCY</span>
          </div>
        </div>
      )
    },
    {
      index: "02",
      title: "Project Sentinel: Caching Proxy",
      tagline: "High-throughput API Gateway proxy with active Redis query caching layers and Docker compose network isolation.",
      description: "Designed a backend caching layer mapping to a FastAPI runtime gateway. By intercepting database IO workflows with optimized Redis key expirations, we mitigated standard query workloads by 85% and successfully containerized the layout to run under 60MB standard RAM environments.",
      tech: ["FASTAPI", "REDIS", "DOCKER", "POSTGRES"],
      link: "#",
      visual: (
        <div className="w-full h-full bg-[#0a0a0c] p-4 text-[#00ff66] font-mono text-[10px] flex flex-col justify-between select-none">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-[#1f2026] pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#3a3a45] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#3a3a45] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#3a3a45] rounded-full inline-block" />
            </div>
            <span className="text-[#555869] font-sans font-semibold tracking-wider text-[8px] uppercase">SENTINEL DOCKER RUNTIME</span>
            <Terminal size={10} className="text-[#00ff66]" />
          </div>
          
          {/* Terminal Console Logs */}
          <div className="space-y-1.5 my-3 flex-1 overflow-hidden text-[8px]">
            <p className="text-[#555869]">{"$ docker-compose up -d --build sentinel-proxy"}</p>
            <p className="text-[#2563EB]">{"[+] Container sentinel-redis  Running (healthy)"}</p>
            <p className="text-[#2563EB]">{"[+] Container sentinel-fastapi Running (healthy)"}</p>
            <p className="text-[#00ff66]">{"[INFO] Proxy booting... listening on port 8000"}</p>
            <p className="text-white">{"GET /api/v1/accounts/active -> CACHE HIT (0.6ms)"}</p>
            <p className="text-[#ff9e0b]">{"POST /api/v1/orders/create -> DB FLUSH WRITE (12.4ms)"}</p>
            <p className="text-white">{"GET /api/v1/orders/18274 -> CACHE MISS -> REDIS POP (8.2ms)"}</p>
            <p className="text-white">{"GET /api/v1/orders/18274 -> CACHE HIT (0.4ms)"}</p>
          </div>
          
          <div className="border-t border-[#1f2026] pt-2 flex justify-between items-center text-[7px] text-[#555869]">
            <span>SENTINEL SERVICE V1.0.4</span>
            <span className="text-[#00ff66] animate-pulse">● PORT 8000 OK</span>
          </div>
        </div>
      )
    },
    {
      index: "03",
      title: "Project DevEngine: Job Queue Runner",
      tagline: "Scalable containerized queue pipeline managing high-volume asynchronous process threads with Express and Docker.",
      description: "Built a background process supervisor engineered to offload lengthy telemetry jobs. Uses a Node.js Express dashboard connecting to internal containerized task networks, handling process pools cleanly with failure recovery logic and active system resource limits.",
      tech: ["NODE.JS", "EXPRESS", "RABBITMQ", "DOCKER"],
      link: "#",
      visual: (
        <div className="w-full h-full bg-[#1b1f24] p-4 text-[#9ea7b3] font-mono text-[10px] flex flex-col justify-between select-none">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-[#2d3139] pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#4c525e] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#4c525e] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#4c525e] rounded-full inline-block" />
            </div>
            <span className="text-[#6a737d] font-sans font-semibold tracking-wider text-[8px] uppercase">DEVENGINE PIPELINE</span>
            <Container size={10} className="text-accent-amber" />
          </div>
          
          {/* Process Queue Status list */}
          <div className="my-2 space-y-1.5 flex-1 text-[8px]">
            {/* Box 1 */}
            <div className="bg-[#24292e] p-1.5 border border-[#2d3139] flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28a745]" />
                <span className="text-white">worker-pool-node-01</span>
              </div>
              <span className="text-[#6a737d]">CPU 4.2%</span>
            </div>
            {/* Box 2 */}
            <div className="bg-[#24292e] p-1.5 border border-[#2d3139] flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28a745]" />
                <span className="text-white">worker-pool-node-02</span>
              </div>
              <span className="text-[#6a737d]">CPU 3.1%</span>
            </div>
            {/* Box 3 */}
            <div className="bg-[#24292e] p-1.5 border border-[#2d3139] flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dbab09] animate-pulse" />
                <span className="text-white">rabbitmq-queue-broker</span>
              </div>
              <span className="text-white">0 messages queued</span>
            </div>
          </div>
          
          <div className="text-[7px] text-[#6a737d] flex justify-between items-center">
            <span>MEM: 124MB / 512MB LIMIT</span>
            <span>UPTIME: 182H 45M</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary text-paper-white reveal" id="work">
      <div className="px-6 md:px-16 max-w-[1200px] mx-auto">
        <span className="font-sans text-[10px] font-bold tracking-widest text-[#a8bfff] uppercase block mb-4">
          Core Work
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 border-b border-border-subtle/20 pb-6">
          Featured Case Studies
        </h2>

        {/* Stacking Case Studies */}
        <div className="space-y-32">
          {projectList.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Asymmetric Alternating Text / Graphics */}
                <div 
                  className={`md:col-span-5 space-y-6 ${
                    isEven ? "order-2 md:order-1" : "order-2 md:order-2"
                  }`}
                >
                  <p className="font-sans text-[10px] font-bold tracking-widest text-[#a8bfff] uppercase">
                    Core Project {project.index}
                  </p>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight hover:text-[#a8bfff] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-[11px] font-bold tracking-wide text-white/60 uppercase">
                    {project.tagline}
                  </p>
                  
                  <p className="font-sans text-sm text-paper-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 border border-paper-white/20 font-sans text-[8px] font-semibold tracking-wider text-paper-white/60 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    className="group inline-flex items-center gap-2 pt-6 font-sans text-[10px] font-bold tracking-widest uppercase hover:gap-4 transition-all text-white border-b border-white pb-1 w-fit cursor-pointer"
                    href={project.link}
                  >
                    Explore Case Study
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Simulated Visual Mockup Graphic Container */}
                <div 
                  className={`md:col-span-7 h-[300px] md:h-[350px] shadow-2xl relative border border-white/10 overflow-hidden ${
                    isEven ? "order-1 md:order-2" : "order-1 md:order-1"
                  }`}
                >
                  <div 
                    className="w-full h-full transition-transform duration-700 ease-out"
                    style={{
                      transform: activeProject === index ? "scale(1.05)" : "scale(1)"
                    }}
                  >
                    {project.visual}
                  </div>
                  {/* Blueprint framing line overlay */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
