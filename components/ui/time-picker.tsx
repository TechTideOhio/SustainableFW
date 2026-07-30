// @ts-nocheck
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Clock } from "lucide-react";

export interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  format?: "12h" | "24h";
  showSeconds?: boolean;
  className?: string;
}

export function TimePicker({
  value = "12:00",
  onChange,
  format = "12h",
  showSeconds = false,
  className,
}: TimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const parseTime = (timeStr: string) => {
    const parts = timeStr.split(":");
    let h = parseInt(parts[0] || "12", 10);
    const m = parseInt(parts[1] || "0", 10);
    const s = parseInt(parts[2] || "0", 10);
    
    let isPm = false;
    if (format === "12h") {
      if (h >= 12) {
        isPm = true;
        if (h > 12) h -= 12;
      }
      if (h === 0) h = 12;
    }
    
    return {
      hour: h,
      minute: m,
      second: s,
      isPm,
    };
  };

  const [time, setTime] = React.useState(parseTime(value));

  React.useEffect(() => {
    setTime(parseTime(value));
  }, [value, format]);

  const updateTime = (updates: Partial<typeof time>) => {
    const newTime = { ...time, ...updates };
    setTime(newTime);
    
    let h = newTime.hour;
    if (format === "12h") {
      if (newTime.isPm && h !== 12) h += 12;
      if (!newTime.isPm && h === 12) h = 0;
    }
    
    const hStr = h.toString().padStart(2, "0");
    const mStr = newTime.minute.toString().padStart(2, "0");
    const sStr = newTime.second.toString().padStart(2, "0");
    
    const timeString = showSeconds ? `${hStr}:${mStr}:${sStr}` : `${hStr}:${mStr}`;
    onChange?.(timeString);
  };

  const hours = format === "12h" ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const seconds = Array.from({ length: 60 }, (_, i) => i);

  const TimeColumn = ({ 
    items, 
    selectedValue, 
    onSelect, 
    formatItem = (item: number) => item.toString().padStart(2, "0") 
  }: { 
    items: number[]; 
    selectedValue: number; 
    onSelect: (val: number) => void;
    formatItem?: (val: number) => string;
  }) => (
    <ScrollArea className="h-48 w-16 sm:w-20">
      <div className="flex flex-col p-1 gap-1">
        {items.map((item) => (
          <Button
            key={item}
            variant={selectedValue === item ? "primary" : "ghost"}
            size="sm"
            className={cn(
              "w-full rounded-md",
              selectedValue !== item && "hover:bg-white/5 text-zinc-400"
            )}
            onClick={() => onSelect(item)}
          >
            {formatItem(item)}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "w-[150px] justify-start text-left font-normal bg-bg-card border-white/10",
            className
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {value} {format === "12h" ? (time.isPm ? "PM" : "AM") : ""}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-bg-elevated border-white/10">
        <div className="flex divide-x divide-white/10 p-2">
          <TimeColumn 
            items={hours} 
            selectedValue={time.hour} 
            onSelect={(hour) => updateTime({ hour })} 
          />
          <TimeColumn 
            items={minutes} 
            selectedValue={time.minute} 
            onSelect={(minute) => updateTime({ minute })} 
          />
          {showSeconds && (
            <TimeColumn 
              items={seconds} 
              selectedValue={time.second} 
              onSelect={(second) => updateTime({ second })} 
            />
          )}
          {format === "12h" && (
            <div className="flex flex-col gap-1 p-1">
              <Button
                variant={!time.isPm ? "primary" : "ghost"}
                size="sm"
                onClick={() => updateTime({ isPm: false })}
                className={cn(!time.isPm ? "" : "text-zinc-400 hover:bg-white/5")}
              >
                AM
              </Button>
              <Button
                variant={time.isPm ? "primary" : "ghost"}
                size="sm"
                onClick={() => updateTime({ isPm: true })}
                className={cn(time.isPm ? "" : "text-zinc-400 hover:bg-white/5")}
              >
                PM
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
