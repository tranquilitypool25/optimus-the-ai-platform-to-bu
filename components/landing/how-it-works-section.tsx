"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We understand how your business operates, where time is being lost and where opportunities are being missed."
  },
  {
    number: "02",
    title: "DESIGN",
    description: "We identify the right technology, systems and automation tailored specifically to your goals."
  },
  {
    number: "03",
    title: "BUILD",
    description: "We configure, connect, automate or develop the solution to work exactly as your business needs."
  },
  {
    number: "04",
    title: "EVOLVE",
    description: "We improve and expand the system as your business grows, ensuring long-term scalability."
  }
];

export function HowItWorksSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="eyebrow mb-6">
            <span className="eyebrow-line" />
            The Process
          </span>
          <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
            From Complexity <br />
            <span className="text-accent-gold">To Clarity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col gap-6">
                <span className="font-mono text-xs text-accent-gold/60 tracking-widest">{step.number}</span>
                <h3 className="text-2xl font-display text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
