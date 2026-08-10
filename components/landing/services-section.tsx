"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "AI Receptionist & Customer Communication",
    description: "Never miss another opportunity. AI voice and chat agents answer enquiries, qualify leads, respond to common questions and book appointments — 24/7.",
    tags: "AI Voice · Website Chat · WhatsApp · Social Messaging · Missed-Call Text-Back"
  },
  {
    number: "02",
    title: "Lead Generation & Automated Follow-Up",
    description: "Turn more enquiries into customers with high-converting landing pages, funnels and intelligent follow-up sequences that respond within seconds and keep leads moving.",
    tags: "Landing Pages · Lead Capture · SMS & WhatsApp Follow-Up · Email Automation · Database Reactivation"
  },
  {
    number: "03",
    title: "CRM & Sales Automation",
    description: "Keep every lead, conversation and opportunity organised in one connected system — with pipelines and workflows designed around the way your business operates.",
    tags: "CRM · Sales Pipelines · Unified Inbox · Lead Routing · Automated Workflows"
  },
  {
    number: "04",
    title: "Bookings, Payments & Client Experience",
    description: "Make it easier for customers to do business with you — from booking an appointment to receiving reminders, proposals, invoices and making payments.",
    tags: "Online Booking · Reminders · Payments · Invoicing · Proposals · Client Portals"
  },
  {
    number: "05",
    title: "Social Media Reputation & Marketing",
    description: "Build your online presence and stay connected with customers through automated reviews, campaigns and consistent branded content.",
    tags: "Google Reviews · Email & SMS Campaigns · Social Media Scheduling · AI Content Creation"
  },
  {
    number: "06",
    title: "Websites & Business Platforms",
    description: "We build modern, mobile-first websites and custom business systems designed to connect your operations, customers and workflows in one place.",
    tags: "Websites · Landing Pages · Dashboards · Reporting · Custom Business Automation"
  }
];

function TypewriterTitle({ title, isVisible }: { title: string; isVisible: boolean }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isVisible && index < title.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + title[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, index, title]);

  return (
    <h3 className="text-xl sm:text-2xl font-display mb-3 sm:mb-4 text-foreground">
      {text}
      {isVisible && index < title.length && (
        <span className="ml-1 inline-block w-1 h-6 sm:h-8 bg-accent-gold animate-pulse align-middle" />
      )}
    </h3>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-4 py-8 sm:py-12">
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="font-mono text-xs sm:text-sm text-accent-gold shrink-0 mt-1">{service.number}</span>
          <div className="flex-1">
            <TypewriterTitle title={service.title} isVisible={isVisible} />
            <p className="text-body text-muted-foreground leading-relaxed mb-4 max-w-3xl">
              {service.description}
            </p>
            <p className="text-xs sm:text-sm font-mono text-accent-gold/80 tracking-wide uppercase">
              {service.tags}
            </p>
          </div>
        </div>
      </div>
      {/* Animated separator line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/10" />
      <div 
        className="absolute bottom-0 left-0 h-px bg-accent-gold transition-[width] duration-1000 ease-out z-10"
        style={{ 
          width: isVisible ? "100%" : "0%",
          transitionDelay: `${index * 150}ms` 
        }}
      />
    </div>
  );
}

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="services" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-obsidian">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6 tracking-widest uppercase">
            <span className="relative w-8 sm:w-12 h-px bg-foreground/10 overflow-hidden">
              <span 
                className="absolute inset-0 bg-accent-gold transition-[transform] duration-1000 ease-out origin-left"
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '200ms' }}
              />
            </span>
            Our Expertise
          </span>
          <h2 className="text-section-title font-display mb-6 leading-tight max-w-4xl">
            Intelligent Systems Built Around<br />
            <span className="text-accent-gold">Your Business.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We design, build and manage intelligent systems that help businesses capture more leads, automate repetitive work and deliver a better customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
