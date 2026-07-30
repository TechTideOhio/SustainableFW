"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, MessageCircle, Code, Link } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-warm-cream rounded-none pt-12 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* CTA Card seamlessly integrated into the top of the footer container */}
          <div className="max-w-5xl mx-auto bg-black-olive border border-sage-mist/15 rounded-none p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-warm-cream tracking-[0.04em] mb-2">
                Ready to see your carbon assets in a new light?
              </h2>
              <p className="text-sage-mist">
                Join the teams already using ForestTwin to verify, report, and grow.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-forest-ink/20 border-sage-mist/30 text-warm-cream placeholder:text-sage-mist/50 h-12 w-full sm:w-64 rounded-[1px] focus-visible:ring-lemon-zest"
                aria-label="Email address"
              />
              <Button className="bg-lemon-zest text-black-olive hover:bg-lemon-zest/90 rounded-[1px] h-12 px-6 font-semibold uppercase tracking-[0.04em] flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Base Footer */}
          <div className="text-black-olive">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Logo Col */}
              <div className="col-span-1 md:col-span-1">
                <a href="#" className="inline-block mb-6">
                  <span className="font-display text-black-olive text-2xl tracking-[0.04em] uppercase font-medium">
                    ForestTwin
                  </span>
                </a>
                <p className="text-forest-ink mb-6 font-medium max-w-xs">
                  The carbon asset intelligence platform for sustainability teams.
                </p>
              </div>

              {/* Nav Cols */}
              <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-black-olive uppercase tracking-[0.04em] mb-4">Platform</h4>
                  <ul className="space-y-3 font-medium text-forest-ink">
                    <li><a href="#features" className="hover:text-black-olive transition-colors">Digital Twin</a></li>
                    <li><a href="#pricing" className="hover:text-black-olive transition-colors">Pricing</a></li>
                    <li><a href="/integrations" className="hover:text-black-olive transition-colors">Integrations</a></li>
                    <li><a href="/help" className="hover:text-black-olive transition-colors">Documentation</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black-olive uppercase tracking-[0.04em] mb-4">Company</h4>
                  <ul className="space-y-3 font-medium text-forest-ink">
                    <li><a href="/about" className="hover:text-black-olive transition-colors">About</a></li>
                    <li><a href="#testimonials" className="hover:text-black-olive transition-colors">Case Studies</a></li>
                    <li><a href="/blog" className="hover:text-black-olive transition-colors">Blog</a></li>
                    <li><a href="/contact" className="hover:text-black-olive transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="font-bold text-black-olive uppercase tracking-[0.04em] mb-4">Social</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-[1px] bg-forest-ink/10 hover:bg-forest-ink/20 text-forest-ink flex items-center justify-center transition-colors" aria-label="MessageCircle">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-[1px] bg-forest-ink/10 hover:bg-forest-ink/20 text-forest-ink flex items-center justify-center transition-colors" aria-label="Code">
                      <Code className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-[1px] bg-forest-ink/10 hover:bg-forest-ink/20 text-forest-ink flex items-center justify-center transition-colors" aria-label="Link">
                      <Link className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-sage-mist pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-medium text-forest-ink/60 text-sm">
              <p>© {new Date().getFullYear()} ForestTwin Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-black-olive transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-black-olive transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
