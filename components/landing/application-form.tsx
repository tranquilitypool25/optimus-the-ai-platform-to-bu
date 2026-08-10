"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to Supabase
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 lg:py-32 bg-obsidian text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-gold-hairline mb-8">
            <CheckCircle2 className="w-10 h-10 text-accent-gold" />
          </div>
          <h2 className="text-4xl font-display mb-6">Thank you.</h2>
          <p className="text-xl text-muted-foreground mb-4">Your application has been received.</p>
          <p className="text-muted-foreground leading-relaxed">
            Every enquiry is personally reviewed. If we believe we're the right fit, we'll contact you within 2 business days to arrange a discovery consultation.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-obsidian">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-block px-4 py-1 border border-gold-hairline mb-6">
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-accent-gold">Priority Access Application</span>
          </div>
          <h2 className="text-section-title font-display mb-8 leading-tight">Tell us about<br /><span className="text-accent-gold">your business.</span></h2>
          <div className="w-20 h-px bg-gold-hairline mx-auto mb-10" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Complete the application below. Every submission is personally reviewed — if we believe we&apos;re the right fit, we&apos;ll be in touch within 48 hours to arrange a discovery consultation.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className={`relative z-10 space-y-12 sm:space-y-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          {/* Section 01: About You */}
          <div className="space-y-8 p-6 sm:p-10 border border-navy-border bg-deep-navy/30 rounded-lg">
            <div>
              <p className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-accent-gold mb-2">Section 01</p>
              <h3 className="text-2xl sm:text-3xl font-display text-warm-white">About You</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                <Input id="name" required placeholder="Your full name" className="bg-transparent border-navy-border focus:border-accent-gold h-12 text-warm-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                <Input id="email" type="email" required placeholder="your@email.com" className="bg-transparent border-navy-border focus:border-accent-gold h-12 text-warm-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number *</Label>
                <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="bg-transparent border-navy-border focus:border-accent-gold h-12 text-warm-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground">Company Name *</Label>
                <Input id="company" required placeholder="Your company" className="bg-transparent border-navy-border focus:border-accent-gold h-12 text-warm-white" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="position" className="text-xs uppercase tracking-wider text-muted-foreground">Your Position *</Label>
                <Input id="position" required placeholder="CEO, Founder, Operations Manager..." className="bg-transparent border-navy-border focus:border-accent-gold h-12 text-warm-white" />
              </div>
            </div>
          </div>

          {/* Section 02: About Your Business */}
          <div className="space-y-8 p-6 sm:p-10 border border-navy-border bg-deep-navy/30 rounded-lg">
            <div>
              <p className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-accent-gold mb-2">Section 02</p>
              <h3 className="text-2xl sm:text-3xl font-display text-warm-white">About Your Business</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">What industry do you operate in? *</Label>
                <Select required>
                  <SelectTrigger className="bg-transparent border-navy-border h-12 text-warm-white">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-navy border-navy-border text-warm-white">
                    <SelectItem value="tech">Technology / SaaS</SelectItem>
                    <SelectItem value="finance">Finance / Real Estate</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="ecommerce">E-commerce / Retail</SelectItem>
                    <SelectItem value="professional">Professional Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Approximately how many employees? *</Label>
                <RadioGroup defaultValue="1-5" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {["1–5", "6–20", "21–50", "51+"].map((size) => (
                    <div key={size} className="flex items-center space-x-2 border border-navy-border p-3 rounded-md hover:border-accent-gold transition-colors">
                      <RadioGroupItem value={size} id={`size-${size}`} className="border-accent-gold text-accent-gold" />
                      <Label htmlFor={`size-${size}`} className="text-sm text-warm-white cursor-pointer">{size}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges" className="text-xs uppercase tracking-wider text-muted-foreground">What challenges are preventing growth? *</Label>
                <Textarea id="challenges" required placeholder="Describe your current bottlenecks..." className="bg-transparent border-navy-border focus:border-accent-gold min-h-[120px] text-warm-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem" className="text-xs uppercase tracking-wider text-muted-foreground">If you could solve one major problem today, what would it be? *</Label>
                <Textarea id="problem" required placeholder="The single biggest issue..." className="bg-transparent border-navy-border focus:border-accent-gold min-h-[100px] text-warm-white" />
              </div>
            </div>
          </div>

          {/* Section 03: Goals & Investment */}
          <div className="space-y-8 p-6 sm:p-10 border border-navy-border bg-deep-navy/30 rounded-lg">
            <div>
              <p className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-accent-gold mb-2">Section 03</p>
              <h3 className="text-2xl sm:text-3xl font-display text-warm-white">Goals & Investment</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Which areas would you like to improve? (Select all that apply)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["AI", "Automation", "Websites", "Booking Systems", "CRM", "Internal Processes", "Marketing", "Reporting"].map((service) => (
                    <div key={service} className="flex items-center space-x-3 space-y-0">
                      <Checkbox id={service} className="border-accent-gold data-[state=checked]:bg-accent-gold" />
                      <Label htmlFor={service} className="text-sm text-warm-white font-normal cursor-pointer">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">How soon are you looking to begin? *</Label>
                <RadioGroup defaultValue="30-days" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Immediately", "Within 30 days", "1–3 months", "Just exploring"].map((time) => (
                    <div key={time} className="flex items-center space-x-2 border border-navy-border p-3 rounded-md hover:border-accent-gold transition-colors">
                      <RadioGroupItem value={time} id={`time-${time}`} className="border-accent-gold text-accent-gold" />
                      <Label htmlFor={`time-${time}`} className="text-sm text-warm-white cursor-pointer">{time}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Estimated investment *</Label>
                <RadioGroup defaultValue="5k-10k" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Under €2,000", "€2,000–5,000", "€5,000–10,000", "€10,000+"].map((budget) => (
                    <div key={budget} className="flex items-center space-x-2 border border-navy-border p-3 rounded-md hover:border-accent-gold transition-colors">
                      <RadioGroupItem value={budget} id={`budget-${budget}`} className="border-accent-gold text-accent-gold" />
                      <Label htmlFor={`budget-${budget}`} className="text-sm text-warm-white cursor-pointer">{budget}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-muted-foreground">Anything else you'd like us to know?</Label>
                <Textarea id="notes" placeholder="Additional context..." className="bg-transparent border-navy-border focus:border-accent-gold min-h-[80px] text-warm-white" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-12 h-14 text-base rounded-full font-sans font-bold transition-all duration-300 group"
            >
              {isLoading ? "Processing..." : "Submit Application"}
              {!isLoading && <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />}
            </Button>
          </div>
          
          <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest">
            Secure submission • personally reviewed within 48 hours
          </p>
        </form>
      </div>
    </section>
  );
}
