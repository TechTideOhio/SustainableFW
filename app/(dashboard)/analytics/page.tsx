"use client";
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { MetricsGrid } from '@/components/analytics/MetricsGrid';
import { TrafficCharts } from '@/components/analytics/TrafficCharts';
import { PerformanceTable } from '@/components/analytics/PerformanceTable';

export default function AnalyticsPage() {
  return (
    <div className="p-6 pb-24 md:p-8 space-y-8 font-body">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
          <p className="text-zinc-400">Track your application's performance and user engagement.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-surface rounded-lg p-1 border border-white/10">
            {['7d', '30d', '90d', '1y'].map((preset) => (
              <Button 
                key={preset} 
                variant="ghost" 
                size="sm" 
                className={cn("h-7 px-3 text-xs rounded-md", preset === '30d' ? 'bg-white/10 text-white' : 'text-zinc-400')}
              >
                {preset}
              </Button>
            ))}
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] h-9 bg-surface border-white/10">
              <Calendar className="w-4 h-4 mr-2 text-zinc-400" />
              <SelectValue placeholder="Project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="prod">Production</SelectItem>
              <SelectItem value="staging">Staging</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <MetricsGrid />
      <TrafficCharts />
      <PerformanceTable />
    </div>
  );
}
