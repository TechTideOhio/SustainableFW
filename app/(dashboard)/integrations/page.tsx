"use client";
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const categories = ['All', 'Developer Tools', 'Communication', 'Analytics', 'Storage', 'Security'];

const allIntegrations = [
  { name: 'Slack', category: 'Communication', desc: 'Send notifications to Slack channels.', color: 'bg-purple-500/20 text-purple-400' },
  { name: 'Code', category: 'Developer Tools', desc: 'Sync code and trigger automated builds.', color: 'bg-zinc-700/50 text-white' },
  { name: 'Jira', category: 'Developer Tools', desc: 'Create and track issues directly.', color: 'bg-blue-500/20 text-blue-400' },
  { name: 'Figma', category: 'Developer Tools', desc: 'Import designs and assets seamlessly.', color: 'bg-pink-500/20 text-pink-400' },
  { name: 'AWS', category: 'Storage', desc: 'Connect S3 buckets and EC2 instances.', color: 'bg-orange-500/20 text-orange-400' },
  { name: 'Google Cloud', category: 'Storage', desc: 'Integrate with GCP services easily.', color: 'bg-blue-400/20 text-blue-300' },
  { name: 'Stripe', category: 'Analytics', desc: 'Track payments and revenue metrics.', color: 'bg-indigo-500/20 text-indigo-400' },
  { name: 'Twilio', category: 'Communication', desc: 'Send SMS and voice notifications.', color: 'bg-red-500/20 text-red-400' },
  { name: 'Datadog', category: 'Analytics', desc: 'Monitor application performance.', color: 'bg-purple-600/20 text-purple-300' },
  { name: 'Sentry', category: 'Developer Tools', desc: 'Track exceptions and errors in real-time.', color: 'bg-red-600/20 text-red-300' },
  { name: 'MongoDB', category: 'Storage', desc: 'Connect your NoSQL databases.', color: 'bg-green-500/20 text-green-400' },
  { name: 'Redis', category: 'Storage', desc: 'In-memory data structure store.', color: 'bg-red-700/20 text-red-400' },
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const filteredIntegrations = allIntegrations.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          integration.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'All' || integration.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-app text-white p-6 pb-24 md:p-12 max-w-7xl mx-auto space-y-12">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight mb-2">Integrations</h1>
          <p className="text-zinc-400">Connect your favorite tools and automate workflows.</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <Input 
            placeholder="Search integrations..." 
            className="pl-10 bg-surface border-white/10 focus-visible:ring-lime"
            aria-label="Search integrations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Featured Banner */}
      <div className="bg-gradient-to-r from-lime/20 via-lime/5 to-transparent border border-lime/20 rounded-2xl p-8 relative overflow-hidden lime-edge">
        <div className="relative z-10 max-w-2xl space-y-4">
          <Badge className="bg-lime/20 text-lime hover:bg-lime/30 border-none">Featured</Badge>
          <h2 className="text-2xl font-bold">Code Enterprise Integration</h2>
          <p className="text-zinc-300">
            Sync your entire organization's repositories, automate CI/CD pipelines, and manage 
            access controls directly from our platform.
          </p>
          <Button className="bg-lime text-black hover:bg-lime/90 mt-2">
            Configure Integration
          </Button>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-app to-transparent z-0" />
      </div>

      {/* Tabs and Grid */}
      <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          <TabsList className="bg-surface border border-white/10 p-1 w-max">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="data-[state=active]:bg-card data-[state=active]:text-lime data-[state=active]:shadow-sm"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0 outline-none">
          {filteredIntegrations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredIntegrations.map(integration => (
                <Card key={integration.name} className="bg-card border-white/5 hover:border-lime/30 transition-colors glass-panel flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-display", integration.color)}>
                        {integration.name.charAt(0)}
                      </div>
                      <Badge variant="outline" className="border-white/10 text-zinc-400 bg-black/20 text-xs font-normal">
                        {integration.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-zinc-400 text-sm">
                      {integration.desc}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full border-white/10 hover:border-lime/50 hover:bg-lime/10 hover:text-lime transition-colors">
                      Connect
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface/50 rounded-xl border border-white/5 border-dashed">
              <p className="text-zinc-500">No integrations found matching "{searchQuery}".</p>
              <Button 
                variant="link" 
                className="text-lime mt-2"
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
