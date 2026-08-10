"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isVisible = mounted;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-start sm:justify-center overflow-hidden">
      {/* Animated sphere background - responsive sizing */}
      <div className="absolute -right-32 sm:-right-16 lg:right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] opacity-30 sm:opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-40 pb-20">
        {/* Eyebrow */}
        <div
          className={`mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground font-sans tracking-wide">
            <span className="relative w-8 sm:w-12 h-px bg-foreground/10 overflow-hidden">
              <span
                className="absolute inset-0 bg-accent-gold transition-[transform] duration-1000 ease-out origin-left"
                style={{
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: "500ms",
                }}
              />
            </span>
            Automate. Elevate. Dominate.
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-8 sm:mb-12">
          <h1
            className="text-hero font-display leading-tight tracking-tight transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(2rem)",
              transitionDelay: "100ms",
            }}
          >
            <span className="block text-foreground">Intelligence,</span>
            <span className="block text-foreground">Built Into</span>
            <span className="block text-accent-gold">Your Business.</span>
          </h1>

          {/* Brand Bio — one sentence that explains exactly what we do */}
          <p
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(2rem)",
              transitionDelay: "300ms",
            }}
          >
            We help ambitious businesses automate operations, eliminate bottlenecks, and build the intelligent systems they need to scale — without the guesswork.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(2rem)",
            transitionDelay: "500ms",
          }}
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-bold group"
            onClick={() =>
              document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Apply for Access
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-8 h-14 text-base"
            onClick={() =>
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
