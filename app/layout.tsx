import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const siteUrl = 'https://digitaltwinfw.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ForestTwin | Carbon Asset Intelligence',
    template: '%s | ForestTwin',
  },
  description:
    'Interactive 3D digital twin platform for corporate carbon asset management, ESG reporting, and verified credit tracking. Built by TechTide AI.',
  applicationName: 'ForestTwin',
  authors: [{ name: 'TechTide AI', url: 'https://techtideai.io' }],
  creator: 'TechTide AI',
  publisher: 'TechTide AI',
  keywords: [
    'digital twin',
    'carbon credits',
    'ESG reporting',
    'forest management',
    'carbon asset intelligence',
    'sustainability',
    'climate tech',
    'IoT sensors',
    'satellite imagery',
    '3D visualization',
    'carbon verification',
    'Verra',
    'Gold Standard',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ForestTwin',
    title: 'ForestTwin | Carbon Asset Intelligence',
    description:
      'Interactive 3D digital twin platform for corporate carbon asset management, ESG reporting, and verified credit tracking.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ForestTwin — AI-Powered Carbon Asset Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForestTwin | Carbon Asset Intelligence',
    description:
      'Interactive 3D digital twin platform for corporate carbon asset management, ESG reporting, and verified credit tracking.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'technology',
} as any;

export const viewport: Viewport = {
  themeColor: '#3b5bdb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-[100dvh]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
