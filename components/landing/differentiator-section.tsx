"use client";

import { useEffect, useRef, useState } from "react";

export function DifferentiatorSection() {
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
    <section ref={sectionRef} className="relative py-32 lg:py-48 bg-midnight-navy overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-hero font-display mb-12 leading-tight text-foreground uppercase tracking-tight">
            Technology Built Around <br />
            <span className="text-accent-gold">Your Business.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-left mt-20">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-display text-warm-white">
                Your business shouldn’t have to fit your software.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every business works differently. Some simply need their existing technology connected and improved. Some need intelligent automation. Others require software designed specifically around their operations.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-display text-accent-gold">
                Your technology should fit your business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                NEXORA identifies what your business actually needs and builds the right solution around it. We don't sell every customer the exact same product — we install the specific outcomes your business requires to scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
