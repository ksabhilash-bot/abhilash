import React from "react";
import { Layers, Server, Package, Zap, Code, Gauge } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      icon: <Layers size={36} className="text-accent-blue" />,
      title: "Full-Stack Development",
      description: "Building responsive, modern user interfaces in React and Next.js, closely coupled with fast-executing, data-persistent business logic layers."
    },
    {
      icon: <Server size={36} className="text-accent-amber" />,
      title: "High-Performance Backends",
      description: "Developing blazing-fast API frameworks in FastAPI and Express, structured with secure routing, robust authentication, and input sanitization."
    },
    {
      icon: <Package size={36} className="text-primary" />,
      title: "DevOps & Docker Integration",
      description: "Containerizing web systems with Docker for isolated dev-to-prod setups, multi-container orchestration, and light, efficient footprint hosting."
    },
    {
      icon: <Zap size={36} className="text-accent-amber" />,
      title: "Scalable Database Caching",
      description: "Implementing key-value data caching layers via Redis to minimize latency, optimize database read workloads, and build responsive apps."
    },
    {
      icon: <Code size={36} className="text-primary" />,
      title: "API Design & REST Architectures",
      description: "Creating highly standardized RESTful APIs, cleanly documented, conforming to security protocols, and integrating third-party systems."
    },
    {
      icon: <Gauge size={36} className="text-accent-blue" />,
      title: "Performance & SEO Optimizations",
      description: "Auditing application load indices, optimizing core web vitals for maximum lighthouse scores, and designing page routing for high search rankings."
    }
  ];

  return (
    <section className="bg-surface-container py-24 md:py-32 reveal" id="services">
      <div className="px-6 md:px-16 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div>
            <span className="font-sans text-[10px] font-bold tracking-widest text-accent-blue uppercase block mb-2">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">
              Expertise &amp; Services
            </h2>
          </div>
          <p className="font-sans text-[10px] font-bold tracking-widest text-text-secondary max-w-[200px] text-left sm:text-right uppercase">
            Specialized solutions for modern software engineering.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="bg-paper-white p-8 border border-border-subtle service-card cursor-default select-none relative group"
            >
              {/* Card Index Marker */}
              <span className="absolute top-4 right-6 font-sans text-[10px] font-semibold text-border-subtle group-hover:text-primary transition-colors uppercase">
                IDX-0{index + 1}
              </span>
              
              <div className="mb-6 block group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-primary group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
