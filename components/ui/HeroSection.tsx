"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import ForestCanvas from '../3d/ForestCanvas';
import { Button } from './button';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      textRef.current.querySelectorAll('.animate-text'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1 },
      0.5
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* 3D Forest Background */}
      <div className="absolute inset-0 -z-10">
        <ForestCanvas />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
        <div ref={textRef} className="max-w-4xl text-center">
          <motion.h1 
            className="animate-text text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Forest Assets, <span className="text-green-400">Reimagined</span>
          </motion.h1>
          
          <motion.p 
            className="animate-text text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real-time Digital Twin monitoring for corporate carbon portfolios
          </motion.p>
          
          <motion.div 
            className="animate-text flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg">
              <Link href="/dashboard">Enter Dashboard</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">View Demo</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
