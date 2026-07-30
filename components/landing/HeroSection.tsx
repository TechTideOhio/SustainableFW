"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime/30 bg-lime/10 text-lime mb-8 text-sm font-medium"
        >
          <Star className="w-4 h-4 fill-current" />
          <span>Now Available ✦</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 max-w-4xl"
        >
          Build Faster / Ship with <span className="font-serif italic text-lime font-normal">Confidence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10"
        >
          The modern platform for teams who want to move fast without breaking things.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button size="lg" className="bg-lime text-black hover:bg-lime/90 rounded-full font-semibold px-8 h-14 text-base">
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-6xl relative perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-2xl relative bg-gradient-to-br from-zinc-900 to-black p-4 flex flex-col"
          >
            {/* Mockup Top Bar */}
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex gap-4">
                <div className="h-6 w-32 bg-white/5 rounded-md" />
                <div className="h-6 w-24 bg-white/5 rounded-md" />
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="flex-1 flex gap-4 mt-4">
              {/* Sidebar */}
              <div className="w-48 hidden md:flex flex-col gap-2">
                <div className="h-8 bg-lime/20 rounded-md border border-lime/30" />
                <div className="h-8 bg-white/5 rounded-md" />
                <div className="h-8 bg-white/5 rounded-md" />
                <div className="h-8 bg-white/5 rounded-md mt-auto" />
              </div>
              {/* Main Area */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="h-32 bg-gradient-to-r from-lime/10 to-transparent rounded-xl border border-lime/20" />
                <div className="flex-1 flex gap-4">
                  <div className="flex-[2] bg-white/5 rounded-xl" />
                  <div className="flex-[1] bg-white/5 rounded-xl" />
                </div>
              </div>
            </div>
            
            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lime/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
