"use client";
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Grid, List as ListIcon, Search, Upload, Image as ImageIcon, FileText, Film } from 'lucide-react';

const mockMedia = [
  { id: 1, name: 'hero-image.jpg', type: 'image', size: '2.4 MB', date: '2023-10-01' },
  { id: 2, name: 'presentation.pdf', type: 'document', size: '4.1 MB', date: '2023-10-02' },
  { id: 3, name: 'intro-video.mp4', type: 'video', size: '12.5 MB', date: '2023-10-03' },
];

export function MediaManager({ className }: { className?: string }) {
  const [view, setView] = useState<'grid'|'list'>('grid');
  return (
    <div className={cn('flex flex-col gap-4 bg-bg-app text-white p-4 rounded-lg', className)}>
      <div className='flex justify-between items-center'>
        <div className='relative w-64'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input placeholder='Search media...' className='pl-8 bg-bg-elevated border-white/10' />
        </div>
        <div className='flex gap-2'>
          <Button variant='outline' className='border-white/10' onClick={() => setView('grid')}><Grid className='h-4 w-4' /></Button>
          <Button variant='outline' className='border-white/10' onClick={() => setView('list')}><ListIcon className='h-4 w-4' /></Button>
          <Button className='bg-[#d9ff00] text-black hover:bg-[#d9ff00]/90'><Upload className='h-4 w-4 mr-2' /> Upload</Button>
        </div>
      </div>
      <div className={cn('grid gap-4', view === 'grid' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1')}>
        {mockMedia.map(item => (
          <Card key={item.id} className='bg-bg-card border-white/10'>
            <CardContent className={cn('p-4 flex', view === 'grid' ? 'flex-col items-center gap-2' : 'items-center justify-between')}>
              {item.type === 'image' ? <ImageIcon className='h-8 w-8' /> : item.type === 'video' ? <Film className='h-8 w-8' /> : <FileText className='h-8 w-8' />}
              <div className='text-sm text-center font-medium'>{item.name}</div>
              <Badge variant='secondary' className='text-xs'>{item.size}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
