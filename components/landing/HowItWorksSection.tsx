"use client";
import { useRef } from 'react';
import { motion, useScroll, useSpring, } from 'framer-motion';
import { CalendarCheck, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      icon: CalendarCheck,
      title: "Schedule kickoff",
      description: "We'll hop on a call to understand your needs and align on goals."
    },
    {
      icon: Users,
      title: "Real-time collaboration",
      description: "Invite your team and start building together in a shared workspace."
    },
    {
      icon: Rocket,
      title: "Launch and scale",
      description: "Deploy to our global edge network and watch your product grow."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8">
        
        {/* Left Sticky Panel */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            A simple, streamlined process to get you from idea to production in record time.
          </p>
          <Button variant="outline" size="lg" className="rounded-full border-lime/50 text-lime hover:bg-lime/10">
            Schedule kickoff
          </Button>
        </div>

        {/* Right Timeline */}
        <div className="w-full md:w-2/3 relative pl-8 md:pl-16">
          {/* Background Line */}
          <div className="absolute left-[39px] md:left-[71px] top-0 bottom-0 w-0.5 bg-white/10 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-[39px] md:left-[71px] top-0 bottom-0 w-0.5 bg-lime rounded-full origin-top"
            style={{ scaleY: smoothProgress }}
          />

          <div className="space-y-32 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Circle Icon Badge */}
                <div className="absolute -left-10 md:-left-20 w-12 h-12 rounded-full bg-black border-2 border-lime flex items-center justify-center z-10 text-lime shadow-[0_0_15px_rgba(168,217,70,0.3)]">
                  <step.icon className="w-5 h-5" />
                </div>
                
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
