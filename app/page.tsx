'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { GhostLink, OperateButton, AxisLabel, FloatingChip, PillTag, SageCard, HairlineDivider } from '@/components/ui/OperateUI';
import { Activity, Leaf, ShieldAlert } from 'lucide-react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  // Generate random scatter points for the background data-as-illustration
  const scatterPoints = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    isFilled: Math.random() > 0.85,
    isHighlight: Math.random() > 0.95,
  }));

  return (
    <main className="min-h-screen bg-sage-paper text-forest-ink selection:bg-moss selection:text-forest-ink font-denim overflow-x-hidden">
      {/* Navigation */}
      <header className="w-full px-6 py-4 flex justify-between items-center z-50 relative border-b border-lichen shadow-subtle-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-muoto font-medium tracking-muoto text-[14px]">
            [ ForestTwin ]
          </Link>
          <div className="hidden md:flex gap-4 ml-8">
            <GhostLink href="#platform">Platform</GhostLink>
            <GhostLink href="#compliance">Compliance</GhostLink>
            <GhostLink href="#risk">Risk Models</GhostLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <GhostLink href="/login">Sign In</GhostLink>
          <OperateButton href="/dashboard" variant="primary">Access Dashboard</OperateButton>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center border-b border-lichen overflow-hidden">
        {/* Scatter Plot Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          {scatterPoints.map((point) => (
            <div
              key={point.id}
              className={`absolute rounded-full border border-forest-ink ${point.isFilled ? 'bg-bone-white' : 'bg-transparent'} ${point.isHighlight ? 'w-3 h-3 bg-emerald border-none' : 'w-2 h-2'}`}
              style={{ top: `${point.y}%`, left: `${point.x}%` }}
            />
          ))}
          
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="100%" x2="80%" y2="0%" stroke="#cad3d2" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="10%" y1="60%" x2="90%" y2="40%" stroke="#cad3d2" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Axis Labels */}
        <div className="absolute top-6 left-6 z-10">
          <AxisLabel align="left">Carbon Yield</AxisLabel>
        </div>
        <div className="absolute top-6 right-6 z-10">
          <AxisLabel align="right">Time Variance</AxisLabel>
        </div>

        <FloatingChip className="bottom-12 left-12">System Online: Nominal</FloatingChip>

        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-3xl px-6 flex flex-col items-center text-center mt-[-5%]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <PillTag className="mb-6 border-forest-ink">v0.1.0-STABLE</PillTag>
          </motion.div>
          <motion.h1 variants={item} className="font-denim font-medium text-[48px] leading-[1.11] mb-6">
            Your Forest Assets, <br />
            <span className="text-deep-fern">Quantified.</span>
          </motion.h1>
          <motion.p variants={item} className="font-denim text-[18px] leading-[1.4] text-slate-smoke max-w-xl mb-10">
            A real-time, audit-ready data instrument for corporate ESG managers. Monitor high-frequency telemetry on forest health, biomass, and carbon offset compliance.
          </motion.p>
          <motion.div variants={item} className="flex gap-4">
            <OperateButton href="/dashboard" variant="primary">Launch Terminal</OperateButton>
            <OperateButton href="#documentation" variant="outline">Read Specification</OperateButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem / Solution Section */}
      <section id="platform" className="relative w-full py-24 px-6 border-b border-lichen">
        <div className="absolute top-6 left-6 z-10">
          <AxisLabel align="left">Architecture</AxisLabel>
        </div>
        <div className="max-w-page mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={item}>
              <SageCard padding="lg" className="h-full">
                <Activity className="w-5 h-5 mb-4 text-deep-fern" />
                <h3 className="font-denim font-medium text-[20px] mb-2">Real-Time Telemetry</h3>
                <p className="font-denim text-[14px] leading-[1.5] text-slate-smoke">
                  Stop relying on annual PDF reports. We aggregate satellite multispectral data to deliver daily biomass estimates and exact carbon yield metrics.
                </p>
              </SageCard>
            </motion.div>
            
            <motion.div variants={item}>
              <SageCard padding="lg" className="h-full">
                <ShieldAlert className="w-5 h-5 mb-4 text-deep-fern" />
                <h3 className="font-denim font-medium text-[20px] mb-2">Predictive Risk</h3>
                <p className="font-denim text-[14px] leading-[1.5] text-slate-smoke">
                  Simulate climate scenarios directly against your physical assets. ML models predict wildfire, disease, and drought risks before they impact your natural capital.
                </p>
              </SageCard>
            </motion.div>
            
            <motion.div variants={item}>
              <SageCard padding="lg" className="h-full">
                <Leaf className="w-5 h-5 mb-4 text-deep-fern" />
                <h3 className="font-denim font-medium text-[20px] mb-2">Immutable Ledger</h3>
                <p className="font-denim text-[14px] leading-[1.5] text-slate-smoke">
                  Every metric is cryptographically signed and stored. Ensure your carbon offsets meet strict VCS and Gold Standard verification criteria with zero friction.
                </p>
              </SageCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-ash-gray border-t border-lichen flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <span className="font-muoto font-medium tracking-muoto text-[12px]">[ ForestTwin Digital Asset Dashboard ]</span>
          <span className="font-cinetype text-[11px] text-slate-smoke tracking-cinetype uppercase">© {new Date().getFullYear()} ForestTwin Inc.</span>
        </div>
        
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-cinetype text-[11px] text-slate-smoke tracking-cinetype uppercase mb-2">Platform</span>
            <GhostLink href="/dashboard" className="text-[12px]">Dashboard</GhostLink>
            <GhostLink href="#models" className="text-[12px]">Risk Models</GhostLink>
            <GhostLink href="#ledger" className="text-[12px]">Ledger</GhostLink>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-cinetype text-[11px] text-slate-smoke tracking-cinetype uppercase mb-2">Company</span>
            <GhostLink href="#about" className="text-[12px]">About</GhostLink>
            <GhostLink href="#security" className="text-[12px]">Security</GhostLink>
            <GhostLink href="#contact" className="text-[12px]">Contact</GhostLink>
          </div>
        </div>
        
        {/* Vertical Version Stamp */}
        <div className="hidden md:block absolute right-2 bottom-24 origin-bottom-right -rotate-90 font-muoto text-[11px] text-slate-smoke">
          BUILD: 2026.07.29 // STABLE
        </div>
      </footer>
    </main>
  );
}
