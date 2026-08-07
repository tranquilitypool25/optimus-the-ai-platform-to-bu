"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["create", "build", "scale", "ship"];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const isVisible = mounted;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background - responsive sizing */}
      <div className="absolute -right-32 sm:-right-16 lg:right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] opacity-30 sm:opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Grid lines removed per feedback */}
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-40">
        {/* Eyebrow - moved before headline */}
        <div 
          className={`mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground font-sans tracking-wide">
            <span className="w-6 sm:w-8 h-px bg-accent/60" />
            Automate. Elevate. Dominate.
          </span>
        </div>

        {/* Main headline with two-tone effect */}
        <div className="mb-8 sm:mb-12">
          <h1 
            className="text-hero font-display leading-tight tracking-tight transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transitionDelay: '100ms'
            }}
          >
            <span className="block text-foreground">Intelligence,</span>
            <span className="block text-foreground">Built Into</span>
            <span className="block">
              <span className="text-accent-gold">Your Business.</span>
            </span>
          </h1>
        </div>
        
        {/* CTAs removed per feedback */}
        
      </div>
      

      
    </section>
  );
}
