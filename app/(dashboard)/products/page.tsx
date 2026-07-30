"use client";
import { BarChart3, Rocket, Users, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const products = [
  {
    name: 'Analytics Pro',
    description: 'Real-time analytics dashboard with AI insights.',
    icon: BarChart3,
    features: ['Custom dashboards', 'Real-time metrics', 'AI predictive insights', 'Export to PDF/CSV'],
    tier: 'Pro',
  },
  {
    name: 'Deploy Engine',
    description: 'CI/CD pipeline with one-click deploys.',
    icon: Rocket,
    features: ['Auto-deployments', 'Rollbacks', 'Preview environments', 'Custom domains'],
    tier: 'Team',
  },
  {
    name: 'Team Hub',
    description: 'Collaboration workspace with real-time editing.',
    icon: Users,
    features: ['Real-time sync', 'Comments & mentions', 'Role-based access', 'Audit logs'],
    tier: 'Enterprise',
  },
];

const tiers = [
  { name: 'Features', pro: 'Pro', team: 'Team', enterprise: 'Enterprise' },
  { name: 'Users', pro: 'Up to 5', team: 'Up to 20', enterprise: 'Unlimited' },
  { name: 'Data Retention', pro: '30 days', team: '1 year', enterprise: 'Unlimited' },
  { name: 'Support', pro: 'Email', team: 'Priority Email', enterprise: '24/7 Phone & Email' },
  { name: 'Custom Integrations', pro: 'No', team: 'Yes', enterprise: 'Yes' },
  { name: 'SLA', pro: '99.9%', team: '99.99%', enterprise: '99.999%' },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-app text-white p-6 pb-24 md:p-12 space-y-16">
      {/* Hero Banner */}
      <section className="text-center space-y-4 max-w-3xl mx-auto mt-12">
        <Badge variant="outline" className="text-lime border-lime/50 px-4 py-1">
          Platform Suite
        </Badge>
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white">
          Our Products
        </h1>
        <p className="text-xl text-zinc-400">
          Everything you need to build, deploy, and scale your applications faster than ever before.
        </p>
      </section>

      {/* Product Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.name} className="bg-card border-white/10 hover:border-lime/50 transition-all duration-300 glass-panel overflow-hidden group flex flex-col">
            <div className="h-48 bg-gradient-to-br from-lime/20 to-transparent flex items-center justify-center p-6 border-b border-white/5 relative">
              <div className="absolute inset-0 bg-lime/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150" />
              <product.icon className="w-20 h-20 text-lime relative z-10" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                <Badge variant="secondary" className="bg-white/5 text-zinc-300">
                  {product.tier}
                </Badge>
              </div>
              <CardDescription className="text-zinc-400 text-base h-12">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-8">
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-lime mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-lime text-black hover:bg-lime/90 font-medium">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto pt-16">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-display font-bold">Compare Features</h2>
          <p className="text-zinc-400">Find the right plan for your team size and needs.</p>
        </div>
        
        <div className="rounded-xl border border-white/10 overflow-hidden overflow-x-auto bg-card/50 backdrop-blur-sm">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/10">
                <TableHead className="w-1/4 text-zinc-300">Feature</TableHead>
                <TableHead className="w-1/4 text-center text-white font-medium">Pro</TableHead>
                <TableHead className="w-1/4 text-center text-white font-medium">Team</TableHead>
                <TableHead className="w-1/4 text-center text-lime font-bold">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tiers.slice(1).map((row, _i) => (
                <TableRow key={row.name} className="border-white/5 hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium text-zinc-300">{row.name}</TableCell>
                  <TableCell className="text-center text-zinc-400">{row.pro}</TableCell>
                  <TableCell className="text-center text-zinc-400">{row.team}</TableCell>
                  <TableCell className="text-center text-zinc-100 font-medium">{row.enterprise}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
