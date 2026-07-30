"use client";
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PricingSection() {
  const plans = [
    {
      name: "Monitor",
      price: "$49",
      description: "For single-site projects and pilot programs.",
      features: ["1 forest site (up to 500 ha)", "Basic carbon metrics", "24-hour email support", "Community forum access"],
      buttonText: "Start free trial",
      highlight: false
    },
    {
      name: "Portfolio",
      price: "$299",
      description: "For multi-site portfolios and growing teams.",
      features: ["Up to 25 forest sites", "Advanced analytics and scenario modeling", "4-hour priority support", "Custom branding and reports", "Team collaboration (up to 10 seats)"],
      buttonText: "Start free trial",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For global programs with custom compliance needs.",
      features: ["Unlimited sites and hectares", "Custom API integrations", "Dedicated success manager", "SSO, SAML, and SOC 2", "On-premise deployment option"],
      buttonText: "Contact sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-cream tracking-[0.04em] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-sage-mist text-lg">
            Choose the plan that fits your portfolio. <span className="text-lemon-zest font-semibold">All plans include a 14-day free trial.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "relative rounded-none p-8 flex flex-col transition-all duration-200 ease-out bg-black-olive border",
                plan.highlight 
                  ? "border-lemon-zest" 
                  : "border-sage-mist/15"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lemon-zest text-black-olive text-xs font-bold px-3 py-1 rounded-[1px] uppercase tracking-[0.04em]">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-medium text-warm-cream tracking-[0.04em] uppercase mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className={cn("text-4xl font-display font-bold", plan.highlight ? "text-lemon-zest" : "text-warm-cream")}>{plan.price}</span>
                <span className="text-sage-mist">/mo</span>
              </div>
              <p className="text-sage-mist text-sm mb-8">{plan.description}</p>
              
              <Button 
                variant={plan.highlight ? "default" : "outline"}
                className="w-full mb-8 mt-auto"
              >
                {plan.buttonText}
              </Button>
              
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0", plan.highlight ? "text-lemon-zest" : "text-sage-mist/50")} />
                    <span className="text-sage-mist text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
