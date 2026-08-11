"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Cpu, Code2, ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "grow",
    title: "GROW",
    subtitle: "Customer Growth Systems",
    description: "Turn more enquiries into customers with connected websites, CRM, customer communication, lead capture and automated follow-up.",
    outcomes: [
      "Capture more opportunities",
      "Respond within seconds",
      "Improve lead follow-up",
      "Convert more enquiries",
      "Better customer experiences"
    ],
    capabilities: "Websites · Landing pages · Funnels · CRM · AI Receptionist · Booking · SMS/WhatsApp · Reviews",
    icon: TrendingUp
  },
  {
    id: "automate",
    title: "AUTOMATE",
    subtitle: "Intelligent Business Automation",
    description: "Remove repetitive work and connect the processes that keep your business moving.",
    outcomes: [
      "Less manual administration",
      "Faster internal processes",
      "Fewer repetitive tasks",
      "Real-time data visibility",
      "Smarter daily operations"
    ],
    capabilities: "AI Agents · Workflow Automation · Lead Routing · Notifications · Automated Reporting · Task Automation",
    icon: Cpu
  },
  {
    id: "build",
    title: "BUILD",
    subtitle: "Custom Software & Apps",
    description: "When standard software doesn’t fit your business, we build technology around the way you actually work.",
    outcomes: [
      "Technology designed for you",
      "No restrictive frameworks",
      "Scalable infrastructure",
      "Connected operations",
      "Unique competitive advantage"
    ],
    capabilities: "Web Applications · Mobile Apps · Client Portals · Inventory Systems · Dashboards · Bespoke Software",
    icon: Code2
  }
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="eyebrow mb-6">
            <span className="eyebrow-line" />
            Our Core Pillars
          </span>
          <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
            Technology built around <br />
            <span className="text-accent-gold">your business.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Your business shouldn’t have to fit your software. Your technology should fit your business. We identify what you actually need and build the right solution around it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative p-8 sm:p-10 rounded-2xl border border-foreground/5 bg-navy-surface/20 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-[0.3em] text-accent-gold">{pillar.title}</span>
                    <Icon className="w-6 h-6 text-accent-gold/40 group-hover:text-accent-gold transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display text-foreground mb-6">{pillar.subtitle}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {pillar.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    <p className="text-[10px] font-mono tracking-widest text-accent-gold/60 uppercase">Key Outcomes</p>
                    <ul className="space-y-2">
                      {pillar.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-warm-white/70">
                          <div className="w-1 h-1 rounded-full bg-accent-gold" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-foreground/5">
                    <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mb-3">Capabilities</p>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed italic">
                      {pillar.capabilities}
                    </p>
                  </div>
                </div>
                
                {/* Animated gold line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/5" />
                <div 
                  className="absolute bottom-0 left-0 h-px bg-accent-gold transition-[width] duration-1000 ease-out origin-left"
                  style={{ 
                    width: isVisible ? "100%" : "0%",
                    transitionDelay: `${(index * 200) + 600}ms` 
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
