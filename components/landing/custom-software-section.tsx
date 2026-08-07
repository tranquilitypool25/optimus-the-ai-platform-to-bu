"use client";

import { useEffect, useState, useRef } from "react";
import { Smartphone, Globe, BarChart3, Calendar, Package, Users, Bot, Building2, Truck, Zap } from "lucide-react";

const softwareFeatures = [
  { title: "Mobile Apps", icon: Smartphone },
  { title: "Customer Portals", icon: Globe },
  { title: "Internal Dashboards", icon: BarChart3 },
  { title: "Booking Platforms", icon: Calendar },
  { title: "Inventory Systems", icon: Package },
  { title: "CRM Systems", icon: Users },
  { title: "AI Assistants", icon: Bot },
  { title: "Property Management", icon: Building2 },
  { title: "Field Service Software", icon: Truck },
  { title: "Business Automations", icon: Zap },
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
    <section id="custom-software" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6 tracking-widest uppercase">
            <span className="w-6 sm:w-8 h-px" style={{ backgroundColor: 'var(--champagne-gold)' }} />
            Custom Software
            <span className="w-6 sm:w-8 h-px" style={{ backgroundColor: 'var(--champagne-gold)' }} />
          </span>
          <h2 className="text-section-title font-display mb-6 sm:mb-8 leading-tight">
            Built Around
            <br />
            <span className="text-accent-gold">Your Business.</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
            Not every business fits inside off-the-shelf software. That's why we design and develop custom applications, portals and intelligent systems tailored specifically to your operations, workflows and long-term vision.
          </p>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Whether you need a customer portal, booking platform, field service app, inventory system, internal dashboard or an AI-powered business platform, we create software that works the way your business works.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {softwareFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div
                  className="relative p-6 sm:p-8 rounded-lg border transition-all duration-300 hover:shadow-lg text-center"
                  style={{
                    borderColor: 'var(--navy-border)',
                    backgroundColor: 'rgba(13, 27, 42, 0.6)',
                  }}
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(200, 164, 93, 0.1)',
                        borderColor: 'var(--gold-hairline)',
                        borderWidth: '1px',
                      }}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent-gold" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-warm-white group-hover:text-accent-gold transition-colors">
                    {feature.title}
                  </h3>

                  {/* Animated bottom border */}
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-gold to-transparent rounded-b-lg transition-all duration-300 group-hover:w-full"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto italic">
            Designed for your business. Built to grow with it.
          </p>
        </div>
      </div>
    </section>
  );
}
