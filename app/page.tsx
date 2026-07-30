'use client';

import React, { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from '@/components/layout/NavbarWithSmoothScroll';
import HeroSection from '@/components/ui/HeroSection';
import ParallaxSection from '@/components/ui/ParallaxSection';
import AnimatedButton from '@/components/ui/AnimatedButton';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  // Initialize Lenis smooth scroll
  const lenis = useLenis();
  
  // Set up GSAP ScrollTrigger integration with Lenis
  useEffect(() => {
    if (!lenis) return;
    
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    
    // Set up a ticker for GSAP animations
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [lenis]);
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section with 3D Forest */}
      <HeroSection />
      
      {/* Parallax Sections */}
      <ParallaxSection
        id="about"
        title="Real-Time Carbon Intelligence"
        description="Monitor your forest assets with satellite-grade precision. Our platform translates complex ecological data into actionable carbon metrics in real-time."
        imageSrc="/images/forest_sunlight.webp"
        imageAlt="Sunlight streaming through a dense forest"
        factNumber="99%"
        factText="Accuracy in biomass estimation using our proprietary digital twin algorithms."
      />
      
      <ParallaxSection
        id="sustainability"
        title="Audit-Ready Compliance"
        description="Every carbon credit verified against VCS and Gold Standard. Maintain perfect traceability from physical tree to retired credit on the ledger."
        imageSrc="/images/forest_green.webp"
        imageAlt="Lush green forest canopy"
        reverse={true}
        factNumber="100%"
        factText="Traceable carbon credits on our immutable ledger system."
      />
      
      <ParallaxSection
        id="gallery"
        title="Predictive Risk Modeling"
        description="Simulate climate scenarios to protect your portfolio. Our ML models predict wildfire, disease, and drought risks years before they impact your assets."
        imageSrc="/images/forest_aerial.webp"
        imageAlt="Aerial view of a vast forest"
        factNumber="24/7"
        factText="Continuous monitoring of your entire portfolio's health and risk factors."
      />
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl w-full bg-green-800/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-green-700/50 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ready to Optimize?</h2>
          <p className="text-lg md:text-xl text-center mb-8">
            Join forward-thinking enterprises managing their nature-based solutions with ForestTwin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-900/50 p-6 rounded-lg border border-green-800/50">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Dashboard</h3>
              <p className="mb-6">Access your customized digital twin interface and manage your carbon assets.</p>
              <AnimatedButton 
                variant="primary" 
                size="lg" 
                className="w-full"
                href="/dashboard"
              >
                Go to Dashboard
              </AnimatedButton>
            </div>
            
            <div className="bg-green-900/50 p-6 rounded-lg border border-green-800/50">
              <h3 className="text-2xl font-semibold mb-4">Request Demo</h3>
              <p className="mb-6">See how our platform can transform your carbon portfolio management.</p>
              <AnimatedButton 
                variant="secondary" 
                size="lg" 
                className="w-full"
                href="#"
              >
                Schedule Demo
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-950 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-green-400">Forest</span>Twin
            </h3>
            <p className="text-gray-300">
              The enterprise standard for digital twin carbon asset management.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Platform', 'Security', 'Compliance', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                  aria-label={social}
                >
                  <span className="text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-green-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ForestTwin. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
