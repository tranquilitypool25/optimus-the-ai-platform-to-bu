import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
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

      {/* 2. New Services Section - replacing features/connectivity */}
      <ServicesSection />

      {/* 3. Projects Section - highlighting specific apps */}
      <ProjectsSection />

      {/* 4. Security - data protection & trust */}
      <SecuritySection />

      {/* 5. Social Proof */}
      <TestimonialsSection />

      {/* 6. Application Form with new slogan */}
      <ApplicationForm />

      {/* 7. Closing & Footer */}
      <EarthHeroSection />
      <FooterSection />
    </main>
  );
}
