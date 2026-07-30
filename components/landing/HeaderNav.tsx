"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeaderNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Products', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
      <div className="w-full max-w-5xl rounded-full glass-panel border border-white/10 px-6 py-3 flex items-center justify-between pointer-events-auto bg-black/40 backdrop-blur-md">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center">
             <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="font-display font-bold text-white text-xl tracking-tight group-hover:text-lime transition-colors">
            Circular
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-white hover:text-lime transition-colors">
            Sign in
          </a>
          <Button className="bg-lime text-black hover:bg-lime/90 rounded-full h-9 px-5 font-semibold text-sm">
            Try for free
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-1"
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
            className="absolute top-20 left-4 right-4 glass-panel border border-white/10 rounded-3xl p-6 bg-black/80 backdrop-blur-xl pointer-events-auto shadow-2xl flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Button variant="outline" className="w-full rounded-full border-white/20 text-white">
                Sign in
              </Button>
              <Button className="w-full bg-lime text-black hover:bg-lime/90 rounded-full font-semibold">
                Try for free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
