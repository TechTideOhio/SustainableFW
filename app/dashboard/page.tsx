'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForestTelemetry } from '@/hooks/useForestTelemetry';
import { MetricCard } from '@/components/ui/MetricCard';
import ForestCanvas from '@/components/3d/ForestCanvas';
import DataHUD from '@/components/3d/DataHUD';
import { ScenarioSimulator } from '@/components/ui/ScenarioSimulator';
import { CarbonChart } from '@/components/ui/CarbonChart';
import { AlertFeed } from '@/components/ui/AlertFeed';

export default function DashboardPage() {
  const { data, loading } = useForestTelemetry();

  if (loading || !data) {
    return (
      <div className="p-6 h-full flex flex-col space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[400px]">
          <div className="lg:col-span-2 bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
          <div className="bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[300px]">
          <div className="bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
          <div className="bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
        </div>
      </div>
    );
  }

  const { summary, parcels, carbonHistory, alerts } = data;
  const primaryParcel = parcels[0];
  const primaryTelemetry = primaryParcel?.telemetry;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      className="p-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="Total Carbon Sequestered" 
            value={`${summary.totalCarbonSequestered.toLocaleString()} tCO₂e`}
            change={summary.carbonChangePercent}
            color="emerald"
            index={0}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="Active Credits" 
            value={summary.activeCredits}
            color="green"
            index={1}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="Average Health Score" 
            value={`${summary.averageHealthScore}/100`}
            color={summary.averageHealthScore >= 90 ? 'green' : summary.averageHealthScore >= 70 ? 'amber' : 'red'}
            index={2}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="Unresolved Alerts" 
            value={summary.unresolvedAlerts}
            color={summary.unresolvedAlerts > 0 ? 'red' : 'green'}
            index={3}
          />
        </motion.div>
      </div>

      {/* Digital Twin View + Scenario Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
        <motion.div variants={itemVariants} className="lg:col-span-2 glass-card overflow-hidden flex flex-col relative">
          <div className="p-4 border-b border-[rgba(34,84,61,0.3)] bg-[rgba(10,26,18,0.4)] z-10 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Digital Twin View</h2>
            <div className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded border border-green-800/40">Real-time Satellite Feed</div>
          </div>
          <div className="flex-1 relative w-full h-full">
            <ForestCanvas 
              interactive
              healthScore={primaryParcel?.healthScore}
              season={primaryParcel?.season}
              fireRisk={primaryParcel?.fireRisk}
              canopyDensity={primaryTelemetry?.canopyDensity}
            />
            {primaryTelemetry && (
              <DataHUD
                carbonSequestered={primaryTelemetry.carbonSequestered}
                carbonRate={primaryTelemetry.carbonRate}
                biomass={primaryTelemetry.biomass}
                canopyDensity={primaryTelemetry.canopyDensity}
                temperature={primaryTelemetry.temperature}
                treeCount={primaryTelemetry.treeCount}
                healthScore={primaryParcel.healthScore}
                parcelName={primaryParcel.name}
              />
            )}
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="glass-card flex flex-col h-full overflow-hidden">
          <ScenarioSimulator />
        </motion.div>
      </div>

      {/* Carbon Chart + Alert Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="glass-card p-0 h-[400px]">
          <CarbonChart data={carbonHistory.monthly} title="Carbon Sequestration Trend" />
        </motion.div>
        <motion.div variants={itemVariants} className="glass-card p-0 h-[400px] overflow-hidden">
          <AlertFeed alerts={alerts} />
        </motion.div>
      </div>
    </motion.div>
  );
}
