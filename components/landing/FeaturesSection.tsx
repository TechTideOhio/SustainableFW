"use client";
import { TreePine, Activity, Users, Server } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-cream tracking-[0.04em] mb-4">
            Everything you need to manage carbon assets
          </h2>
          <p className="text-sage-mist tracking-[0.02em] text-lg max-w-2xl">
            From satellite-fed 3D replicas to audit-ready carbon ledgers, ForestTwin gives your team full visibility into every hectare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
          {/* Card 1: Spans 2 rows */}
          <div className="row-span-1 md:row-span-2 bg-warm-cream rounded-none p-8 flex flex-col relative overflow-hidden group">
            <div className="z-10">
              <div className="w-12 h-12 bg-forest-ink/10 text-forest-ink rounded-[1px] flex items-center justify-center mb-6">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-black-olive tracking-[0.04em] mb-2">Interactive 3D Digital Twin</h3>
              <p className="text-forest-ink font-medium max-w-sm">
                Explore a living 3D replica of your forest. Tree health, canopy density, and biomass update in real time from IoT sensors and satellite feeds.
              </p>
            </div>
            {/* Image Container */}
            <div className="mt-8 flex-1 relative rounded-none overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <img 
                src="/images/digital_twin_3d.jpg" 
                alt="3D Digital Twin Visualization" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black-olive border border-sage-mist/15 rounded-none p-8 flex flex-col justify-between group transition-colors overflow-hidden relative">
            <img 
              src="/images/carbon_dashboard.jpg"
              alt="Carbon Dashboard UI"
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="z-10 relative">
              <div className="w-10 h-10 bg-lemon-zest/10 text-lemon-zest rounded-[1px] flex items-center justify-center mb-4 backdrop-blur-md">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-warm-cream tracking-[0.04em] mb-2">Live Carbon Telemetry</h3>
              <p className="text-sage-mist text-sm">
                Track sequestration rates, soil moisture, and canopy cover as they change. No waiting for quarterly reports.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 z-10 relative">
              <div className="flex items-center gap-3 bg-forest-ink/20 backdrop-blur-md p-3 rounded-[1px] border border-sage-mist/10">
                <div className="w-2 h-2 rounded-[1px] bg-lemon-zest animate-pulse" />
                <span className="text-xs font-mono text-warm-cream">CO₂ absorbed: 12.4t</span>
              </div>
              <div className="flex items-center gap-3 bg-forest-ink/20 backdrop-blur-md p-3 rounded-[1px] border border-sage-mist/10">
                <div className="w-2 h-2 rounded-[1px] bg-lemon-zest" />
                <span className="text-xs font-mono text-warm-cream">Sensor sync complete</span>
                <span className="text-xs text-sage-mist ml-auto">2m ago</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black-olive border border-sage-mist/15 rounded-none p-8 flex flex-col justify-center items-center text-center group transition-colors relative overflow-hidden">
            <h3 className="text-4xl font-bold text-lemon-zest tracking-[0.06em] mb-2 font-display">2.1M+</h3>
            <p className="text-sage-mist font-medium mb-6">Hectares Monitored</p>
            
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 border-2 border-black-olive bg-forest-ink/30 rounded-none overflow-hidden flex items-center justify-center">
                  <Users className="w-5 h-5 text-sage-mist" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-forest-ink/10 border border-forest-ink/20 rounded-none p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative">
            <div className="z-10 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-lemon-zest/10 text-lemon-zest border border-lemon-zest/20 rounded-[1px] flex items-center justify-center mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-warm-cream tracking-[0.04em] mb-2">Enterprise Grade Infrastructure</h3>
              <p className="text-sage-mist max-w-md">
                Your data stays secure and accessible across regions. Built for the compliance requirements of global ESG programs.
              </p>
            </div>
            <div className="z-10 flex gap-4 w-full md:w-auto">
              <div className="bg-black-olive border border-sage-mist/15 rounded-[1px] backdrop-blur-sm p-4 text-center flex-1 md:w-32">
                <div className="text-2xl font-bold text-lemon-zest mb-1">99.99%</div>
                <div className="text-xs text-sage-mist">Uptime SLA</div>
              </div>
              <div className="bg-black-olive border border-sage-mist/15 rounded-[1px] backdrop-blur-sm p-4 text-center flex-1 md:w-32">
                <div className="text-2xl font-bold text-lemon-zest mb-1">SOC 2</div>
                <div className="text-xs text-sage-mist">Compliant</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
