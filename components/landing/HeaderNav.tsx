"use client";

import { usePathname } from 'next/navigation';
import PillNav from '@/components/ui/PillNav';
import { Button } from '@/components/ui/button';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const links = [
    { label: 'Platform', href: isHome ? '#features' : '/#features' },
    { label: 'Case Studies', href: isHome ? '#testimonials' : '/#testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { label: 'GitHub', href: 'https://github.com/TechTideOhio/SustainableFW' },
    { label: 'Sign in', href: 'https://digitaltwinfw.netlify.app/' },
    { label: 'Request Demo', href: 'https://digitaltwinfw.netlify.app/' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-[99] flex justify-center w-full pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          logo="/images/foresttwin-logo.jpg"
          logoAlt="ForestTwin Logo"
          items={links}
          activeHref={pathname}
          baseColor="hsl(var(--background))"
          pillColor="var(--brand-600)"
          hoveredPillTextColor="#ffffff"
          pillTextColor="hsl(var(--foreground))"
          className="shadow-2xl border border-border rounded-full"
        />
      </div>
    </header>
  );
}
