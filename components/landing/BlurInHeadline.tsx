"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = 'Sustainability leaders use ForestTwin to turn raw environmental data into verified carbon credits, combining satellite imagery with ground-truth sensors in one platform that makes every ton of COâ‚‚ traceable and audit-ready.'.split(' ');

export function BlurInHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%']
  });

  return (
    <section ref={containerRef} className="py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.2em]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            const blur = useTransform(scrollYProgress, [start, end], [8, 0]);
            
            return (
              <motion.span
                key={i}
                style={{
                  opacity,
                  filter: useTransform(blur, (v) => `blur(${v}px)`),
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
