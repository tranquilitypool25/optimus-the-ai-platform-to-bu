"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "AI Automation", href: "#features" },
    { name: "Custom Software", href: "#custom-software" },
    { name: "Strategic Consulting", href: "#features" },
    { name: "Security & Infrastructure", href: "#security" },
  ],
  Company: [
    { name: "About Us", href: "#features" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Contact", href: "#apply" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security Overview", href: "#security" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background - PRESERVED */}
      <div className="absolute inset-0 h-48 sm:h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-display text-accent-gold">Tranquility</span>
                <span className="text-accent-gold font-display text-xl sm:text-2xl">Intelligence</span>
                <span className="text-xs text-muted-foreground font-mono">TM</span>
              </a>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-xs">
                Transforming business through intelligent automation and strategic consulting.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 sm:gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 group font-sans"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-warm-white tracking-wide">{title}</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 font-sans"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded-full font-medium">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground font-sans">
            © 2026 Tranquility Intelligence. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
