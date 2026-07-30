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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warm-cream">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-sm font-semibold uppercase text-black-olive tracking-[0.04em] mb-12">
          Client Testimonials
        </h2>

        {/* Avatars */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {testimonials.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-ink focus-visible:ring-offset-2 rounded-[1px] transition-all duration-200 ease-out active:scale-[0.97]"
                aria-label={`View testimonial ${index + 1}`}
              >
                <div className={cn(
                  "w-16 h-16 rounded-[1px] bg-forest-ink border-2 overflow-hidden transition-all duration-200 ease-out relative z-10",
                  isActive ? "border-lemon-zest" : "border-sage-mist group-hover:border-forest-ink"
                )}>
                  {/* Avatar Placeholder */}
                  <div className="w-full h-full bg-forest-ink flex items-center justify-center text-xl font-bold text-warm-cream/50">
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
                      stroke="rgba(219,226,220,0.4)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="36"
                      cy="36"
                      r="34"
                      fill="none"
                      stroke="#f7ea48"
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
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-black-olive mb-8 leading-snug tracking-[0.02em]">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="text-forest-ink">
                <span className="font-semibold text-black-olive tracking-[0.02em]">{testimonials[activeIndex].author}</span>
                <span className="mx-2 text-sage-mist">|</span>
                <span className="text-forest-ink tracking-[0.02em]">{testimonials[activeIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={cn(
                "h-2 rounded-[1px] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-forest-ink",
                i === activeIndex ? "w-8 bg-lemon-zest" : "w-2 bg-sage-mist hover:bg-forest-ink/40"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Logo Row */}
        <div className="mt-12 flex justify-center gap-8 md:gap-16 opacity-70">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={cn(
                "font-display font-bold text-lg md:text-xl transition-colors duration-500 tracking-[0.04em]",
                i === activeIndex ? "text-black-olive opacity-100 font-bold" : "text-forest-ink/50 grayscale"
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
