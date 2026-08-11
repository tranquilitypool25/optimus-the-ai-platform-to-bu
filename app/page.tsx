import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ServicesSection } from "@/components/landing/services-section";
import { DifferentiatorSection } from "@/components/landing/differentiator-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { CustomerJourneySection } from "@/components/landing/customer-journey-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CustomSoftwareSection } from "@/components/landing/custom-software-section";
import { PhilosophySection } from "@/components/landing/philosophy-section";
import { FutureSection } from "@/components/landing/future-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ApplicationForm } from "@/components/landing/application-form";
import { EarthHeroSection } from "@/components/landing/earth-hero-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-obsidian">
      <Navigation />
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Services Pillars (GROW, AUTOMATE, BUILD) */}
      <ServicesSection />

      {/* 4. Differentiator */}
      <DifferentiatorSection />

      {/* 5. Benefits */}
      <BenefitsSection />

      {/* 6. Customer Journey */}
      <CustomerJourneySection />

      {/* 7. How It Works */}
      <HowItWorksSection />

      {/* 8. Custom Software */}
      <CustomSoftwareSection />

      {/* 9. Philosophy */}
      <PhilosophySection />

      {/* 10. Future */}
      <FutureSection />

      {/* 11. Projects */}
      <ProjectsSection />

      {/* 12. Security */}
      <SecuritySection />

      {/* 13. Testimonials */}
      <TestimonialsSection />

      {/* 14. Application Form */}
      <ApplicationForm />

      {/* 15. Closing & Footer */}
      <EarthHeroSection />
      <FooterSection />
    </main>
  );
}
