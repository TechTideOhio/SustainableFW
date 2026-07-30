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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-olive h-[80px] flex items-center border-b border-sage-mist/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-warm-cream text-[36px] sm:text-[46px] font-medium tracking-[0.04em] uppercase leading-none">
          ForestTwin
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
                className={`text-warm-cream uppercase tracking-[0.04em] text-sm font-normal transition-colors py-1 px-2 ${
                  isActive
                    ? 'border border-pure-white rounded-[1px]'
                    : 'hover:text-lemon-zest border border-transparent'
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
            className="text-warm-cream uppercase tracking-[0.04em] text-sm font-normal hover:text-lemon-zest transition-colors"
          >
            Sign in
          </a>
          <Button variant="default" className="rounded-[1px]">
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-warm-cream p-1 rounded-[1px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-warm-cream" /> : <Menu className="w-6 h-6 text-warm-cream" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[80px] left-0 right-0 bg-black-olive/95 backdrop-blur-md border-b border-sage-mist/20 p-6 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-warm-cream uppercase tracking-[0.04em] text-sm font-normal transition-colors py-2 px-3 ${
                      isActive
                        ? 'border border-pure-white rounded-[1px] w-fit'
                        : 'hover:text-lemon-zest'
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
            <div className="flex flex-col gap-3 pt-4 border-t border-sage-mist/20">
              <a
                href="#"
                className="text-warm-cream uppercase tracking-[0.04em] text-sm font-normal py-2 hover:text-lemon-zest transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </a>
              <Button
                variant="default"
                className="w-full rounded-[1px]"
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
