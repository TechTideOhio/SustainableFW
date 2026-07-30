import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'ForestTwin | Carbon Asset Intelligence',
  description: 'Interactive 3D digital twin platform for corporate carbon asset management, ESG reporting, and verified credit tracking.',
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
