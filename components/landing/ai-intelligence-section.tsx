"use client";

import { useEffect, useState, useRef } from "react";
import { Zap, MessageSquare, Users, Calendar, Mail, Workflow, Star, BookOpen, BarChart3, Lightbulb, Filter, Sparkles, Settings } from "lucide-react";

const aiCapabilities = [
  { title: "AI Voice Assistants", icon: Zap },
  { title: "AI Receptionists", icon: MessageSquare },
  { title: "AI Sales Agents", icon: Users },
  { title: "AI Appointment Booking", icon: Calendar },
  { title: "AI Email & Content Creation", icon: Mail },
  { title: "AI Workflow Automation", icon: Workflow },
  { title: "AI Review Management", icon: Star },
  { title: "AI Knowledge Base", icon: BookOpen },
  { title: "AI Reporting & Insights", icon: BarChart3 },
  { title: "AI Conversation Assistants", icon: Lightbulb },
  { title: "AI Funnel Generation", icon: Filter },
  { title: "AI Studio", icon: Sparkles },
  { title: "AI Prompt Optimisation", icon: Settings },
];

export function AIIntelligenceSection() {
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
    <section id="ai-intelligence" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6 tracking-widest uppercase">
            <span className="relative w-8 sm:w-12 h-px bg-foreground/10 overflow-hidden">
              <span 
                className="absolute inset-0 bg-accent-gold transition-transform duration-1000 ease-out"
                style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-100%)', transitionDelay: '200ms' }}
              />
            </span>
            AI-Powered Intelligence
            <span className="relative w-8 sm:w-12 h-px bg-foreground/10 overflow-hidden">
              <span 
                className="absolute inset-0 bg-accent-gold transition-transform duration-1000 ease-out"
                style={{ transform: isVisible ? 'translateX(0)' : 'translateX(100%)', transitionDelay: '200ms' }}
              />
            </span>
          </span>
          <h2 className="text-section-title font-display mb-6 sm:mb-8 leading-tight">
            Intelligent capabilities
            <br />
            <span className="text-accent-gold">built for your business.</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From AI receptionists that never sleep to automated workflows that eliminate manual tasks — every capability is deployed to save your team time and drive measurable results.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className="relative p-6 sm:p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: 'var(--navy-border)',
                    backgroundColor: 'rgba(13, 27, 42, 0.6)',
                  }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(200, 164, 93, 0.1)',
                        borderColor: 'var(--gold-hairline)',
                        borderWidth: '1px',
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-medium text-warm-white group-hover:text-accent-gold transition-colors">
                        {capability.title}
                      </h3>
                    </div>
                  </div>

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
      </div>
    </section>
  );
}
