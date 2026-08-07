"use client";

import { useEffect, useState, useRef } from "react";

export function SelectivitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="selectivity" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-section-title font-display mb-6 sm:mb-8 leading-tight">
            We don't work
            <br />
            <span className="text-accent-gold">with everyone.</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <p className="text-body text-muted-foreground">
              We intentionally limit the number of active projects we undertake to ensure every client receives the strategic focus, attention, and long-term support they deserve.
            </p>

            <p className="text-body text-muted-foreground">
              We partner with ambitious businesses committed to long-term growth. Every project is carefully selected to ensure we can deliver exceptional results and maintain the highest level of service.
            </p>

            <p className="text-body text-muted-foreground">
              If you're looking for a strategic technology partner rather than just another software provider, we'd love to hear from you.
            </p>
          </div>

          {/* Call to action text */}
          <p className="text-sm sm:text-base text-accent-gold font-medium">
            Apply below.
          </p>
        </div>
      </div>
    </section>
  );
}
