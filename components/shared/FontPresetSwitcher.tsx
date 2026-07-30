"use client";
import { useState, useEffect } from "react";
import { fontPresets, type FontPreset } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Type } from "lucide-react";

interface FontPresetSwitcherProps {
  className?: string;
}

export function FontPresetSwitcher({ className }: FontPresetSwitcherProps) {
  const [activePreset, setActivePreset] = useState<FontPreset>(fontPresets[0]);

  useEffect(() => {
    const saved = localStorage.getItem("font-preset");
    if (saved) {
      const preset = fontPresets.find((p) => p.key === saved);
      if (preset) {
        applyPreset(preset);
      }
    } else {
      // Default apply first preset to ensure CSS vars are set
      applyPreset(fontPresets[0]);
    }
  }, []);

  const applyPreset = (preset: FontPreset) => {
    setActivePreset(preset);
    localStorage.setItem("font-preset", preset.key);

    const root = document.documentElement;
    root.style.setProperty("--font-display", preset.displayFont);
    root.style.setProperty("--font-body", preset.bodyFont);
    if (preset.monoFont) {
      root.style.setProperty("--font-mono", preset.monoFont);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={cn("h-8 gap-2", className)}>
          <Type className="h-4 w-4" />
          <span className="hidden sm:inline-block text-xs font-medium">{activePreset.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px]">
        <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">Typography Preset</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {fontPresets.map((preset) => (
          <DropdownMenuItem
            key={preset.key}
            onClick={() => applyPreset(preset)}
            className={cn(
              "flex flex-col items-start gap-1.5 p-3 cursor-pointer",
              activePreset.key === preset.key && "bg-accent/10"
            )}
          >
            <div className="flex items-center w-full justify-between">
              <span className="font-semibold text-sm" style={{ fontFamily: preset.displayFont }}>
                {preset.label}
              </span>
              {activePreset.key === preset.key && (
                <span className="h-2 w-2 rounded-full bg-accent" />
              )}
            </div>
            <span className="text-xs text-muted-foreground" style={{ fontFamily: preset.bodyFont }}>
              {preset.description}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
