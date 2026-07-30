"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What data sources does ForestTwin support?",
    answer: "ForestTwin ingests data from major satellite providers (Sentinel, Landsat, Planet), IoT sensor networks, drone surveys, and manual field assessments. Our API also accepts custom data feeds in standard geospatial formats."
  },
  {
    question: "How does carbon credit verification work?",
    answer: "ForestTwin cross-references your sensor and satellite data against baseline models to calculate net sequestration. The platform generates audit-ready documentation compatible with Verra VCS, Gold Standard, and other major registries."
  },
  {
    question: "Can I run climate risk scenarios?",
    answer: "Yes. The scenario simulator lets you model temperature changes, drought severity, deforestation rates, and fire risk across your portfolio. Results update your projected carbon yields in real time."
  },
  {
    question: "Is my data secure?",
    answer: "ForestTwin is SOC 2 Type II compliant and uses end-to-end encryption for data in transit and at rest. We conduct quarterly third-party security audits and support SSO with SAML for enterprise deployments."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes. All plans include a 14-day free trial with full platform access. No credit card required to start. You can upgrade, downgrade, or cancel at any time."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Common questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Still have questions? Our team is here to help.
          </p>
          <div className="flex flex-col gap-4 items-start">
            <Button variant="default" className="rounded-full">
              Start Free Trial
            </Button>
            <Button variant="link" className="text-muted-foreground hover:text-foreground px-0">
              Contact Support â†’
            </Button>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "border overflow-hidden transition-all duration-200 ease-out",
                    isOpen ? "bg-muted/50 border-border rounded-xl" : "border-border hover:bg-muted/30 rounded-xl"
                  )}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-xl"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "shrink-0 ml-4 p-1 transition-colors",
                        isOpen ? "bg-brand-50 dark:bg-brand-600/10 text-brand-600 rounded-lg" : "text-slate-400 rounded-lg"
                      )}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
