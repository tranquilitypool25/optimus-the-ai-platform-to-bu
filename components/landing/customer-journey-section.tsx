"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  "ENQUIRY",
  "RESPOND",
  "QUALIFY",
  "FOLLOW UP",
  "BOOK",
  "REMIND",
  "NURTURE",
  "REVIEW",
  "RE-ENGAGE"
];

export function CustomerJourneySection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className={`max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
            Never Let An <br />
            <span className="text-accent-gold">Opportunity Go Cold.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether someone calls, sends a message, visits your website or submits a form, the right system can make sure the opportunity doesn’t disappear.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-sm mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div
                className={`w-full py-4 px-8 rounded-full border border-foreground/10 bg-navy-surface/20 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="font-mono text-xs sm:text-sm tracking-[0.4em] text-warm-white/90">{step}</span>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`py-4 transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 50}ms` }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-gold/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
