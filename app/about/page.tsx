import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'ForestTwin is the carbon asset intelligence platform built by TechTide AI. Learn about our mission, values, and the team behind verifiable carbon credit technology.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
