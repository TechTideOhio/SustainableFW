"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 bg-black-olive">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lemon-zest text-[68px] md:text-[75px] font-normal tracking-[0.06em] leading-none mb-8 max-w-5xl"
        >
          See Your Forest. Know Your Carbon. Prove Your <span className="font-serif italic text-lemon-zest">Impact</span>.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-warm-cream text-xl font-light tracking-[0.02em] max-w-3xl mb-10"
        >
          ForestTwin turns satellite imagery and IoT sensor data into a living 3D replica of your forest assets, so every carbon credit is traceable, verifiable, and audit-ready.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button variant="default" size="lg" className="rounded-[1px] font-semibold px-8 h-14 text-base">
            Explore the Platform
          </Button>
        </motion.div>

        {/* Edge-to-edge Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-6xl"
        >
          <img 
            src="/images/carbon_dashboard.jpg" 
            alt="ForestTwin Dashboard" 
            className="w-full" 
          />
        </motion.div>

      </div>
    </section>
  );
}
