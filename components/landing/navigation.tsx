"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Solutions", href: "#services" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#philosophy" },
  { name: "Insights", href: "#" },
  { name: "Contact", href: "#apply" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${isScrolled ? "top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4" : "top-0 left-0 right-0"}`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-card/90 backdrop-blur-xl border border-border/30 rounded-xl sm:rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 ${isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"}`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8">
              <Image 
                src="/icon.svg" 
                alt="NEXORA Monogram" 
                fill 
                className="object-contain invert dark:invert-0"
              />
            </div>
            <span className={`font-display font-normal tracking-tight transition-all duration-500 text-foreground ${isScrolled ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"}`}>
              NEXORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            <Button
              size="sm"
              className={`bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all duration-500 font-sans font-medium ${isScrolled ? "px-3 lg:px-4 h-8 text-xs" : "px-4 lg:px-6 h-9 text-sm"}`}
              onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-4 sm:px-6 pt-20 sm:pt-28 pb-6 sm:pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-5xl font-display text-foreground hover:text-accent transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              className="flex-1 bg-accent text-accent-foreground rounded-lg sm:rounded-full h-12 sm:h-14 text-sm sm:text-base font-sans font-medium hover:bg-accent/90 transition-all duration-300"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
