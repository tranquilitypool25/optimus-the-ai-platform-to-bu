"use client";

import { useEffect, useRef, useState } from "react";
import { XCircle } from "lucide-react";

const problems = [
  "Manual administration",
  "Missed enquiries",
  "Disconnected software",
  "Repetitive tasks",
  "Slow customer follow-up",
  "Information spread across systems",
  "Outdated software",
  "Software that no longer fits"
];

export function ProblemSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`max-w-4xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
            Your business shouldn’t be held back by the <span className="text-accent-gold">systems behind it.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Your business has evolved. Your systems should too. Disconnected tools and manual processes create friction that limits your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-6 rounded-xl border border-foreground/5 bg-navy-surface/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <XCircle className="w-5 h-5 text-accent-gold/60 shrink-0" />
              <span className="text-sm sm:text-base text-warm-white/80 font-sans tracking-wide">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
