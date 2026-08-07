"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={`relative border transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ borderColor: 'var(--navy-border)' }}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect - PRESERVED */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(200, 164, 93, 0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-section-title font-display mb-6 sm:mb-8 leading-tight">
                  Ready to build
                  <br />
                  <span className="text-accent-gold">something great?</span>
                </h2>

                <p className="text-body text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-xl">
                  Join thousands of teams transforming their business with Tranquility Intelligence. 
                  Start free, scale infinitely.
                </p>

                <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="w-full xs:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-lg sm:rounded-full group font-sans font-medium transition-all duration-300"
                  >
                    Start building free
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full xs:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-lg sm:rounded-full border transition-all duration-300 font-sans font-medium"
                    style={{ borderColor: 'var(--navy-border)' }}
                  >
                    Talk to sales
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 font-mono">
                  No credit card required
                </p>
              </div>

              {/* Right animation - PRESERVED */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner - PRESERVED */}
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 border-b border-l" style={{ borderColor: 'var(--navy-border)' }} />
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 border-t border-r" style={{ borderColor: 'var(--navy-border)' }} />
        </div>
      </div>
    </section>
  );
}
