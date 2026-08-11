"use client";

import { useEffect, useRef, useState } from "react";

export function FutureSection() {
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
    <section ref={sectionRef} className="relative py-32 lg:py-48 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-hero font-display mb-10 leading-tight text-foreground uppercase tracking-tight">
            Tomorrow’s businesses can’t run on <br />
            <span className="text-accent-gold">yesterday’s systems.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16">
            NEXORA helps businesses move beyond outdated processes and fragmented technology with intelligent systems designed to evolve alongside them.
          </p>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-gold-hairline bg-accent-gold/5">
            <span className="font-display text-2xl text-accent-gold">Build For Tomorrow.</span>
          </div>
        </div>
      </div>
      
      {/* Scanline effect similar to Earth Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(200,164,93,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_4s_linear_infinite]" />
      </div>
    </section>
  );
}
