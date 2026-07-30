'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
}: {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number;
  decimalPlaces?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useSpring(direction === 'down' ? value : 0, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  const display = useTransform(motionValue, (current) =>
    Number(current.toFixed(decimalPlaces)).toLocaleString()
  );

  return (
    <motion.span ref={ref} className={cn('inline-block tabular-nums tracking-wider', className)}>
      {display}
    </motion.span>
  );
}
