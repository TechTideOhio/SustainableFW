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
    <div className="min-h-screen bg-app font-body text-white selection:bg-lime selection:text-black">
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
