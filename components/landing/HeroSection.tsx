"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="border border-brand-600/30 bg-brand-50 dark:bg-brand-600/10 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2">
            AI-Powered Forest Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-foreground text-5xl md:text-6xl font-display font-bold mb-8 max-w-5xl tracking-tight leading-tight"
        >
          See Your Forest. Know Your Carbon. Prove Your <span className="font-serif italic text-brand-600">Impact</span>.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="text-muted-foreground text-lg max-w-2xl mb-10 font-normal"
        >
          ForestTwin turns satellite imagery and IoT sensor data into a living 3D replica of your forest assets, so every carbon credit is traceable, verifiable, and audit-ready.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button variant="default" size="lg" className="rounded-full px-8 h-12 text-base transition-all duration-200 ease-out active:scale-[0.97] glow-brand">
            Explore the Platform
          </Button>
        </motion.div>

        {/* Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="w-full max-w-5xl border border-border bg-card rounded-xl shadow-md overflow-hidden"
        >
          {/* Fake Browser Chrome */}
          <div className="flex items-center px-4 py-3 border-b border-border bg-muted/50 gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="mx-auto bg-muted px-4 py-1 rounded-md text-xs text-muted-foreground font-mono max-w-xs truncate">
              app.foresttwin.io/dashboard
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/images/carbon_dashboard.jpg" 
              alt="ForestTwin Dashboard" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
