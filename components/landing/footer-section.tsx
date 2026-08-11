"use client";

import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Solutions: [
    { name: "Growth Systems", href: "#services" },
    { name: "Business Automation", href: "#services" },
    { name: "Custom Software", href: "#custom-software" },
    { name: "Strategic Consulting", href: "#philosophy" },
  ],
  Company: [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#philosophy" },
    { name: "Insights", href: "#" },
    { name: "Contact", href: "#apply" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security Overview", href: "#security" },
  ],
};

export function FooterSection() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-obsidian border-t border-foreground/5 overflow-hidden">
      {/* Animated wave background - PRESERVED */}
      <div className="absolute inset-0 h-48 sm:h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="py-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Info */}
            <div className="col-span-2 space-y-8">
              <a href="#" className="flex items-center gap-2 group">
                <div className="relative w-8 h-8">
                  <Image 
                    src="/icon.svg" 
                    alt="NEXORA Monogram" 
                    fill 
                    className="object-contain invert dark:invert-0"
                  />
                </div>
                <span className="font-display text-2xl text-foreground tracking-tight">NEXORA</span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Intelligent systems, automation and software for ambitious businesses.
              </p>
              <div className="flex items-center gap-6">
                {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="text-muted-foreground hover:text-accent-gold transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display text-lg text-foreground mb-8">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent-gold transition-colors inline-flex items-center gap-1 group font-sans"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            © {currentYear} NEXORA. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl text-accent-gold tracking-widest uppercase">Build For Tomorrow.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
