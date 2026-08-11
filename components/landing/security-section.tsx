"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    title: "Enterprise-Grade Security",
    description: "We implement multi-layer security protocols to protect your business data and customer information.",
    icon: Shield
  },
  {
    title: "Data Privacy First",
    description: "Your data is yours. We build systems that prioritize privacy and comply with global standards.",
    icon: Lock
  },
  {
    title: "Transparent Systems",
    description: "No black boxes. We build clear, auditable workflows so you always know how your data is being used.",
    icon: Eye
  }
];

export function SecuritySection() {
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
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-midnight-navy overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}`}>
            <span className="eyebrow mb-6">
              <span className="eyebrow-line" />
              Trust & Reliability
            </span>
            <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
              Technology you can <br />
              <span className="text-accent-gold">rely on.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              NEXORA builds robust, secure, and scalable systems designed to protect your business as it grows. We take security as seriously as you do.
            </p>
            <div className="space-y-4">
              {["End-to-end encryption", "Regular security audits", "Compliant data handling", "Secure cloud infrastructure"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-warm-white/80">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <span className="font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border border-foreground/5 bg-navy-surface/30 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 rounded-xl bg-accent-gold/10 border border-accent-gold/20">
                      <Icon className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
