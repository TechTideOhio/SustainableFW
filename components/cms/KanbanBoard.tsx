"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, MoreHorizontal, GripVertical, Calendar } from 'lucide-react';

const columns = [
  { id: 'draft', title: 'Draft', color: 'bg-zinc-500' },
  { id: 'review', title: 'In Review', color: 'bg-blue-500' },
  { id: 'approved', title: 'Approved', color: 'bg-green-500' },
  { id: 'scheduled', title: 'Scheduled', color: 'bg-amber-500' },
  { id: 'published', title: 'Published', color: 'bg-emerald-500' }
];

export function KanbanBoard({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-4 overflow-x-auto p-4 bg-bg-app h-full min-h-[500px]', className)}>
      {columns.map(col => (
        <div key={col.id} className='flex-shrink-0 w-80 flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className={cn('w-3 h-3 rounded-full', col.color)} />
              <h3 className='font-semibold text-white'>{col.title}</h3>
              <Badge variant='secondary' className='bg-white/10'>2</Badge>
            </div>
            <Button variant='ghost' size='icon' className='h-8 w-8'><MoreHorizontal className='h-4 w-4' /></Button>
          </div>
          <ScrollArea className='flex-1'>
            <div className='flex flex-col gap-3'>
              <Card className='bg-bg-card border-white/10 text-white'>
                <CardContent className='p-3'>
                  <div className='flex justify-between items-start mb-2'>
                    <Badge className='bg-[#d9ff00]/20 text-[#d9ff00]'>Article</Badge>
                    <GripVertical className='h-4 w-4 text-muted-foreground' />
                  </div>
                  <h4 className='font-medium mb-2'>Example Content Item</h4>
                  <div className='flex items-center justify-between text-xs text-muted-foreground'>
                    <span>Author Name</span>
                    <span className='flex items-center gap-1'><Calendar className='h-3 w-3'/> Oct 12</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
          <Button variant='ghost' className='w-full text-muted-foreground hover:text-white'><Plus className='h-4 w-4 mr-2' /> Add Card</Button>
        </div>
      ))}
    </div>
  );
}
