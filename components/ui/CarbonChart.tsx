'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { SageCard, PillTag } from '@/components/ui/OperateUI';

export interface CarbonChartProps {
  data: { date: string; value: number }[];
  title?: string;
}

type Timeframe = 'Daily' | 'Monthly' | 'Yearly';

export function CarbonChart({ data, title = 'Carbon Sequestration' }: CarbonChartProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>('Monthly');
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; date: string; value: number } | null>(null);

  const chartWidth = 600;
  const chartHeight = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };

  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const points = useMemo(() => {
    if (!data || data.length === 0) return [];
    
    const maxX = data.length - 1;
    const minY = Math.min(...data.map(d => d.value)) * 0.9;
    const maxY = Math.max(...data.map(d => d.value)) * 1.1;

    return data.map((d, i) => {
      const x = padding.left + (i / (maxX || 1)) * innerWidth;
      const y = padding.top + innerHeight - ((d.value - minY) / (maxY - minY || 1)) * innerHeight;
      return { x, y, ...d };
    });
  }, [data, innerWidth, innerHeight, padding.left, padding.top]);

  const pathD = useMemo(() => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const curr = points[i];
      const prev = points[i - 1];
      const cx = (curr.x + prev.x) / 2;
      d += ` C ${cx},${prev.y} ${cx},${curr.y} ${curr.x},${curr.y}`;
    }
    return d;
  }, [points]);

  const areaD = useMemo(() => {
    if (points.length === 0) return '';
    return `${pathD} L ${points[points.length - 1].x},${chartHeight - padding.bottom} L ${points[0].x},${chartHeight - padding.bottom} Z`;
  }, [pathD, points, chartHeight, padding.bottom]);

  if (!data || data.length === 0) {
    return (
      <SageCard padding="md" className="flex items-center justify-center h-full">
        <p className="font-denim text-[14px] text-slate-smoke">No data available</p>
      </SageCard>
    );
  }

  return (
    <SageCard padding="md" className="h-full flex flex-col" role="region" aria-label={title}>
      <div className="flex justify-between items-center mb-6 border-b border-lichen pb-3">
        <h2 className="font-denim text-[16px] font-medium text-forest-ink">{title}</h2>
        <div className="flex gap-2">
          {(['Daily', 'Monthly', 'Yearly'] as Timeframe[]).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className="focus:outline-none"
            >
              <PillTag variant={timeframe === tf ? 'filled' : 'outline'} className={timeframe === tf ? 'bg-forest-ink text-bone-white cursor-default' : 'cursor-pointer hover:bg-forest-ink/5'}>
                {tf}
              </PillTag>
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full flex-1 min-h-0 overflow-hidden" onMouseLeave={() => setHoveredPoint(null)}>
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible preserve-aspect-ratio-none">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-moss)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-moss)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 0.5, 1].map((tick) => (
            <line
              key={tick}
              x1={padding.left}
              y1={padding.top + innerHeight * tick}
              x2={chartWidth - padding.right}
              y2={padding.top + innerHeight * tick}
              stroke="var(--color-lichen)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          <motion.path
            d={areaD}
            fill="url(#areaGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.path
            d={pathD}
            fill="none"
            stroke="var(--color-forest-ink)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={15}
              fill="transparent"
              className="cursor-crosshair"
              onMouseEnter={() => setHoveredPoint(p)}
            />
          ))}
          
          {hoveredPoint && (
            <circle cx={hoveredPoint.x} cy={hoveredPoint.y} r={4} fill="var(--color-bone-white)" stroke="var(--color-forest-ink)" strokeWidth="1.5" />
          )}

          <text x={padding.left} y={chartHeight - 10} fill="var(--color-slate-smoke)" fontSize="10" className="font-cinetype uppercase tracking-cinetype">{points[0]?.date}</text>
          <text x={chartWidth - padding.right} y={chartHeight - 10} fill="var(--color-slate-smoke)" fontSize="10" textAnchor="end" className="font-cinetype uppercase tracking-cinetype">{points[points.length - 1]?.date}</text>
        </svg>

        {hoveredPoint && (
          <div 
            className="absolute bg-bone-white border border-lichen p-2 rounded shadow-sm-2 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{ left: `${(hoveredPoint.x / chartWidth) * 100}%`, top: `${(hoveredPoint.y / chartHeight) * 100}%`, marginTop: '-10px' }}
          >
            <p className="font-cinetype text-[10px] text-slate-smoke uppercase tracking-cinetype mb-1">{hoveredPoint.date}</p>
            <p className="font-denim text-[14px] font-medium text-forest-ink">{hoveredPoint.value.toLocaleString()}</p>
          </div>
        )}
      </div>
    </SageCard>
  );
}
