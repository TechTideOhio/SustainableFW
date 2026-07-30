'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SageCard } from '@/components/ui/OperateUI';
import { NumberTicker } from '@/components/ui/NumberTicker';

interface MetricCardProps {
  title: string;
  value: number;
  unit?: string;
  subtitle?: string;
  change?: number;
  icon?: React.ReactNode;
  color?: 'green' | 'emerald' | 'red' | 'amber';
  index?: number;
}

export function MetricCard({
  title,
  value,
  unit = '',
  subtitle,
  change,
  icon,
  color = 'emerald',
  index = 0,
}: MetricCardProps) {
  const isPositive = change !== undefined && change >= 0;
  const changeColor = isPositive ? 'text-moss' : 'text-slate-smoke';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
      role="region"
      aria-label={`${title} Metric`}
    >
      <SageCard padding="md" className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-muoto text-[12px] tracking-muoto font-medium text-forest-ink/70">
            [{title}]
          </h3>
          {icon && <div className="text-forest-ink/50 group-hover:text-forest-ink transition-colors">{icon}</div>}
        </div>

        <div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="font-denim text-[32px] font-medium leading-[1.17] text-forest-ink">
              <NumberTicker value={value} />
            </span>
            {unit && <span className="font-denim text-[14px] text-slate-smoke">{unit}</span>}
          </div>

          {change !== undefined && (
            <div className={`flex items-center gap-1 font-muoto text-[12px] ${changeColor}`} aria-label={`Change: ${change}%`}>
              <span>{isPositive ? '↑' : '↓'}</span>
              <NumberTicker value={Math.abs(change)} decimalPlaces={1} />%
              <span className="text-slate-smoke ml-1">vs last period</span>
            </div>
          )}
          
          {subtitle && !change && (
            <p className="font-denim text-[12px] text-slate-smoke mt-1">{subtitle}</p>
          )}
        </div>
      </SageCard>
    </motion.div>
  );
}
