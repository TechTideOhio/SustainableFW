"use client";
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, AlertCircle, Clock, Activity, Bell } from 'lucide-react';

const services = [
  { name: 'API Server', status: 'operational', uptime: 99.99, ping: 45 },
  { name: 'Dashboard', status: 'operational', uptime: 99.95, ping: 32 },
  { name: 'Database', status: 'operational', uptime: 99.99, ping: 12 },
  { name: 'CDN', status: 'operational', uptime: 100, ping: 18 },
  { name: 'Authentication', status: 'degraded', uptime: 99.85, ping: 145 },
  { name: 'Webhooks', status: 'operational', uptime: 99.9, ping: 55 },
];

const incidents = [
  { id: 1, date: 'Oct 24, 2023', title: 'Authentication Latency', status: 'Resolved', description: 'Increased latency observed in login endpoints. Issue was traced to a database index and resolved.' },
  { id: 2, date: 'Oct 15, 2023', title: 'API Gateway Timeout', status: 'Resolved', description: 'Brief period of timeouts due to a spike in traffic. Auto-scaling policies adjusted.' },
];

export default function StatusPage() {
  // Generate random history data for the 90-day chart
  const historyData = Array.from({ length: 90 }, (_, i) => {
    if (i === 88) return 'degraded';
    if (i === 45 || i === 46) return 'down';
    if (i % 14 === 0) return 'degraded';
    return 'operational';
  });

  const isDegraded = services.some(s => s.status !== 'operational');

  return (
    <div className="container max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className={cn(
        "rounded-xl p-6 flex items-center justify-between border",
        isDegraded 
          ? "bg-amber-500/10 border-amber-500/30 text-amber-500" 
          : "bg-lime/10 border-lime/30 text-lime"
      )}>
        <div className="flex items-center gap-4">
          {isDegraded ? <AlertCircle className="w-8 h-8" /> : <CheckCircle2 className="w-8 h-8" />}
          <div>
            <h1 className="text-2xl font-bold">
              {isDegraded ? 'Some Systems Degraded' : 'All Systems Operational'}
            </h1>
            <p className="text-sm opacity-80 mt-1">Last updated: Just now</p>
          </div>
        </div>
        <Button variant="outline" className={cn(
          "border-current bg-transparent hover:bg-current/10",
          isDegraded ? "text-amber-500" : "text-lime"
        )}>
          <Bell className="w-4 h-4 mr-2" />
          Subscribe
        </Button>
      </div>

      {/* Services Grid */}
      <div>
        <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-zinc-400" />
          Current Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card key={service.name} className="glass-panel border-white/10 bg-app">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-white">{service.name}</h3>
                  {service.status === 'operational' && <Badge className="bg-lime/10 text-lime hover:bg-lime/20">Operational</Badge>}
                  {service.status === 'degraded' && <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">Degraded</Badge>}
                  {service.status === 'down' && <Badge variant="destructive">Down</Badge>}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Uptime</span>
                      <span className="text-white font-mono">{service.uptime}%</span>
                    </div>
                    <Progress value={service.uptime} className="h-1 bg-white/10" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Response Time</span>
                    <span className="text-white font-mono">{service.ping}ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Uptime History Chart */}
      <Card className="glass-panel border-white/10 bg-app">
        <CardHeader>
          <CardTitle className="text-lg">90-Day Uptime History</CardTitle>
          <CardDescription>Overall platform availability over the last 90 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 h-12 mb-2 items-end">
            {historyData.map((status, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 rounded-sm min-w-[2px]",
                  status === 'operational' ? "bg-lime h-full" : 
                  status === 'degraded' ? "bg-amber-500 h-3/4" : 
                  "bg-red-500 h-1/2"
                )}
                title={`Day ${i + 1}: ${status}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-zinc-500 mt-2">
            <span>90 days ago</span>
            <span>99.98% uptime</span>
            <span>Today</span>
          </div>
        </CardContent>
      </Card>

      {/* Incident History */}
      <div>
        <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-zinc-400" />
          Past Incidents
        </h2>
        <div className="space-y-6 border-l-2 border-white/10 pl-6 ml-3">
          {incidents.map((incident) => (
            <div key={incident.id} className="relative">
              <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-app border-2 border-zinc-600" />
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-white">{incident.title}</h3>
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">{incident.status}</Badge>
                </div>
                <div className="text-sm text-lime">{incident.date}</div>
                <p className="text-zinc-400 max-w-3xl">{incident.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
