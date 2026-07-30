'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface DataHUDProps {
  carbonSequestered: number;
  carbonRate: number;
  biomass: number;
  canopyDensity: number;
  temperature: number;
  treeCount: number;
  healthScore: number;
  parcelName: string;
}

export default function DataHUD({
  carbonSequestered,
  carbonRate,
  biomass,
  canopyDensity,
  treeCount,
  healthScore,
  parcelName,
}: DataHUDProps) {
  const [displayCarbon, setDisplayCarbon] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = carbonSequestered;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCarbon(end);
        clearInterval(timer);
      } else {
        setDisplayCarbon(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [carbonSequestered]);

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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  const pillClass = "bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 flex items-center gap-2 text-white font-mono text-sm";

  return (
    <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 text-white"
        >
          <h2 className="text-xl font-bold tracking-wider">{parcelName}</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className={`h-2 w-2 rounded-full ${healthScore > 75 ? 'bg-emerald-500' : healthScore > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} />
            <span className="font-mono text-sm opacity-80">Health: {healthScore}/100</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 text-white font-mono text-sm"
        >
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-emerald-500"
          />
          <span>LIVE • {new Date().toLocaleTimeString()}</span>
        </motion.div>
      </div>

      {/* Bottom Metrics */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex justify-between items-end"
      >
        {/* Bottom Left */}
        <div className="flex flex-col gap-3">
          <motion.div variants={itemVariants} className={pillClass}>
            <span className="text-emerald-400">🌱 CO2:</span>
            <span className="font-bold">{displayCarbon.toLocaleString()} tonnes</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className={pillClass}>
            <span className="text-emerald-400">📈 Rate:</span>
            <span>+{carbonRate} t/day</span>
          </motion.div>

          <motion.div variants={itemVariants} className={pillClass}>
            <span className="text-emerald-400">🌳 Trees:</span>
            <span>{treeCount.toLocaleString()}</span>
          </motion.div>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col gap-3 items-end">
          <motion.div variants={itemVariants} className={pillClass}>
            <span className="text-emerald-400">🌿 Biomass:</span>
            <span>{biomass} t/ha</span>
          </motion.div>

          <motion.div variants={itemVariants} className={pillClass}>
            <span className="text-emerald-400">🌤️ Canopy:</span>
            <span>{canopyDensity}%</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
