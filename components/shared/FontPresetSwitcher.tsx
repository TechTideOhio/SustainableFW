"use client";
import { useSyncExternalStore, useEffect } from "react";
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

function subscribePreset(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("font-preset-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("font-preset-change", onChange);
  };
}

function getPresetKey() {
  return localStorage.getItem("font-preset") ?? fontPresets[0].key;
}

export function FontPresetSwitcher({ className }: FontPresetSwitcherProps) {
  const presetKey = useSyncExternalStore(subscribePreset, getPresetKey, () => fontPresets[0].key);
  const activePreset = fontPresets.find((preset) => preset.key === presetKey) ?? fontPresets[0];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-display", activePreset.displayFont);
    root.style.setProperty("--font-body", activePreset.bodyFont);
    if (activePreset.monoFont) root.style.setProperty("--font-mono", activePreset.monoFont);
  }, [activePreset]);

  const applyPreset = (preset: FontPreset) => {
    localStorage.setItem("font-preset", preset.key);
    window.dispatchEvent(new Event("font-preset-change"));
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
