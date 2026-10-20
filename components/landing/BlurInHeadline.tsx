"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const words = 'Sustainability leaders use ForestTwin to turn raw environmental data into verified carbon credits, combining satellite imagery with ground-truth sensors in one platform that makes every ton of CO₂ traceable and audit-ready.'.split(' ');

function HeadlineWord({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) {
  const start = index / words.length;
  const end = start + 1 / words.length;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const blur = useTransform(progress, [start, end], [8, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);
  return <motion.span style={{ opacity, filter }} className="inline-block">{word}</motion.span>;
}

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
          {words.map((word, index) => <HeadlineWord key={index} word={word} index={index} progress={scrollYProgress} />)}
        </h2>
      </div>
    </section>
  );
}
