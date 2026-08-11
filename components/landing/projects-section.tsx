"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Waves, Home } from "lucide-react";

const projects = [
  {
    title: "Tranquility Pool App TM",
    subtitle: "The future of Pool care",
    description: "Real-time updates, seamless communication, and crystal-clear service records at your fingertips.",
    icon: Waves,
    color: "from-blue-500/10 to-accent-gold/10"
  },
  {
    title: "Remote Rentals software TM",
    subtitle: "Property Management, Simplified.",
    description: "Track rent, maintenance, documents, and property activity from anywhere.",
    icon: Home,
    color: "from-emerald-500/10 to-accent-gold/10"
  }
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden border-t border-foreground/5 bg-obsidian">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="eyebrow mb-6">
            <span className="eyebrow-line" />
            Work Highlights
          </span>
          <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
            Proven Solutions for<br />
            <span className="text-accent-gold">Modern Operations.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We don't just build software; we build the future of how businesses operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 sm:p-12 rounded-2xl border border-foreground/5 bg-gradient-to-br ${project.color} transition-all duration-700 hover:border-accent-gold/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8 p-4 w-16 h-16 rounded-xl bg-background/50 border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-display text-foreground mb-2">{project.title}</h3>
                    <p className="text-accent-gold font-medium mb-4 tracking-wide uppercase text-xs sm:text-sm">{project.subtitle}</p>
                    <p className="text-body text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-accent-gold uppercase tracking-widest group-hover:gap-4 transition-all duration-300 cursor-pointer">
                    Explore Solution <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
