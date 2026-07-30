"use client";
import { Smartphone, Activity, Users, Server } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Everything you need to scale
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A complete toolset designed to help you build, launch, and manage your products with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
          {/* Card 1: Spans 2 rows */}
          <div className="row-span-1 md:row-span-2 bg-lime rounded-3xl p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="z-10">
              <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-6 text-black">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Guided Onboarding</h3>
              <p className="text-black/80 font-medium max-w-sm">
                Get your users up to speed quickly with our interactive, step-by-step product tours.
              </p>
            </div>
            {/* Phone Mockup */}
            <div className="mt-8 flex-1 relative bg-black rounded-t-3xl border-8 border-black border-b-0 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-20" />
              <div className="w-full h-full bg-zinc-900 p-4">
                <div className="h-8 w-24 bg-white/10 rounded mb-4" />
                <div className="h-32 bg-lime/20 rounded-xl border border-lime/30 mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-white/5 rounded w-full" />
                  <div className="h-4 bg-white/5 rounded w-5/6" />
                  <div className="h-4 bg-white/5 rounded w-4/6" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-fuchsia/10 blur-2xl rounded-full translate-y-1/2 translate-x-1/2" />
            <div className="z-10">
               <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-white">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-time Data</h3>
              <p className="text-zinc-400 text-sm">
                Monitor your metrics with live updating dashboards.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 z-10">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-xs font-mono text-zinc-300">Build #482 passed</span>
                <span className="text-xs text-zinc-500 ml-auto">Just now</span>
              </div>
               <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                <div className="w-2 h-2 rounded-full bg-brand-fuchsia" />
                <span className="text-xs font-mono text-zinc-300">Deploying to prod</span>
                <span className="text-xs text-zinc-500 ml-auto">2m ago</span>
              </div>
            </div>
          </div>

           {/* Card 3 */}
          <div className="bg-elevated border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-4xl font-bold text-white mb-2 font-display tracking-tight">254k+</h3>
            <p className="text-zinc-400 font-medium mb-6">Active Users</p>
            
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-elevated bg-zinc-800 overflow-hidden flex items-center justify-center">
                   <Users className="w-5 h-5 text-zinc-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 (If we want a 4th card, but specs said 2-column grid, first spans 2 rows, so that leaves 2 slots. Let's make the grid 3 rows or adjust. Wait, 1 spans 2 rows. We have 4 cards total. 
              Grid: cols=2.
              Row 1: Card 1 (spans 2), Card 2
              Row 2: Card 1 (cont.), Card 3
              Row 3: Card 4 (spans 2 cols)? Or maybe Card 3 and 4 share row 3.
              Let's put Card 4 spanning 2 columns, or just make Card 4 be in a new row if we want to stick to the requested 4 cards.
              Wait, 2 column grid.
              Col 1: Card 1 (row-span-2)
              Col 2: Card 2, Card 3
              That's 3 cards. Where does Card 4 go?
              I'll add a Card 4 spanning 2 columns below.
          */}
          <div className="md:col-span-2 bg-lime/10 border border-lime/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime/5 to-transparent z-0" />
            <div className="z-10 mb-6 md:mb-0">
               <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-4 text-lime border border-lime/30">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Built to Scale</h3>
              <p className="text-zinc-400 max-w-md">
                Global edge network ensures your application is blazingly fast everywhere.
              </p>
            </div>
            <div className="z-10 flex gap-4 w-full md:w-auto">
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center flex-1 md:w-32">
                <div className="text-2xl font-bold text-lime mb-1">99.99%</div>
                <div className="text-xs text-zinc-400">Uptime SLA</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center flex-1 md:w-32">
                <div className="text-2xl font-bold text-white mb-1">&lt;50ms</div>
                <div className="text-xs text-zinc-400">Latency</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
