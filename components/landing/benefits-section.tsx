"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "SAVE TIME",
    description: "Reduce repetitive tasks and unnecessary administration."
  },
  {
    title: "RESPOND FASTER",
    description: "Make sure customers and opportunities aren’t left waiting."
  },
  {
    title: "OPERATE SMARTER",
    description: "Connect information, communication and workflows."
  },
  {
    title: "SCALE BETTER",
    description: "Build systems capable of evolving as the business grows."
  }
];

export function BenefitsSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-midnight-navy overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-section-title font-display mb-6 leading-tight text-foreground">
            Technology should make <br />
            <span className="text-accent-gold">business simpler.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/5 border border-foreground/5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group p-10 sm:p-12 bg-midnight-navy transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <span className="font-mono text-xs tracking-[0.4em] text-accent-gold/60 mb-6 group-hover:text-accent-gold transition-colors duration-500">
                  {benefit.title}
                </span>
                <p className="text-lg sm:text-xl font-display text-warm-white leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Subtle gold dot accent */}
                <div className="mt-auto pt-10">
                  <div className={`w-1.5 h-1.5 rounded-full bg-accent-gold transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
