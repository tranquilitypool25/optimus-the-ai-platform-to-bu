import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { EnterpriseConnectivitySection } from "@/components/landing/enterprise-connectivity-section";
import { AIIntelligenceSection } from "@/components/landing/ai-intelligence-section";
import { CustomSoftwareSection } from "@/components/landing/custom-software-section";
import { SelectivitySection } from "@/components/landing/selectivity-section";
import { ApplicationForm } from "@/components/landing/application-form";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { EarthHeroSection } from "@/components/landing/earth-hero-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-obsidian">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <EnterpriseConnectivitySection />
      <AIIntelligenceSection />
      <CustomSoftwareSection />
      <SelectivitySection />
      <ApplicationForm />
      <IntegrationsSection />
      <SecuritySection />
      <TestimonialsSection />
      <PricingSection />
      <EarthHeroSection />
      <FooterSection />
    </main>
  );
}
