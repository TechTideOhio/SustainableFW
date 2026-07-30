"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Bold, Italic, Underline, Link, Heading1, Heading2, List, ListOrdered, ImageIcon, } from 'lucide-react';

export function RichTextEditor({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col border border-white/10 rounded-md bg-bg-app text-white overflow-hidden', className)}>
      <div className='flex items-center gap-1 p-2 border-b border-white/10 flex-wrap bg-bg-elevated'>
        <Button variant='ghost' size='icon' className='h-8 w-8'><Bold className='h-4 w-4' /></Button>
        <Button variant='ghost' size='icon' className='h-8 w-8'><Italic className='h-4 w-4' /></Button>
        <Button variant='ghost' size='icon' className='h-8 w-8'><Underline className='h-4 w-4' /></Button>
        <Separator orientation='vertical' className='h-6 mx-1 bg-white/10' />
        <Button variant='ghost' size='icon' className='h-8 w-8'><Heading1 className='h-4 w-4' /></Button>
        <Button variant='ghost' size='icon' className='h-8 w-8'><Heading2 className='h-4 w-4' /></Button>
        <Separator orientation='vertical' className='h-6 mx-1 bg-white/10' />
        <Button variant='ghost' size='icon' className='h-8 w-8'><List className='h-4 w-4' /></Button>
        <Button variant='ghost' size='icon' className='h-8 w-8'><ListOrdered className='h-4 w-4' /></Button>
        <Separator orientation='vertical' className='h-6 mx-1 bg-white/10' />
        <Button variant='ghost' size='icon' className='h-8 w-8'><Link className='h-4 w-4' /></Button>
        <Button variant='ghost' size='icon' className='h-8 w-8'><ImageIcon className='h-4 w-4' /></Button>
      </div>
      <div className='p-4 min-h-[300px]' contentEditable data-placeholder='Start writing...'></div>
      <div className='p-2 border-t border-white/10 text-xs text-muted-foreground flex justify-between bg-bg-elevated'>
        <span>Words: 0</span>
        <span>Characters: 0</span>
      </div>
    </div>
  );
}
