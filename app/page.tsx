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
      lenis.raf(time);
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
        title="Sustainable Forest Management"
        description="Sustainable forest management is the stewardship and use of forests in a way that maintains their biodiversity, productivity, regeneration capacity, vitality, and potential to fulfill relevant ecological, economic, and social functions."
        imageSrc="/images/forest_sunlight.webp"
        imageAlt="Sunlight streaming through a dense forest"
        factNumber="17%"
        factText="Of global greenhouse gas emissions are absorbed by forests each year, making them crucial in our fight against climate change."
      />
      
      <ParallaxSection
        id="sustainability"
        title="Preserving Biodiversity"
        description="Forests are home to more than 80% of the world's terrestrial biodiversity. Conservation efforts are essential to protect countless species that depend on these ecosystems for survival."
        imageSrc="/images/forest_green.webp"
        imageAlt="Lush green forest canopy"
        reverse={true}
        factNumber="80%"
        factText="Of Earth's land animals and plants live in forests, and many cannot survive elsewhere."
      />
      
      <ParallaxSection
        id="gallery"
        title="The Beauty of Nature"
        description="Forests provide us with breathtaking landscapes, clean air, and opportunities for recreation and spiritual renewal. They are vital for our physical and mental wellbeing."
        imageSrc="/images/forest_aerial.webp"
        imageAlt="Aerial view of a vast forest"
        factNumber="1 in 4"
        factText="Modern medicines are derived from rainforest plants, highlighting their importance to human health and medical advancement."
      />
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl w-full bg-green-800/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-green-700/50 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-center mb-8">
            Be part of the global movement to protect and sustain our forests for future generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-900/50 p-6 rounded-lg border border-green-800/50">
              <h3 className="text-2xl font-semibold mb-4">Support Conservation</h3>
              <p className="mb-6">Your contribution helps protect vital forest ecosystems and the biodiversity they contain.</p>
              <AnimatedButton 
                variant="primary" 
                size="lg" 
                className="w-full"
                href="#"
              >
                Donate Now
              </AnimatedButton>
            </div>
            
            <div className="bg-green-900/50 p-6 rounded-lg border border-green-800/50">
              <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
              <p className="mb-6">Volunteer for reforestation projects and community education initiatives.</p>
              <AnimatedButton 
                variant="secondary" 
                size="lg" 
                className="w-full"
                href="#"
              >
                Volunteer
              </AnimatedButton>
            </div>
          </div>
          
          <div className="text-center">
            <AnimatedButton 
              variant="outline" 
              size="lg"
              href="#"
            >
              Learn More About Our Programs
            </AnimatedButton>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-950 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-green-400">Forest</span>Sustain
            </h3>
            <p className="text-gray-300">
              Dedicated to the preservation and sustainable management of forest ecosystems worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Sustainability', 'Gallery', 'Contact'].map((item) => (
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
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                  aria-label={social}
                >
                  {/* Placeholder for social icons */}
                  <span className="text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-green-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ForestSustain. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
