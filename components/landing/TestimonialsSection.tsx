"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "ForestTwin replaced our quarterly PDF reports with a live dashboard our board actually uses. Carbon credit verification went from weeks to hours.",
    author: "Dr. Sarah Lindström",
    role: "Head of Sustainability, NordicTimber",
    company: "NordicTimber"
  },
  {
    quote: "We monitor 400,000 hectares across three continents. ForestTwin is the only platform that gives us a single, consistent view of every asset.",
    author: "Raj Patel",
    role: "VP Carbon Markets, GreenVault Capital",
    company: "GreenVault"
  },
  {
    quote: "The scenario simulator let us model drought risk before it hit. We adjusted our offset portfolio and saved our clients millions in credit value.",
    author: "Elena Vasquez",
    role: "Director of Climate Risk, Meridian Re",
    company: "Meridian Re"
  },
  {
    quote: "Audit preparation used to take our team two full weeks. With ForestTwin, the data is already organized, verified, and ready to export.",
    author: "James Okafor",
    role: "ESG Compliance Lead, AfriCarbon",
    company: "AfriCarbon"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % testimonials.length);
          return 0;
        }
        return prev + 1; // 100 steps over 10 seconds = 100ms per step
      });
    }, 100);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-elevated/30">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Avatars */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {testimonials.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className="relative group focus:outline-none"
                aria-label={`View testimonial ${index + 1}`}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full bg-zinc-800 border-2 overflow-hidden transition-colors relative z-10",
                  isActive ? "border-transparent" : "border-white/10 group-hover:border-white/30"
                )}>
                  {/* Avatar Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xl font-bold text-white/50">
                    {testimonials[index].author.charAt(0)}
                  </div>
                </div>
                
                {/* Progress Ring */}
                {isActive && (
                  <svg className="absolute -inset-1 w-[72px] h-[72px] z-0 -rotate-90">
                    <circle
                      cx="36"
                      cy="36"
                      r="34"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="36"
                      cy="36"
                      r="34"
                      fill="none"
                      stroke="#a8d946" // lime
                      strokeWidth="2"
                      strokeDasharray="213.6" // 2 * PI * 34
                      strokeDashoffset={213.6 - (213.6 * progress) / 100}
                      className="transition-all duration-100 ease-linear"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        {/* Quote */}
        <div className="min-h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white mb-8 leading-snug">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="text-zinc-400">
                <span className="font-semibold text-white">{testimonials[activeIndex].author}</span>
                <span className="mx-2 text-zinc-600">|</span>
                <span>{testimonials[activeIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Logo Row */}
        <div className="mt-16 flex justify-center gap-8 md:gap-16 opacity-50">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={cn(
                "font-display font-bold text-lg md:text-xl transition-colors duration-500",
                i === activeIndex ? "text-lime opacity-100" : "text-zinc-500 grayscale"
              )}
            >
              {t.company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
