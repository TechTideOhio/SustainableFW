'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: number;
  icon?: React.ReactNode;
  color?: 'green' | 'emerald' | 'red' | 'amber';
  index?: number;
}

export function MetricCard({
  title,
  value,
  subtitle,
  change,
  icon,
  color = 'emerald',
  index = 0,
}: MetricCardProps) {
  const colorMap = {
    green: 'text-green-400',
    emerald: 'text-emerald-400',
    red: 'text-red-400',
    amber: 'text-amber-400',
  };

  const valColor = colorMap[color] || colorMap.emerald;
  const isPositive = change !== undefined && change >= 0;
  const changeColor = isPositive ? 'text-green-400' : 'text-red-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col p-6 rounded-xl bg-[#102a1c99] border border-[#22543d4d] backdrop-blur-md shadow-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] group"
      role="region"
      aria-label={`${title} Metric`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{title}</h3>
        {icon && <div className="text-gray-400 group-hover:text-emerald-400 transition-colors">{icon}</div>}
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className={`text-3xl font-bold ${valColor}`}>{value}</span>
        {change !== undefined && (
          <span className={`flex items-center text-sm font-medium ${changeColor}`} aria-label={`Change: ${change}%`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        )}
      </div>

      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </motion.div>
  );
}
