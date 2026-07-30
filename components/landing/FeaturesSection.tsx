"use client";
import { TreePine, Activity, Users, Server } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything you need to manage carbon assets
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From satellite-fed 3D replicas to audit-ready carbon ledgers, ForestTwin gives your team full visibility into every hectare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
          {/* Card 1: Spans 2 rows */}
          <div className="row-span-1 md:row-span-2 bg-brand-600 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Interactive 3D Digital Twin</h3>
              <p className="text-white/80 font-medium max-w-sm">
                Explore a living 3D replica of your forest. Tree health, canopy density, and biomass update in real time from IoT sensors and satellite feeds.
              </p>
            </div>
            {/* Phone Mockup / Image Container */}
            <div className="mt-8 flex-1 relative bg-slate-900 rounded-t-3xl border-8 border-slate-900 border-b-0 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-slate-900 rounded-b-xl z-20" />
              <img 
                src="/images/digital_twin_3d.jpg" 
                alt="3D Digital Twin Visualization" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card border border-border shadow-sm rounded-3xl p-8 flex flex-col justify-between group transition-colors overflow-hidden relative">
            <img 
              src="/images/carbon_dashboard.jpg"
              alt="Carbon Dashboard UI"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="z-10 relative">
               <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-4 text-foreground backdrop-blur-md">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Live Carbon Telemetry</h3>
              <p className="text-muted-foreground text-sm">
                Track sequestration rates, soil moisture, and canopy cover as they change. No waiting for quarterly reports.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 z-10 relative">
              <div className="flex items-center gap-3 bg-muted/80 backdrop-blur-md p-3 rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-foreground">CO₂ absorbed: 12.4t</span>
              </div>
              <div className="flex items-center gap-3 bg-muted/80 backdrop-blur-md p-3 rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-mono text-foreground">Sensor sync complete</span>
                <span className="text-xs text-muted-foreground ml-auto">2m ago</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-card border border-border shadow-sm rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-muted/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-4xl font-bold text-foreground mb-2 font-display tracking-tight">2.1M+</h3>
            <p className="text-muted-foreground font-medium mb-6">Hectares Monitored</p>
            
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-card bg-muted overflow-hidden flex items-center justify-center">
                   <Users className="w-5 h-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-brand-50 dark:bg-brand-600/5 border border-brand-200 dark:border-brand-600/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-transparent z-0" />
            <div className="z-10 mb-6 md:mb-0">
               <div className="w-12 h-12 bg-brand-100 dark:bg-brand-600/20 rounded-xl flex items-center justify-center mb-4 text-brand-600 border border-brand-200 dark:border-brand-600/30">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise Grade Infrastructure</h3>
              <p className="text-muted-foreground max-w-md">
                Your data stays secure and accessible across regions. Built for the compliance requirements of global ESG programs.
              </p>
            </div>
            <div className="z-10 flex gap-4 w-full md:w-auto">
              <div className="bg-card backdrop-blur-sm p-4 rounded-2xl border border-border text-center flex-1 md:w-32">
                <div className="text-2xl font-bold text-brand-600 mb-1">99.99%</div>
                <div className="text-xs text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="bg-card backdrop-blur-sm p-4 rounded-2xl border border-border text-center flex-1 md:w-32">
                <div className="text-2xl font-bold text-foreground mb-1">SOC 2</div>
                <div className="text-xs text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
