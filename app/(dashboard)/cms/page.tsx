"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, Type, Image as ImageIcon, Kanban, Calendar, FileText, FileDiff, FolderTree, Braces, Table } from 'lucide-react';

const cmsComponents = [
  { id: 'rich-text', label: 'Rich Text Editor', icon: Type },
  { id: 'media', label: 'Media Manager', icon: ImageIcon },
  { id: 'kanban', label: 'Kanban Board', icon: Kanban },
  { id: 'calendar', label: 'Content Calendar', icon: Calendar },
  { id: 'form', label: 'Form Builder', icon: FileText },
  { id: 'diff', label: 'Diff Viewer', icon: FileDiff },
  { id: 'tree', label: 'Tree File Manager', icon: FolderTree },
  { id: 'schema', label: 'Schema Builder', icon: Braces },
  { id: 'table', label: 'Content Table', icon: Table },
];

export default function CmsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-sm font-medium mb-4">
          <Layout className="w-4 h-4" />
          <span>Content Management</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-white tracking-tight">Content Management System</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A comprehensive suite of tools for managing rich content, media, structures, and workflows.
        </p>
      </div>

      <Tabs defaultValue="rich-text" className="w-full">
        <TabsList className="w-full justify-start h-auto flex-wrap gap-2 bg-transparent p-0 mb-8 border-b border-white/10 pb-4">
          {cmsComponents.map((component) => (
            <TabsTrigger 
              key={component.id} 
              value={component.id}
              className="data-[state=active]:bg-lime data-[state=active]:text-black data-[state=active]:border-lime border border-white/10 bg-elevated text-zinc-400 hover:text-white rounded-md px-4 py-2 transition-all"
            >
              <component.icon className="w-4 h-4 mr-2" />
              {component.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {cmsComponents.map((component) => (
          <TabsContent key={component.id} value={component.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <Card className="glass-panel border-white/10 bg-app overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[600px] flex flex-col items-center justify-center bg-elevated/30">
                  <component.icon className="w-16 h-16 text-white/5 mb-6" />
                  <h3 className="text-2xl font-medium text-white mb-2">{component.label} Component</h3>
                  <p className="text-zinc-500 max-w-md text-center">
                    This is where the actual {component.label} component imported from @/components/cms/ would be rendered with its sample data.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
