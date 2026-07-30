"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from 'date-fns';

export function ContentCalendar({ className }: { className?: string }) {
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });
  const startDay = getDay(start);

  return (
    <div className={cn('bg-bg-app text-white p-6 rounded-lg border border-white/10', className)}>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold'>{format(today, 'MMMM yyyy')}</h2>
        <div className='flex gap-2'>
          <Button variant='outline' size='icon' className='border-white/10'><ChevronLeft className='h-4 w-4' /></Button>
          <Button variant='outline' size='icon' className='border-white/10'><ChevronRight className='h-4 w-4' /></Button>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className='bg-bg-elevated p-2 text-center text-sm font-medium text-muted-foreground'>{d}</div>
        ))}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className='bg-bg-card min-h-[100px] p-2 opacity-50' />
        ))}
        {days.map(day => (
          <div key={day.toISOString()} className='bg-bg-card min-h-[100px] p-2 hover:bg-white/5 cursor-pointer'>
            <div className='text-sm mb-1'>{format(day, 'd')}</div>
            {format(day, 'd') === '15' && (
              <Badge className='bg-blue-500/20 text-blue-300 text-[10px] p-0.5 px-1 w-full truncate block'>Blog Post</Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
