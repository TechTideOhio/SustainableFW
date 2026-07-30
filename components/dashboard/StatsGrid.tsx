"use client";
import { Users, DollarSign, FolderOpen, Globe, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      <Card className="bg-card border-white/10 glass-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Total Users</CardTitle>
          <Users className="w-4 h-4 text-lime" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-display">12,847</div>
          <p className="text-xs text-lime mt-1 flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-1" /> +12.5% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-card border-white/10 glass-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Revenue</CardTitle>
          <DollarSign className="w-4 h-4 text-lime" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-display">$48,290</div>
          <p className="text-xs text-lime mt-1 flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-1" /> +8.2% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-card border-white/10 glass-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Active Projects</CardTitle>
          <FolderOpen className="w-4 h-4 text-lime" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-display">342</div>
          <p className="text-xs text-zinc-500 mt-1">14 completed this week</p>
        </CardContent>
      </Card>
      
      <Card className="bg-card border-white/10 glass-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Uptime</CardTitle>
          <Globe className="w-4 h-4 text-lime" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-display">99.99%</div>
          <p className="text-xs text-lime mt-1 flex items-center">
            All systems operational
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
