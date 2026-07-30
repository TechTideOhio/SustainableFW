"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2, Type, Hash, ImageIcon } from 'lucide-react';

export function SchemaBuilder({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-12 gap-6 bg-bg-app text-white p-6', className)}>
      <div className='col-span-3 space-y-4'>
        <h3 className='font-semibold'>Field Types</h3>
        <div className='grid grid-cols-2 gap-2'>
          <Button variant='outline' className='border-white/10 h-20 flex-col gap-2'><Type className='h-5 w-5'/> Text</Button>
          <Button variant='outline' className='border-white/10 h-20 flex-col gap-2'><Hash className='h-5 w-5'/> Number</Button>
          <Button variant='outline' className='border-white/10 h-20 flex-col gap-2'><ImageIcon className='h-5 w-5'/> Media</Button>
        </div>
      </div>
      <div className='col-span-5 space-y-4'>
        <h3 className='font-semibold'>Schema Fields</h3>
        <Card className='bg-bg-elevated border-white/10'>
          <CardContent className='p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <Badge variant='outline' className='text-blue-400 border-blue-400/30'><Type className='h-3 w-3 mr-1'/> String</Badge>
              <Button variant='ghost' size='icon' className='text-red-400 h-6 w-6'><Trash2 className='h-4 w-4'/></Button>
            </div>
            <Input defaultValue='title' className='bg-bg-app border-white/10 font-mono text-sm' />
            <div className='flex items-center gap-2'>
              <Switch defaultChecked /> <span className='text-xs'>Required</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='col-span-4 space-y-4'>
        <h3 className='font-semibold'>JSON Preview</h3>
        <pre className='p-4 bg-black/50 rounded-lg border border-white/10 text-xs text-green-400 font-mono overflow-auto'>
{JSON.stringify({
  type: "object",
  properties: {
    title: { type: "string" }
  },
  required: ["title"]
}, null, 2)}
        </pre>
      </div>
    </div>
  );
}
