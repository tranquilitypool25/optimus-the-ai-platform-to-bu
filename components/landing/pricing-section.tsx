"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small projects",
    price: { monthly: 0, annual: 0 },
    features: [
      "Up to 3 projects",
      "1GB storage",
      "Community support",
      "Basic analytics",
      "SSL certificates",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams and businesses",
    price: { monthly: 29, annual: 24 },
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
      "API access",
    ],
    cta: "Start trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: { monthly: null, annual: null },
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
      "Security audit",
      "Custom contracts",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4 sm:mb-6">
            Pricing
          </span>
          <h2 className="text-section-title font-display mb-4 sm:mb-6">
            Simple, transparent
            <br />
            <span className="text-accent-gold">pricing</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-xl">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <span
            className={`text-xs sm:text-sm transition-colors font-sans ${
              !isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-12 sm:w-14 h-6 sm:h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
          >
            <div
              className={`w-4 sm:w-5 h-4 sm:h-5 bg-accent rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-xs sm:text-sm transition-colors font-sans ${
              isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Annual
          </span>
          {isAnnual && (
            <span className="ml-auto sm:ml-2 px-2 sm:px-3 py-1 bg-accent text-accent-foreground text-xs font-mono font-medium">
              Save 17%
            </span>
          )}
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

              {/* Price */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-foreground/10">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tabular-nums">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <span className="font-display text-3xl sm:text-4xl text-foreground">Custom</span>
                )}
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
