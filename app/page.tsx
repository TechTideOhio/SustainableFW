import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'ForestTwin | Carbon Asset Intelligence',
  description:
    'See your forest. Know your carbon. Prove your impact. ForestTwin turns satellite imagery and IoT sensor data into living 3D replicas of forest assets.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'ForestTwin',
      url: 'https://digitaltwinfw.netlify.app',
      logo: 'https://digitaltwinfw.netlify.app/favicon.ico',
      description:
        'AI-powered carbon asset intelligence platform for sustainability teams.',
      parentOrganization: {
        '@type': 'Organization',
        name: 'TechTide AI',
        url: 'https://techtideai.io',
      },
      sameAs: ['https://github.com/TechTideOhio/SustainableFW'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ForestTwin',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Interactive 3D digital twin platform for corporate carbon asset management, ESG reporting, and verified credit tracking.',
      url: 'https://digitaltwinfw.netlify.app',
      offers: [
        {
          '@type': 'Offer',
          name: 'Developer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free tier with 1 forest site and basic features',
        },
        {
          '@type': 'Offer',
          name: 'Professional',
          price: '499',
          priceCurrency: 'USD',
          description: 'Pro tier with up to 25 forest sites and advanced analytics',
        },
      ],
    },
    {
      '@type': 'WebSite',
      name: 'ForestTwin',
      url: 'https://digitaltwinfw.netlify.app',
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
