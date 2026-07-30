"use client";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MoreHorizontal } from 'lucide-react';

export function ContentTable({ className }: { className?: string }) {
  return (
    <div className={cn('bg-bg-app border border-white/10 rounded-lg text-white p-4 space-y-4', className)}>
      <div className='flex justify-between'>
        <div className='relative w-72'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input placeholder='Search content...' className='pl-8 bg-bg-elevated border-white/10' />
        </div>
        <Button className='bg-[#d9ff00] text-black'>Create New</Button>
      </div>
      <div className='border border-white/10 rounded-md overflow-hidden'>
        <table className='w-full text-sm text-left'>
          <thead className='bg-bg-elevated text-muted-foreground'>
            <tr>
              <th className='p-3 font-medium'>Title</th>
              <th className='p-3 font-medium'>Status</th>
              <th className='p-3 font-medium'>Author</th>
              <th className='p-3 font-medium'>Date</th>
              <th className='p-3 font-medium'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-t border-white/10 hover:bg-white/5'>
              <td className='p-3 font-medium'>Getting Started Guide</td>
              <td className='p-3'><Badge className='bg-emerald-500/20 text-emerald-400'>Published</Badge></td>
              <td className='p-3'>Jane Doe</td>
              <td className='p-3'>Oct 24, 2023</td>
              <td className='p-3 text-right'>
                <Button variant='ghost' size='icon' className='h-8 w-8'><MoreHorizontal className='h-4 w-4'/></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
