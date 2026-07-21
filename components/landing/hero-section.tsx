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
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" suppressHydrationWarning>
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow - moved before headline */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-lg font-sans text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Automate. Elevate. Dominate.
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Intelligence,</span>
            <span className="block">Built Into</span>
            <span className="block">Your Business.</span>
          </h1>
        </div>
        
        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-200 mt-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            size="lg" 
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            Start free trial
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
          >
            Watch demo
          </Button>
        </div>
        
      </div>
      

      
    </section>
  );
}
