"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export function ApplicationForm() {
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
    <section id="apply" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-foreground/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-section-title font-display mb-8 leading-tight text-foreground">
            Ready To <br />
            <span className="text-accent-gold">Build For Tomorrow?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tell us how your business works today. We’ll show you where it could work smarter. Book your discovery call below.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl border border-foreground/5 bg-navy-surface/20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Name</label>
                <Input placeholder="Your Name" className="bg-background/50 border-foreground/10 h-12 focus:border-accent-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Email</label>
                <Input type="email" placeholder="email@company.com" className="bg-background/50 border-foreground/10 h-12 focus:border-accent-gold transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Company</label>
              <Input placeholder="Company Name" className="bg-background/50 border-foreground/10 h-12 focus:border-accent-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">How can we help?</label>
              <Textarea placeholder="Tell us about your current systems and goals..." className="bg-background/50 border-foreground/10 min-h-[120px] focus:border-accent-gold transition-colors" />
            </div>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-14 text-base font-bold group">
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest pt-4">
              Secure submission • personally reviewed within 48 hours
            </p>
          </form>
        </div>

        {/* Closing Slogan */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-20 h-px bg-accent-gold/40 mx-auto mb-10" />
          <p className="text-xl sm:text-2xl lg:text-3xl font-display text-warm-white max-w-2xl mx-auto leading-tight italic">
            "We build, manage and optimise everything. You focus on your business."
          </p>
          <p className="mt-8 font-mono text-xs tracking-[0.4em] text-accent-gold uppercase">Technology built around your business.</p>
        </div>
      </div>
    </section>
  );
}
