'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

const typeIcons: Record<Alert['type'], string> = {
  deforestation: '🌲',
  fire: '🔥',
  drought: '☀️',
  pest: '🐛',
  flood: '🌊',
  illegal_logging: '🪓',
};

const severityColors: Record<Alert['severity'], string> = {
  info: 'bg-blue-500',
  warning: 'bg-amber-500',
  critical: 'bg-red-500',
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
    <div className="flex flex-col h-full max-h-[600px] p-6 rounded-xl bg-[#102a1c99] border border-[#22543d4d] backdrop-blur-md shadow-lg" role="region" aria-label="Environmental Alerts">
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-green-900/30">
        <h2 className="text-lg font-semibold text-emerald-50">Environmental Alerts</h2>
        {unresolvedCount > 0 && (
          <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-bold border border-red-500/30">
            {unresolvedCount} New
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
        {sortedAlerts.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-8">No alerts at this time.</p>
        ) : (
          sortedAlerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative flex gap-3 p-4 rounded-lg bg-black/20 border border-white/5 overflow-hidden transition-all hover:bg-black/30 ${alert.resolved ? 'opacity-60 grayscale-[0.5]' : ''}`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${severityColors[alert.severity]}`} />
              
              <div className="text-2xl mt-1">{typeIcons[alert.type] || '⚠️'}</div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-200 truncate pr-2">{alert.title}</h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2 mb-2">{alert.description}</p>
                
                {alert.resolved && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 border border-green-500/20">
                    Resolved
                  </span>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
      `}} />
    </div>
  );
}
