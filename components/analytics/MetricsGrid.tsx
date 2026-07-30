"use client";
import { ArrowUpRight, ArrowDownRight, Eye, Users, Clock, Activity, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const metrics = [
  { title: 'Page Views', value: '1.2M', change: '+12.5%', trend: 'up', icon: Eye },
  { title: 'Unique Visitors', value: '452K', change: '+8.2%', trend: 'up', icon: Users },
  { title: 'Bounce Rate', value: '42.3%', change: '-2.4%', trend: 'down', icon: Activity },
  { title: 'Avg Session', value: '3m 12s', change: '+15s', trend: 'up', icon: Clock },
  { title: 'Conversion Rate', value: '3.8%', change: '+0.5%', trend: 'up', icon: ArrowUpRight },
  { title: 'Revenue', value: '$84.2K', change: '+18.1%', trend: 'up', icon: DollarSign },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-card border-white/5 glass-panel">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-zinc-400">{metric.title}</CardTitle>
            <metric.icon className="w-4 h-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className={cn("text-xs flex items-center mt-1", 
              metric.trend === 'up' && metric.title !== 'Bounce Rate' ? "text-lime" : 
              metric.title === 'Bounce Rate' && metric.trend === 'down' ? "text-lime" : 
              "text-red-400"
            )}>
              {metric.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
              {metric.change} from last period
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
