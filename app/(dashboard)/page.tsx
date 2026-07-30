"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { TrafficOverview } from "@/components/dashboard/TrafficOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8 font-body">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Overview</h1>
          <p className="text-zinc-400 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">Download</Button>
          <Button className="bg-lime text-app hover:bg-lime/90 font-medium">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TrafficOverview />
        <RecentActivity />
      </div>
    </div>
  );
}
