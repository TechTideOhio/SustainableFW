"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Box, SlidersHorizontal, Maximize2, Play, Pause } from 'lucide-react';

const showcases = [
  {
    id: 'floating-hero',
    title: 'Floating Hero',
    description: 'Interactive floating abstract geometry for hero sections.',
    status: 'Stable',
  },
  {
    id: 'particle-sphere',
    title: 'Particle Sphere',
    description: 'Dynamic particle system forming a sphere with physics.',
    status: 'Beta',
  },
  {
    id: 'wireframe-terrain',
    title: 'Wireframe Terrain',
    description: 'Procedurally generated rolling wireframe landscape.',
    status: 'Experimental',
  }
];

export default function ThreeDPage() {
  const [isPlaying, setIsPlaying] = React.useState<Record<string, boolean>>({
    'floating-hero': true,
    'particle-sphere': true,
    'wireframe-terrain': true,
  });

  const togglePlay = (id: string) => {
    setIsPlaying(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="border-lime text-lime bg-lime/5">
          <Box className="w-3 h-3 mr-2" />
          WebGL & Three.js
        </Badge>
        <h1 className="text-4xl font-display font-bold text-white tracking-tight">3D & WebGL Showcase</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          High-performance 3D rendering contexts wrapped in accessible React components for stunning visual experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {showcases.map((showcase) => (
          <Card key={showcase.id} className="glass-panel border-white/10 bg-app overflow-hidden flex flex-col xl:col-span-1 first:xl:col-span-2">
            <CardHeader className="flex flex-row items-start justify-between bg-elevated/50 border-b border-white/5 py-4">
              <div>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  {showcase.title}
                  <Badge variant="secondary" className={showcase.status === 'Stable' ? 'bg-lime/10 text-lime hover:bg-lime/20' : 'bg-white/10 text-zinc-300'}>
                    {showcase.status}
                  </Badge>
                </CardTitle>
                <CardDescription className="mt-1">{showcase.description}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => togglePlay(showcase.id)} className="text-zinc-400 hover:text-white">
                  {isPlaying[showcase.id] ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 relative min-h-[400px] flex flex-col">
              <div className="flex-1 bg-black/50 relative flex items-center justify-center">
                {/* 3D Canvas Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-app to-elevated flex items-center justify-center">
                  <div className="text-center opacity-30">
                    <Box className="w-16 h-16 mx-auto mb-4" />
                    <p>WebGL Canvas: {showcase.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-white/5 bg-elevated/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <SlidersHorizontal className="w-4 h-4" />
                  Controls
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <span className="text-xs text-zinc-500">Speed</span>
                  <Slider defaultValue={[50]} max={100} step={1} className="w-full sm:w-[100px]" />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <span className="text-xs text-zinc-500">Intensity</span>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-full sm:w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
