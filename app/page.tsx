import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { EnterpriseConnectivitySection } from "@/components/landing/enterprise-connectivity-section";
import { AIIntelligenceSection } from "@/components/landing/ai-intelligence-section";
import { CustomSoftwareSection } from "@/components/landing/custom-software-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { SelectivitySection } from "@/components/landing/selectivity-section";
import { ApplicationForm } from "@/components/landing/application-form";
import { PricingSection } from "@/components/landing/pricing-section";
import { EarthHeroSection } from "@/components/landing/earth-hero-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-obsidian">
      {/* 1. Navigation */}
      <Navigation />

      {/* 2. Hero — Who are you, what do you do, who is it for */}
      <HeroSection />

      {/* 3. Why Us — methodology & differentiators */}
      <FeaturesSection />

      {/* 4. Enterprise Connectivity — integrations marquee */}
      <EnterpriseConnectivitySection />

      {/* 5. AI Capabilities */}
      <AIIntelligenceSection />

      {/* 6. Custom Software */}
      <CustomSoftwareSection />

      {/* 7. Security — build trust before pricing */}
      <SecuritySection />

      {/* 8. Social Proof — testimonials & trusted logos */}
      <TestimonialsSection />

      {/* 9. Pricing — after trust is established */}
      <PricingSection />

      {/* 10. Selectivity — exclusive partnership message */}
      <SelectivitySection />

      {/* 11. Application Form — clear next step CTA */}
      <ApplicationForm />

      {/* 12. Closing brand statement */}
      <EarthHeroSection />

      {/* 13. Footer */}
      <FooterSection />
    </main>
  );
}
