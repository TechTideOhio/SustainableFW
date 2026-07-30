"use client";
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, FileText, Type, Kanban, Calendar, Image as ImageIcon, Braces, FolderTree, FileDiff, Table, Box, ArrowLeft } from 'lucide-react';

const systems = [
  { id: 'data-table', title: 'Data Table System', description: 'Advanced data tables with sort, filter, and pagination.', icon: Database },
  { id: 'form-builder', title: 'Form Builder', description: 'Drag and drop form builder with validation.', icon: FileText },
  { id: 'rich-text', title: 'Rich Text Editor', description: 'WYSIWYG editor with block support.', icon: Type },
  { id: 'kanban', title: 'Kanban Board', description: 'Kanban-style drag and drop boards.', icon: Kanban },
  { id: 'calendar', title: 'Content Calendar', description: 'Monthly calendar view for scheduling.', icon: Calendar },
  { id: 'media', title: 'Media Manager', description: 'Asset library with folders and previews.', icon: ImageIcon },
  { id: 'schema', title: 'Schema Builder', description: 'Visual database schema design tool.', icon: Braces },
  { id: 'tree', title: 'Tree File Manager', description: 'VS Code style file explorer tree.', icon: FolderTree },
  { id: 'diff', title: 'Diff Viewer', description: 'Side-by-side code difference viewer.', icon: FileDiff },
  { id: 'content-table', title: 'Content Table', description: 'Spreadsheet-like content editing.', icon: Table },
  { id: 'webgl', title: 'WebGL Canvas', description: 'High-performance 3D rendering context.', icon: Box },
];

export default function SystemsPage() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);
  const activeItem = systems.find(s => s.id === activeSystem);
  const ActiveIcon = activeItem?.icon;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-4xl font-display font-bold text-white tracking-tight">Systems Inventory</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">Browse and interact with our complex component systems and patterns.</p>
      </div>
      
      {activeSystem ? (
        <div className="space-y-6">
          <Button 
            variant="ghost" 
            className="text-zinc-400 hover:text-white"
            onClick={() => setActiveSystem(null)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grid
          </Button>
          
          <Card className="glass-panel border-lime/20 bg-app/80 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-lime/10 text-lime flex items-center justify-center">
                  {ActiveIcon && <ActiveIcon className="w-6 h-6" />}
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">{activeItem?.title}</CardTitle>
                  <CardDescription className="text-zinc-400 text-base">{activeItem?.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="min-h-[500px] flex items-center justify-center border-t border-white/10 mt-6 pt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-lime/5 flex items-center justify-center mx-auto mb-4 border border-lime/20">
                  <Box className="w-8 h-8 text-lime/50" />
                </div>
                <h3 className="text-xl font-medium text-white">Component Preview Area</h3>
                <p className="text-zinc-500 max-w-md mx-auto">
                  The {systems.find(s => s.id === activeSystem)?.title} component would render here.
                  (Imported from @/components/cms)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {systems.map((sys) => (
            <Card key={sys.id} className="glass-panel border-white/10 hover:border-lime/30 transition-all duration-300 group hover:-translate-y-1 bg-elevated/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-white/5 text-zinc-400 flex items-center justify-center mb-4 group-hover:bg-lime/10 group-hover:text-lime transition-colors">
                  <sys.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-white group-hover:text-lime transition-colors">{sys.title}</CardTitle>
                <CardDescription className="text-zinc-400 line-clamp-2 min-h-[2.5rem]">{sys.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  className="w-full bg-white/5 text-white hover:bg-lime hover:text-black border border-white/10 hover:border-lime transition-all" 
                  onClick={() => setActiveSystem(sys.id)}
                >
                  View Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
