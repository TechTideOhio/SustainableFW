import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ForestCanvas from '../3d/ForestCanvas';
import Button from './Button';

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
            Preserving Our <span className="text-green-400">Forests</span> For Future Generations
          </motion.h1>
          
          <motion.p 
            className="animate-text text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the beauty and importance of sustainable forest management through an immersive journey
          </motion.p>
          
          <motion.div 
            className="animate-text flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="#about" size="lg">
              Explore
            </Button>
            <Button href="#sustainability" variant="outline" size="lg">
              Learn More
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
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
