import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  factNumber?: string;
  factText?: string;
}

export default function ParallaxSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  factNumber,
  factText,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const factRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const textElements = textRef.current?.querySelectorAll('h2, p');
    
    if (textElements) {
      gsap.fromTo(textElements, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    if (factRef.current) {
      gsap.fromTo(factRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="min-h-screen w-full py-20 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-green-950/70" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
          <motion.div 
            ref={textRef}
            style={{ opacity }}
            className="w-full lg:w-1/2 space-y-6 z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              {description}
            </p>
            
            {(factNumber || factText) && (
              <motion.div 
                ref={factRef}
                className="bg-green-800/80 backdrop-blur-sm p-6 rounded-lg mt-8 border border-green-700/50 shadow-xl"
              >
                {factNumber && (
                  <span className="block text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    {factNumber}
                  </span>
                )}
                {factText && (
                  <p className="text-white text-lg">
                    {factText}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            style={{ y, opacity }}
            className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
