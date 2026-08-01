"use client";
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CalendarCheck, Activity, FileCheck } from 'lucide-react';
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
      title: "Connect your data sources",
      description: "Link satellite feeds, IoT sensors, and field survey data. ForestTwin ingests and normalizes everything automatically."
    },
    {
      icon: Activity,
      title: "Monitor and simulate",
      description: "Watch your 3D digital twin update in real time. Run climate scenarios to project carbon yields under different conditions."
    },
    {
      icon: FileCheck,
      title: "Verify and report",
      description: "Export audit-ready carbon ledgers, generate compliance reports, and submit credits to registries like Verra and Gold Standard."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8">
        
        {/* Left Sticky Panel */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Three steps from raw data to verified carbon credits.
          </p>
          <Button variant="outline" size="lg" className="rounded-full mb-12 group">
            Book a Walkthrough
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-2">
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='2'><path d='M3 8h10M9 4l4 4-4 4'/></svg>
            </span>
          </Button>
          <div className="hidden md:block w-full aspect-video rounded-xl border border-border shadow-sm overflow-hidden relative">
            <img 
              src="/images/data_integration.jpg" 
              alt="Data Integration Visualization" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-700 ease-out" 
            />
          </div>
        </div>

        {/* Right Timeline */}
        <div className="w-full md:w-2/3">
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                className="flex gap-6 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Timeline column: badge + line segment */}
                <div className="relative flex flex-col items-center shrink-0">
                  {/* Circular Badge */}
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-brand-600 text-brand-600 flex items-center justify-center z-10 shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  {/* Line extending down from badge (hidden on last item) */}
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-0 relative overflow-hidden">
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-full bg-brand-600 origin-top"
                        style={{ scaleY: smoothProgress }}
                      />
                    </div>
                  )}
                </div>

                {/* Content column */}
                <div className="pt-2 pb-4 min-w-0">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
