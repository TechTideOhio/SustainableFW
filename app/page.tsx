import {
  HeaderNav,
  HeroSection,
  LogoLoop,
  BlurInHeadline,
  FeaturesSection,
  TestimonialsSection,
  HowItWorksSection,
  PricingSection,
  FAQSection,
  FooterSection,
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-600 selection:text-white">
      <HeaderNav />
      <main>
        <HeroSection />
        <LogoLoop />
        <BlurInHeadline />
        <FeaturesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}
