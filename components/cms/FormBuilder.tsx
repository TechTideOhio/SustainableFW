"use client";
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Type, Mail, AlignLeft, Eye } from 'lucide-react';

export function FormBuilder({ className }: { className?: string }) {
  const [fields] = useState([{ id: 1, label: 'Full Name', type: 'text', required: true }]);
  
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-4 gap-6 bg-bg-app text-white p-6', className)}>
      <div className='col-span-1 flex flex-col gap-2'>
        <h3 className='font-semibold mb-2'>Elements</h3>
        <Button variant='outline' className='justify-start border-white/10'><Type className='h-4 w-4 mr-2'/> Text Input</Button>
        <Button variant='outline' className='justify-start border-white/10'><Mail className='h-4 w-4 mr-2'/> Email</Button>
        <Button variant='outline' className='justify-start border-white/10'><AlignLeft className='h-4 w-4 mr-2'/> Textarea</Button>
      </div>
      <div className='col-span-2 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Form Editor</h3>
          <Button size='sm' className='bg-[#d9ff00] text-black'><Eye className='h-4 w-4 mr-2'/> Preview</Button>
        </div>
        {fields.map(field => (
          <Card key={field.id} className='bg-bg-elevated border-white/10'>
            <CardContent className='p-4 flex gap-4 items-center'>
              <div className='flex-1 grid grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <label className='text-xs'>Field Label</label>
                  <Input value={field.label} className='bg-bg-app border-white/10' readOnly />
                </div>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-2'>
                    <Switch checked={field.required} />
                    <span className='text-xs'>Required</span>
                  </div>
                  <Button variant='ghost' size='icon' className='text-red-400'><Trash2 className='h-4 w-4'/></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
