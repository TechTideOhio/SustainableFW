"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 bg-background">

      {/* Ambient Floating Orbs */}
      <div className="absolute top-1/4 left-[20%] w-[300px] h-[300px] bg-brand-600 rounded-full blur-[80px] opacity-[0.08] animate-[float-1_12s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute top-1/3 right-[20%] w-[350px] h-[350px] bg-brand-600 rounded-full blur-[80px] opacity-[0.10] animate-[float-2_15s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[40%] w-[250px] h-[250px] bg-brand-600 rounded-full blur-[80px] opacity-[0.12] animate-[float-3_10s_ease-in-out_infinite] pointer-events-none" />

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
          <span className="relative inline-flex items-center gap-2 rounded-full border border-brand-600/30 bg-background/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-brand-600 shadow-sm overflow-hidden group cursor-default">
            <span className="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-brand-600/10 to-transparent" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="relative">Live Carbon Intelligence</span>
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
          <Button variant="default" size="lg" className="group rounded-full px-8 h-12 text-base transition-all duration-200 ease-out active:scale-[0.97] glow-brand">
            Explore the Platform
            <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
          <Button variant="ghost" size="lg" className="group rounded-full px-8 h-12 text-base transition-all duration-200 ease-out active:scale-[0.97]">
            <svg className="mr-2 w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Demo
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
