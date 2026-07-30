"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, MessageCircle, Code, Link } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-600 rounded-[3rem] shadow-2xl pt-12 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* CTA Card seamlessly integrated into the top of the footer container */}
          <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-24 text-white">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Ready to see your carbon assets in a new light?
              </h2>
              <p className="text-slate-400">
                Join the teams already using ForestTwin to verify, report, and grow.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 h-12 w-full sm:w-64 rounded-xl focus-visible:ring-white"
                aria-label="Email address"
              />
              <Button className="bg-white text-brand-600 hover:bg-slate-100 rounded-xl h-12 px-6 font-semibold flex items-center gap-2 transition-all duration-200 ease-out active:scale-[0.97]">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Base Footer */}
          <div className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Logo Col */}
              <div className="col-span-1 md:col-span-1">
                <a href="#" className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 bg-brand-300 rounded-full" />
                  </div>
                  <span className="text-white text-2xl font-display font-bold">
                    ForestTwin
                  </span>
                </a>
                <p className="text-white/70 mb-6 font-medium max-w-xs">
                  The carbon asset intelligence platform for sustainability teams.
                </p>
              </div>

              {/* Nav Cols */}
              <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-white uppercase mb-4">Platform</h4>
                  <ul className="space-y-3 font-medium text-white/70">
                    <li><a href="#features" className="hover:text-white transition-colors">Digital Twin</a></li>
                    <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="/integrations" className="hover:text-white transition-colors">Integrations</a></li>
                    <li><a href="/help" className="hover:text-white transition-colors">Documentation</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase mb-4">Company</h4>
                  <ul className="space-y-3 font-medium text-white/70">
                    <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="font-bold text-white uppercase mb-4">Social</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="MessageCircle">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="Code">
                      <Code className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="Link">
                      <Link className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-medium text-white/60 text-sm">
              <p>Â© {new Date().getFullYear()} ForestTwin Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
