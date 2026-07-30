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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400 text-lg">
            Choose the plan that fits your portfolio. <span className="text-lime">All plans include a 14-day free trial.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "relative rounded-3xl p-8 bg-card flex flex-col",
                plan.highlight 
                  ? "border-2 border-lime lime-edge shadow-[0_0_30px_rgba(168,217,70,0.15)] bg-zinc-900/80 md:-translate-y-4 md:mb-[-1rem]" 
                  : "border border-white/10"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>
              
              <Button 
                variant={plan.highlight ? "default" : "outline"}
                className={cn(
                  "w-full rounded-full mb-8 mt-auto",
                  plan.highlight ? "bg-lime text-black hover:bg-lime/90 font-semibold" : "border-white/20 text-white hover:bg-white/10"
                )}
              >
                {plan.buttonText}
              </Button>
              
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0", plan.highlight ? "text-lime" : "text-zinc-500")} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
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
