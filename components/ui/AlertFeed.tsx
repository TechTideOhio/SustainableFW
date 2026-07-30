'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SageCard, PillTag } from '@/components/ui/OperateUI';

export interface Alert {
  id: string;
  type: 'deforestation' | 'fire' | 'drought' | 'pest' | 'flood' | 'illegal_logging';
  severity: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  resolved: boolean;
}

export interface AlertFeedProps {
  alerts: Alert[];
}

const typeTags: Record<Alert['type'], string> = {
  deforestation: 'DEFOREST',
  fire: 'FIRE',
  drought: 'DROUGHT',
  pest: 'PEST',
  flood: 'FLOOD',
  illegal_logging: 'LOGGING',
};

const severityColors: Record<Alert['severity'], string> = {
  info: 'bg-moss',
  warning: 'bg-amber-400',
  critical: 'bg-red-400',
};

export function AlertFeed({ alerts }: AlertFeedProps) {
  const sortedAlerts = [...alerts].sort((a, b) => {
    if (a.resolved === b.resolved) {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    }
    return a.resolved ? 1 : -1;
  });

  const unresolvedCount = alerts.filter(a => !a.resolved).length;

  return (
    <SageCard padding="md" className="flex flex-col h-full max-h-[600px]" role="region" aria-label="System Alerts">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-lichen">
        <h2 className="font-denim text-[16px] font-medium text-forest-ink">System Alerts</h2>
        {unresolvedCount > 0 && (
          <PillTag variant="filled" className="bg-forest-ink text-bone-white">
            {unresolvedCount} OPEN
          </PillTag>
        )}
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-3 no-scrollbar">
        {sortedAlerts.length === 0 ? (
          <p className="font-denim text-[14px] text-slate-smoke text-center py-8">No alerts at this time.</p>
        ) : (
          sortedAlerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative flex flex-col gap-2 p-4 rounded-md border border-lichen bg-ash-gray/30 transition-all ${alert.resolved ? 'opacity-50' : ''}`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${severityColors[alert.severity]}`} />
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <PillTag className="text-[10px] py-0.5 px-1.5">{typeTags[alert.type]}</PillTag>
                  <h4 className="font-denim text-[14px] font-medium text-forest-ink truncate">{alert.title}</h4>
                </div>
                <span className="font-cinetype text-[10px] text-slate-smoke uppercase tracking-cinetype whitespace-nowrap">{alert.timestamp}</span>
              </div>
              
              <p className="font-denim text-[13px] text-slate-smoke line-clamp-2 leading-relaxed ml-1 pl-1">
                {alert.description}
              </p>
              
              {alert.resolved && (
                <div className="mt-1 flex">
                  <span className="font-cinetype text-[10px] text-slate-smoke uppercase tracking-cinetype">
                    [ Resolved ]
                  </span>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </SageCard>
  );
}
