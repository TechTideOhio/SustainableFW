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
    <div className="min-h-screen bg-black-olive text-warm-cream selection:bg-lemon-zest selection:text-black-olive">
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
