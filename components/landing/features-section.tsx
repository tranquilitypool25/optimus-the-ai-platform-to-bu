"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "AI-First Methodology",
    description:
      "Every system we build starts with one question: how can AI make this better? Not as an afterthought — as the foundation. This means faster results, smarter workflows, and systems that keep improving over time.",
    visual: "deploy",
  },
  {
    number: "02",
    title: "Bespoke, Not Templated",
    description:
      "Your business has challenges no off-the-shelf product was built to solve. We design every solution around your specific operations, workflows, and long-term vision — never forcing you into a framework built for someone else.",
    visual: "ai",
  },
  {
    number: "03",
    title: "AI Assistants & Automation",
    description:
      "Custom-trained AI assistants that work around the clock — handling enquiries, qualifying leads, booking appointments, and supporting your team as a tireless extension of your organisation. Your business, always on.",
    visual: "collab",
  },
  {
    number: "04",
    title: "Strategic Consulting",
    description:
      "Expert guidance on digital transformation, AI strategy, and operational efficiency. We help you see the full picture, prioritise the right investments, and execute with precision — so you move faster and waste less.",
    visual: "security",
  },
];

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="40" y={35 + i * 16} width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
            <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="width" values="20;120;20" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
          </rect>
        ))}
      </g>
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 50;
        const nx = parseFloat((100 + Math.cos(angle) * radius).toFixed(4));
        const ny = parseFloat((80 + Math.sin(angle) * radius).toFixed(4));
        return (
          <g key={i}>
            <line x1="100" y1="80" x2={nx} y2={ny} stroke="currentColor" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </line>
            <circle cx={nx} cy={ny} r="6" fill="none" stroke="currentColor" strokeWidth="2">
              <animate attributeName="r" values="6;8;6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="100" cy="80" r="35" fill="none" stroke="currentColor" strokeWidth="2.5">
        <animateTransform attributeName="transform" type="rotate" values="0 100 80;360 100 80" dur="3s" repeatCount="indefinite" />
      </circle>
      <g>
        <path d="M 130 65 L 140 55 L 135 45" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <animateTransform attributeName="transform" type="rotate" values="0 100 80;360 100 80" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
      <g>
        <path d="M 70 95 L 60 105 L 65 115" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <animateTransform attributeName="transform" type="rotate" values="0 100 80;360 100 80" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
      <circle cx="100" cy="80" r="12" fill="none" stroke="currentColor" strokeWidth="2">
        <animate attributeName="r" values="12;16;12" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy": return <DeployVisual />;
    case "ai": return <AIVisual />;
    case "collab": return <CollabVisual />;
    case "security": return <SecurityVisual />;
    default: return <DeployVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
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
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 py-8 sm:py-12 lg:py-20">
        <div className="shrink-0">
          <span className="font-mono text-xs sm:text-sm text-muted-foreground tracking-wide">{feature.number}</span>
        </div>
        <div className="flex-1 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h3 className="text-card-title font-display mb-3 sm:mb-4 group-hover:translate-x-2 transition-transform duration-500 text-foreground">
              {feature.title}
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-32 h-28 sm:w-40 sm:h-36 lg:w-48 lg:h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
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

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="features"
      ref={sectionRef}
      className="relative py-8 sm:py-16 lg:py-24 -mt-8 sm:-mt-12 lg:-mt-16"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 font-sans tracking-wide">
            <span className="w-6 sm:w-8 h-px bg-accent/60" />
            Why Tranquility Intelligence
          </span>
          <h2
            className={`text-section-title font-display transition-all duration-700 space-y-2 sm:space-y-3 lg:space-y-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-foreground">We don&apos;t sell software.</div>
            <div className="text-accent-gold">We install outcomes.</div>
          </h2>
        </div>

        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
