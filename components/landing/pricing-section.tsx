"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    description: "Essential AI automation for small businesses",
    features: [
      "Core Workflow Automation",
      "Single AI Assistant Deployment",
      "Standard Security Package",
      "Monthly Strategy Sync",
      "Email Support",
    ],
    cta: "Request Consultation",
    popular: false,
  },
  {
    name: "Growth",
    description: "Comprehensive systems for scaling companies",
    features: [
      "Multi-System Integration",
      "Custom AI Agents & Tools",
      "Advanced Infrastructure",
      "Bi-Weekly Consulting",
      "Priority 24/7 Support",
      "Internal Dashboards",
    ],
    cta: "Apply for Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale transformation for industry leaders",
    features: [
      "Everything in Growth",
      "Bespoke Software Development",
      "On-Premise AI Deployment",
      "Dedicated Strategic Lead",
      "Custom SLA & Security Audit",
      "Unlimited Integrations",
    ],
    cta: "Contact Strategy Team",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4 sm:mb-6">
            Solutions
          </span>
          <h2 className="text-section-title font-display mb-4 sm:mb-6">
            Invest in your
            <br />
            <span className="text-accent-gold">outcomes</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-xl">
            Strategic automation designed to scale your business. Choose the level of support that fits your goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-6 sm:p-8 lg:p-12 bg-background ${
                plan.popular ? "sm:col-span-2 lg:col-span-1 lg:-my-4 lg:py-12 xl:py-16 border-2 border-accent" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 sm:left-8 px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest font-medium">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-6 sm:mb-8">
                <span className="font-mono text-xs text-muted-foreground tracking-wide">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-card-title font-display text-foreground mt-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price Label */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-foreground/10">
                <span className="font-display text-2xl sm:text-3xl text-foreground">Bespoke Investment</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-all group rounded-lg sm:rounded-full ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-foreground/20 text-foreground hover:border-accent/50 hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground">
          All plans include automatic updates, HTTPS, and DDoS protection.{" "}
          <a href="#" className="underline underline-offset-4 hover:text-accent transition-colors font-sans">
            Compare all features
          </a>
        </p>
      </div>
    </section>
  );
}
