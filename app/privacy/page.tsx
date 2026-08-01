import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'ForestTwin privacy policy. Learn how we collect, use, and protect your data and environmental information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
