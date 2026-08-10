"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  "Microsoft 365",
  "Outlook",
  "Teams",
  "Google Workspace",
  "Gmail",
  "Google Calendar",
  "WhatsApp",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "Stripe",
  "PayPal",
  "Shopify",
  "WooCommerce",
  "Xero",
  "QuickBooks",
  "Zoom",
  "Calendly",
  "Slack",
  "Mailchimp",
  "Google Drive",
  "Dropbox",
  "OneDrive",
  "WordPress",
];

export function EnterpriseConnectivitySection() {
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
    <section id="enterprise-connectivity" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
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
            Enterprise Connectivity
            <span className="relative w-8 sm:w-12 h-px bg-foreground/10 overflow-hidden">
              <span 
                className="absolute inset-0 bg-accent-gold transition-transform duration-1000 ease-out"
                style={{ transform: isVisible ? 'translateX(0)' : 'translateX(100%)', transitionDelay: '200ms' }}
              />
            </span>
          </span>
          <h2 className="text-section-title font-display mb-6 sm:mb-8 leading-tight">
            Connected to the world's
            <br />
            <span className="text-accent-gold">leading business platforms.</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From communication and finance to marketing, scheduling and AI, we build intelligent systems that work seamlessly with the tools your business already relies on.
          </p>
        </div>
      </div>

      {/* Scrolling logos marquee */}
      <div className="w-full mb-8 sm:mb-12 overflow-hidden">
        <div className="flex gap-6 sm:gap-8 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 sm:gap-8 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration}-${setIndex}`}
                  className="shrink-0 px-4 sm:px-6 py-3 sm:py-4 border rounded-lg transition-all duration-300 group hover:shadow-lg"
                  style={{
                    borderColor: 'var(--navy-border)',
                    backgroundColor: 'rgba(13, 27, 42, 0.5)',
                  }}
                >
                  <div className="text-xs sm:text-sm font-sans font-medium text-warm-white whitespace-nowrap group-hover:text-accent-gold transition-colors">
                    {integration}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer text */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          …and hundreds of other business applications available through our intelligent integration ecosystem.
        </p>
      </div>
    </section>
  );
}
