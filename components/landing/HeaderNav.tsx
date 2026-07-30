"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeaderNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Platform');

  const links = [
    { label: 'Platform', href: '#features' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border transition-all duration-200 ease-out">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
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
                className={`text-sm font-medium transition-all duration-200 ease-out py-1 px-3 rounded-lg ${
                  isActive
                    ? 'text-foreground font-semibold bg-muted'
                    : 'text-slate-600 dark:text-slate-400 hover:text-foreground'
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
            href="#"
            className="text-slate-600 dark:text-slate-300 hover:text-brand-600 text-sm font-medium transition-all duration-200 ease-out active:brightness-95"
          >
            Sign in
          </a>
          <Button variant="default" className="rounded-full transition-all duration-200 ease-out active:scale-[0.97]">
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-600 dark:text-slate-300 hover:text-foreground p-2 rounded-lg transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="absolute top-[80px] left-0 right-0 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-border p-6 flex flex-col gap-6 md:hidden shadow-md"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-slate-600 dark:text-slate-300 text-sm font-medium transition-all duration-200 ease-out py-2 px-3 rounded-lg ${
                      isActive
                        ? 'text-foreground font-semibold bg-muted'
                        : 'hover:text-foreground'
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
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-brand-600 text-sm font-medium py-2 px-3 transition-all duration-200 ease-out active:brightness-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </a>
              <Button
                variant="default"
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
