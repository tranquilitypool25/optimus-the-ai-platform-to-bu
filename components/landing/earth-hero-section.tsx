"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Twitter, Linkedin, Github, Instagram, Youtube } from "lucide-react";

export function EarthHeroSection() {
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

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Earth Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/earth-hero.png"
          alt="Earth from space"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex flex-col gap-6 sm:gap-10 mb-12 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-sans font-light tracking-[0.15em] sm:tracking-[0.3em] uppercase text-warm-white leading-relaxed">
              Every business runs on systems
            </h2>
            <h3 className="text-lg sm:text-2xl lg:text-4xl font-sans font-medium tracking-[0.15em] sm:tracking-[0.3em] uppercase text-accent-gold leading-relaxed">
              The best ones run on intelligence
            </h3>
          </div>
          
          <div className="flex justify-center py-2 sm:py-4">
            <div className="w-32 sm:w-80 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
          </div>

          <a 
            href="https://www.tranquilityintelligence.eu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-xl sm:text-3xl lg:text-4xl font-sans font-medium tracking-wide text-warm-white hover:text-accent-gold transition-colors duration-500 break-all sm:break-normal"
          >
            www.tranquilityintelligence.eu
          </a>
        </div>

        {/* Final Statement & Branding */}
        <div className="mt-12 sm:mt-24 space-y-8 sm:space-y-12">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-sans tracking-wide leading-relaxed">
            Whether we’re integrating the world’s leading platforms or building something entirely bespoke, our goal remains the same: create intelligent systems that help your business operate smarter, grow faster, and scale with confidence.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6 sm:gap-10">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-2xl font-display text-accent-gold">Tranquility Intelligence</span>
              <span className="text-[10px] text-muted-foreground font-mono mt-1">®</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
}
