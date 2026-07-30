"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeaderNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Platform', href: '#features' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
      <div className="w-full max-w-5xl rounded-full border border-border px-6 py-3 flex items-center justify-between pointer-events-auto bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
             <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="font-display font-bold text-foreground text-xl tracking-tight group-hover:text-brand-600 transition-colors">
            ForestTwin
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors">
            Sign in
          </a>
          <Button className="rounded-full h-9 px-5 font-semibold text-sm">
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-1"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 border border-border rounded-3xl p-6 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl pointer-events-auto shadow-2xl flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full rounded-full">
                Sign in
              </Button>
              <Button className="w-full rounded-full font-semibold">
                Request a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
