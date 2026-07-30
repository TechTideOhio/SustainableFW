"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on all our plans. You can try all the features without providing a credit card upfront."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Prorated charges or credits will be applied automatically."
  },
  {
    question: "What integrations do you support?",
    answer: "We support over 50 integrations out of the box, including Slack, Jira, Code, and major CRM platforms. You can also use our API to build custom integrations."
  },
  {
    question: "How do you handle security and compliance?",
    answer: "Security is our top priority. We are SOC 2 Type II compliant, use end-to-end encryption, and conduct regular third-party security audits."
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include access to our community and knowledge base. Premium plans get 1-hour email response times, and Enterprise includes a dedicated account manager."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Everything you need to know
          </h2>
          <p className="text-zinc-400 mb-8">
            Can't find the answer you're looking for? Feel free to reach out to our team.
          </p>
          <div className="flex flex-col gap-4 items-start">
            <Button className="bg-lime text-black hover:bg-lime/90 rounded-full font-medium">
              Get Started
            </Button>
            <Button variant="link" className="text-zinc-400 hover:text-white px-0">
              Contact Support →
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
                    "border border-white/10 rounded-2xl overflow-hidden transition-colors",
                    isOpen ? "bg-white/5 border-white/20" : "bg-transparent hover:bg-white/[0.02]"
                  )}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-white text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn("shrink-0 ml-4 p-1 rounded-full", isOpen ? "bg-lime/20 text-lime" : "text-zinc-500")}
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
                        <div className="px-6 pb-5 text-zinc-400">
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
