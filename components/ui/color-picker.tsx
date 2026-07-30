"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export type HSLA = { h: number; s: number; l: number; a: number };
export type ColorValue = string | HSLA;

export interface ColorPickerProps {
  value?: ColorValue;
  onChange?: (value: ColorValue) => void;
  className?: string;
}

const PRESETS = [
  "#d9ff00", // lime
  "#000000",
  "#ffffff",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#808080",
];

// Helper to convert hex to HSLA
function hexToHsla(hex: string): HSLA {
  let r = 0, g = 0, b = 0, a = 1;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else if (hex.length === 9) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
    a = parseInt(hex.slice(7, 9), 16) / 255;
  }
  
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100), a };
}

// Helper to convert HSLA to hex
function hslaToHex({ h, s, l, a }: HSLA): string {
  l /= 100;
  const aStr = Math.round(a * 255).toString(16).padStart(2, '0');
  const aHex = a < 1 ? aStr : '';
  
  if (s === 0) {
    const val = Math.round(l * 255).toString(16).padStart(2, '0');
    return `#${val}${val}${val}${aHex}`;
  }
  
  s /= 100;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue = h / 360;
  
  const toRgb = (t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  
  const r = Math.round(toRgb(hue + 1/3) * 255).toString(16).padStart(2, '0');
  const g = Math.round(toRgb(hue) * 255).toString(16).padStart(2, '0');
  const b = Math.round(toRgb(hue - 1/3) * 255).toString(16).padStart(2, '0');
  
  return `#${r}${g}${b}${aHex}`;
}

export function ColorPicker({
  value = "#d9ff00",
  onChange,
  className,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const hslaValue = React.useMemo(() => {
    if (typeof value === 'string') return hexToHsla(value);
    return value;
  }, [value]);

  const hexValue = React.useMemo(() => {
    if (typeof value === 'string') return value;
    return hslaToHex(value);
  }, [value]);

  const handleHslaChange = (updates: Partial<HSLA>) => {
    const newHsla = { ...hslaValue, ...updates };
    onChange?.(typeof value === 'string' ? hslaToHex(newHsla) : newHsla);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value;
    if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(newHex)) {
      onChange?.(typeof value === 'string' ? newHex : hexToHsla(newHex));
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn("w-full justify-start text-left font-normal bg-bg-card border-white/10 gap-2", className)}
        >
          <div 
            className="w-4 h-4 rounded-sm border border-white/20" 
            style={{ backgroundColor: hexValue }} 
          />
          <span className="flex-1 truncate">{hexValue}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3 bg-bg-elevated border-white/10">
        <div className="flex flex-col gap-4">
          
          {/* Sliders for H, S, L, A */}
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Hue</span>
                <span>{hslaValue.h}°</span>
              </div>
              <Slider
                max={360}
                step={1}
                value={[hslaValue.h]}
                onValueChange={([h]) => handleHslaChange({ h })}
                className="[&_[role=slider]]:bg-white"
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Saturation</span>
                <span>{hslaValue.s}%</span>
              </div>
              <Slider
                max={100}
                step={1}
                value={[hslaValue.s]}
                onValueChange={([s]) => handleHslaChange({ s })}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Lightness</span>
                <span>{hslaValue.l}%</span>
              </div>
              <Slider
                max={100}
                step={1}
                value={[hslaValue.l]}
                onValueChange={([l]) => handleHslaChange({ l })}
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Alpha</span>
                <span>{Math.round(hslaValue.a * 100)}%</span>
              </div>
              <Slider
                max={1}
                step={0.01}
                value={[hslaValue.a]}
                onValueChange={([a]) => handleHslaChange({ a })}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Input 
              value={hexValue}
              onChange={handleHexChange}
              className="h-8 bg-bg-app border-white/10 flex-1 text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <div className="text-xs text-muted-foreground">Presets</div>
            <div className="grid grid-cols-5 gap-2">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  className="w-full h-6 rounded-md border border-white/10 cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: preset }}
                  onClick={() => onChange?.(typeof value === 'string' ? preset : hexToHsla(preset))}
                />
              ))}
            </div>
          </div>
          
        </div>
      </PopoverContent>
    </Popover>
  );
}
