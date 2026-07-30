'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

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
      <div className="p-6 rounded-xl bg-[#102a1c99] border border-[#22543d4d] backdrop-blur-md shadow-lg flex items-center justify-center min-h-[400px]">
        <p className="text-gray-400">No data available for {title}</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-[#102a1c99] border border-[#22543d4d] backdrop-blur-md shadow-lg" role="region" aria-label={title}>
      <div className="flex justify-between items-center mb-6 border-b border-green-900/30 pb-4">
        <h2 className="text-lg font-semibold text-emerald-50">{title}</h2>
        <div className="flex gap-1 bg-black/30 p-1 rounded-full">
          {(['Daily', 'Monthly', 'Yearly'] as Timeframe[]).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                timeframe === tf ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full aspect-[2/1] overflow-hidden" onMouseLeave={() => setHoveredPoint(null)}>
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
            </linearGradient>
          </defs>

          {[0, 0.5, 1].map((tick) => (
            <line
              key={tick}
              x1={padding.left}
              y1={padding.top + innerHeight * tick}
              x2={chartWidth - padding.right}
              y2={padding.top + innerHeight * tick}
              stroke="rgba(20, 83, 45, 0.2)"
              strokeWidth="1"
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
            stroke="#34d399"
            strokeWidth="2"
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
            <circle cx={hoveredPoint.x} cy={hoveredPoint.y} r={4} fill="#fff" stroke="#34d399" strokeWidth="2" />
          )}

          <text x={padding.left} y={chartHeight - 10} fill="#9ca3af" fontSize="10">{points[0]?.date}</text>
          <text x={chartWidth - padding.right} y={chartHeight - 10} fill="#9ca3af" fontSize="10" textAnchor="end">{points[points.length - 1]?.date}</text>
        </svg>

        {hoveredPoint && (
          <div 
            className="absolute bg-[#0f2418] border border-emerald-900/50 p-2 rounded shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{ left: `${(hoveredPoint.x / chartWidth) * 100}%`, top: `${(hoveredPoint.y / chartHeight) * 100}%`, marginTop: '-10px' }}
          >
            <p className="text-xs text-gray-400 mb-1">{hoveredPoint.date}</p>
            <p className="text-sm font-bold text-emerald-400">{hoveredPoint.value.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
