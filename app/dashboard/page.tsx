'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useForestTelemetry } from '@/hooks/useForestTelemetry';
import { MetricCard } from '@/components/ui/MetricCard';
import { ScenarioSimulator } from '@/components/ui/ScenarioSimulator';
import { CarbonChart } from '@/components/ui/CarbonChart';
import { AlertFeed } from '@/components/ui/AlertFeed';
import { SageCard, AxisLabel, PillTag, HairlineDivider, GhostLink } from '@/components/ui/OperateUI';
import Link from 'next/link';

export default function DashboardPage() {
  const { data, loading } = useForestTelemetry();

  if (loading || !data) {
    return (
      <div className="p-6 h-full flex flex-col gap-6 bg-sage-paper min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-lichen/20 rounded-xl animate-pulse border border-lichen" />
          ))}
        </div>
      </div>
    );
  }

  const { summary, parcels, carbonHistory, alerts } = data;
  const primaryParcel = parcels[0];
  const primaryTelemetry = primaryParcel?.telemetry;

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-sage-paper text-forest-ink font-denim flex flex-col">
      {/* Dashboard Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-lichen shadow-subtle-3 bg-sage-paper">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-muoto font-medium tracking-muoto text-[14px]">
            [ ForestTwin // Dashboard ]
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <PillTag variant="filled" className="bg-moss text-forest-ink">LIVE</PillTag>
          <GhostLink href="/settings">Settings</GhostLink>
        </div>
      </header>

      <motion.main 
        className="flex-1 p-6 flex flex-col gap-6 max-w-[1600px] mx-auto w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex justify-between items-end mb-2">
          <AxisLabel align="left">Portfolio Metrics</AxisLabel>
          <span className="font-cinetype text-[11px] tracking-cinetype text-slate-smoke uppercase">Last updated: Just now</span>
        </div>

        {/* KPI Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            title="Total Carbon" 
            value={summary.totalCarbonSequestered}
            unit="tCO₂e"
            change={summary.carbonChangePercent}
            index={0}
          />
          <MetricCard 
            title="Active Credits" 
            value={summary.activeCredits}
            unit="VCS"
            index={1}
          />
          <MetricCard 
            title="Avg Health Score" 
            value={summary.averageHealthScore}
            unit="/ 100"
            index={2}
          />
          <MetricCard 
            title="Unresolved Alerts" 
            value={summary.unresolvedAlerts}
            index={3}
          />
        </div>

        <HairlineDivider className="my-2" />

        <div className="flex justify-between items-end mb-2">
          <AxisLabel align="left">Terminal & Simulation</AxisLabel>
        </div>

        {/* Digital Twin View + Scenario Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
          <motion.div variants={item} className="lg:col-span-2 h-full">
            <SageCard padding="none" className="h-full flex flex-col overflow-hidden relative">
              <div className="px-4 py-3 border-b border-lichen flex justify-between items-center bg-ash-gray/50">
                <span className="font-muoto text-[12px] font-medium tracking-muoto text-forest-ink">[ Satellite Feed // {primaryParcel?.name} ]</span>
                <PillTag>OPTICAL</PillTag>
              </div>
              
              <div className="flex-1 relative w-full h-full flex items-center justify-center bg-bone-white overflow-hidden">
                {/* 2D Data Visualization Fallback instead of 3D Canvas */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                   <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {Array.from({length: 10}).map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={`${i*10}%`} x2="100%" y2={`${i*10}%`} stroke="#cad3d2" strokeWidth="1" strokeDasharray="4 4" />
                    ))}
                    {Array.from({length: 10}).map((_, i) => (
                      <line key={`v-${i}`} x1={`${i*10}%`} y1="0" x2={`${i*10}%`} y2="100%" stroke="#cad3d2" strokeWidth="1" strokeDasharray="4 4" />
                    ))}
                  </svg>
                </div>
                
                {primaryTelemetry && (
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="font-cinetype text-[11px] text-slate-smoke uppercase tracking-cinetype">Biomass</div>
                    <div className="font-denim text-[24px] text-forest-ink font-medium">{primaryTelemetry.biomass.toLocaleString()} <span className="text-[12px]">tons</span></div>
                  </div>
                )}
                
                <div className="font-cinetype text-[12px] text-slate-smoke uppercase tracking-cinetype animate-pulse">
                  Rendering instrument data...
                </div>
              </div>
            </SageCard>
          </motion.div>
          
          <motion.div variants={item} className="h-full">
            <ScenarioSimulator />
          </motion.div>
        </div>

        <HairlineDivider className="my-2" />

        <div className="flex justify-between items-end mb-2">
          <AxisLabel align="left">Ledger & History</AxisLabel>
        </div>

        {/* Carbon Chart + Alert Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
          <motion.div variants={item} className="h-[400px]">
            <CarbonChart data={carbonHistory.monthly} title="Sequestration Trend" />
          </motion.div>
          <motion.div variants={item} className="h-[400px]">
            <AlertFeed alerts={alerts} />
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
