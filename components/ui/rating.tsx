"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: number;
  readonly?: boolean;
  disabled?: boolean;
  className?: string;
}

function Rating({ value, onChange, max = 5, size = 20, readonly = false, disabled = false, className }: RatingProps) {
  const [hover, setHover] = React.useState<number | null>(null);
  const displayValue = hover ?? value;

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", disabled && "opacity-50 cursor-not-allowed", className)}
      role="slider"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label="Rating"
      tabIndex={readonly || disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (readonly || disabled || !onChange) return;
        if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          e.preventDefault();
          onChange(Math.min(value + 1, max));
        }
        if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          e.preventDefault();
          onChange(Math.max(value - 1, 0));
        }
      }}
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i < displayValue;
        return (
          <button
            key={i}
            type="button"
            disabled={readonly || disabled}
            onClick={() => onChange?.(i + 1)}
            onMouseEnter={() => !readonly && !disabled && setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
            className={cn(
              "transition-colors focus:outline-none",
              !readonly && !disabled && "cursor-pointer hover:scale-110"
            )}
            aria-label={`${i + 1} star${i === 0 ? "" : "s"}`}
          >
            <Star
              size={size}
              className={cn(
                "transition-colors",
                filled ? "fill-amber-400 text-amber-400" : "fill-transparent text-zinc-600"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export { Rating, type RatingProps };
