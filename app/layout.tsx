import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ForestTwin | Corporate ESG Digital Twin',
  description: 'Digital Twin Carbon Asset Dashboard for Corporate ESG.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans tracking-denim antialiased`}>
        {children}
      </body>
    </html>
  );
}
