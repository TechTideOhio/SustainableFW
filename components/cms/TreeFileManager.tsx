"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Folder, FolderOpen, FileText, Plus, Upload, ChevronRight, ChevronDown } from 'lucide-react';

export function TreeFileManager({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-[500px] bg-bg-app border border-white/10 rounded-lg text-white', className)}>
      <div className='w-64 border-r border-white/10 flex flex-col'>
        <div className='p-3 border-b border-white/10 font-medium flex justify-between'>
          Explorer
          <Button variant='ghost' size='icon' className='h-6 w-6'><Plus className='h-4 w-4'/></Button>
        </div>
        <ScrollArea className='flex-1 p-2'>
          <div className='flex items-center gap-2 py-1 px-2 hover:bg-white/5 rounded cursor-pointer'>
            <ChevronDown className='h-4 w-4' />
            <FolderOpen className='h-4 w-4 text-blue-400' />
            <span className='text-sm'>Root</span>
          </div>
          <div className='pl-6 flex items-center gap-2 py-1 px-2 hover:bg-white/5 rounded cursor-pointer'>
            <ChevronRight className='h-4 w-4' />
            <Folder className='h-4 w-4 text-blue-400' />
            <span className='text-sm'>Documents</span>
          </div>
        </ScrollArea>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='p-3 border-b border-white/10 flex justify-between'>
          <div className='text-sm text-muted-foreground'>Root / Documents</div>
          <div className='flex gap-2'>
            <Button size='sm' variant='outline' className='border-white/10'><Upload className='h-4 w-4 mr-2'/> Upload</Button>
          </div>
        </div>
        <div className='p-4 grid grid-cols-4 gap-4'>
           <div className='p-4 bg-bg-elevated rounded-lg border border-white/10 flex flex-col items-center gap-2 cursor-pointer hover:border-white/30'>
             <FileText className='h-10 w-10 text-zinc-400' />
             <span className='text-sm text-center truncate w-full'>report.pdf</span>
           </div>
        </div>
      </div>
    </div>
  );
}
