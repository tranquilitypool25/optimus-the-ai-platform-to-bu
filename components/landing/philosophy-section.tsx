"use client";

import { useEffect, useRef, useState } from "react";

export function PhilosophySection() {
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
    <section id="philosophy" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="eyebrow mb-6">
              <span className="eyebrow-line" />
              Our Philosophy
            </span>
            <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
              Built for how you work.<br />
              <span className="text-accent-gold">Ready for where you’re going.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We don’t add technology simply for the sake of technology. We look at how the business actually operates and identify where better systems, automation and software can remove friction and create measurable value.
              </p>
              <p className="font-display text-warm-white italic">
                "Business understanding first. Technology second."
              </p>
            </div>
          </div>
          
          <div className={`relative aspect-square max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="absolute inset-0 border border-accent-gold/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-foreground/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="block font-display text-4xl sm:text-5xl text-accent-gold mb-2">N</span>
                <span className="block font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase">NEXORA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
