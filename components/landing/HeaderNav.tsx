"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Platform');

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isMobileMenuOpen]);

  const links = [
    { label: 'Platform', href: '#features' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border transition-all duration-200 ease-out">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <a href="https://digitaltwinfw.netlify.app/" className="flex items-center gap-3 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
          <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-105">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-foreground font-display font-bold text-xl">
            ForestTwin
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-medium transition-all duration-200 ease-out py-1 px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'text-foreground font-semibold bg-muted'
                    : 'text-slate-600 dark:text-slate-400 hover:text-foreground link-underline'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/TechTideOhio/SustainableFW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-all duration-200 ease-out active:scale-[0.96] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 flex items-center justify-center p-2"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://digitaltwinfw.netlify.app/"
            className="text-slate-600 dark:text-slate-300 hover:text-brand-600 text-sm font-medium transition-all duration-200 ease-out active:brightness-95 link-underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Sign in
          </a>
          <Button variant="default" className="rounded-full transition-all duration-200 ease-out active:scale-[0.97]">
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-600 dark:text-slate-300 hover:text-foreground p-2.5 rounded-lg transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[80px] left-0 right-0 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-border p-6 flex flex-col gap-6 md:hidden shadow-md max-h-[calc(100dvh-80px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-slate-600 dark:text-slate-300 text-base font-medium transition-all duration-200 ease-out py-3 px-4 rounded-lg active:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                      isActive
                        ? 'text-foreground font-semibold bg-muted'
                        : 'hover:text-foreground link-underline'
                    }`}
                    onClick={() => {
                      setActiveLink(link.label);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="https://digitaltwinfw.netlify.app/"
                className="text-slate-600 dark:text-slate-300 hover:text-brand-600 text-base font-medium py-3 px-4 transition-all duration-200 ease-out active:brightness-95 active:bg-muted/50 link-underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </a>
              <Button
                variant="default"
                size="lg"
                className="w-full rounded-full transition-all duration-200 ease-out active:scale-[0.97]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
