import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    });

    let frame: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame((time) => {
      setLenis(lenisInstance);
      raf(time);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenisInstance.destroy();
    };
  }, []);

  return lenis;
};
