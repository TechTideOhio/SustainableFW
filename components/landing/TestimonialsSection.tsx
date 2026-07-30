"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Circular has completely transformed how our team collaborates. The speed at which we can ship new features is unprecedented.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    company: "TechFlow"
  },
  {
    quote: "The lime accent isn't just a color, it's a lifestyle. But seriously, the unified system drives continuous improvement seamlessly.",
    author: "Michael Chang",
    role: "VP Engineering, Innovate",
    company: "Innovate"
  },
  {
    quote: "We've reduced our time-to-market by 40% since switching. The guided onboarding is the best in the industry.",
    author: "Elena Rodriguez",
    role: "Product Lead, Nexus",
    company: "Nexus"
  },
  {
    quote: "Scale without the headaches. It just works, and the metrics prove it. A must-have for modern development teams.",
    author: "David Kim",
    role: "CEO, StartupX",
    company: "StartupX"
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
