"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const examples = [
  "Customer portals",
  "Staff apps",
  "Inventory systems",
  "Field-service platforms",
  "Booking platforms",
  "Operational dashboards",
  "Internal management systems",
  "Custom workflows"
];

export function CustomSoftwareSection() {
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
    <section id="custom-software" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="eyebrow mb-6">
              <span className="eyebrow-line" />
              Bespoke Development
            </span>
            <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
              When Off-The-Shelf <br />
              <span className="text-accent-gold">Isn’t Enough.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Not every business can be improved by simply adding another piece of software. Sometimes the right system doesn’t exist yet.
              </p>
              <p>
                NEXORA builds web applications, mobile apps and internal platforms designed around real business operations. We build technology around the way you actually work.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-bold group"
              onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discuss Your Idea
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {examples.map((example, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border border-foreground/5 bg-navy-surface/30 flex items-center gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40" />
                <span className="text-sm sm:text-base text-warm-white/80 font-sans">{example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
