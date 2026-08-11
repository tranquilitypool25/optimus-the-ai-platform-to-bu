"use client";

import { useEffect, useState, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NEXORA didn't just give us software; they gave us a scalable way to operate. Our customer response time dropped from hours to seconds.",
    author: "Sarah Chen",
    position: "Operations Director, Lumina Group",
  },
  {
    quote: "The custom portal NEXORA built for our field team has completely removed our manual admin bottleneck. We're finally ready to scale.",
    author: "Marcus Thorne",
    position: "Founder, Apex Logistics",
  },
  {
    quote: "Connected technology that actually fits how we work. The ROI was clear within the first month of implementation.",
    author: "Elena Rodriguez",
    position: "CEO, Vento Systems",
  },
];

const companies = ["Lumina", "Apex", "Vento", "Stellar", "Orbit", "Nexus", "Summit", "Vertex"];

export function TestimonialsSection() {
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
    <section id="testimonials" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="eyebrow mb-6">
            <span className="eyebrow-line" />
            Social Proof
          </span>
          <h2 className="text-section-title font-display mb-6 leading-tight text-foreground">
            Better Systems. <br />
            <span className="text-accent-gold">Better Business.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`p-10 rounded-2xl border border-foreground/5 bg-navy-surface/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-accent-gold/20 mb-6" />
              <p className="text-lg text-warm-white/90 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{t.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by marquee - PRESERVED ANIMATION */}
        <div className={`pt-20 border-t border-foreground/5 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-center text-[10px] font-mono tracking-[0.4em] text-muted-foreground uppercase mb-12">Trusted by ambitious businesses</p>
          <div className="w-full overflow-hidden">
            <div className="flex gap-16 items-center marquee">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-16 items-center shrink-0">
                  {companies.map((company) => (
                    <span
                      key={`${setIdx}-${company}`}
                      className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
