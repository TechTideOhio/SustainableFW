import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * TEMPLATE BADGE SYSTEM
 *
 * Primary variants (gradient, for emphasis):
 * - success: Lime gradient (NEW, active states)
 * - info: Cyan gradient (CORE, informational)
 * - warning: Orange gradient (HOT, attention)
 * - error: Red gradient (errors, destructive)
 *
 * Secondary variants (subtle):
 * - neutral: White/10 background
 * - outline: Border only
 *
 * Sizes:
 * - sm: Compact badges
 * - default: Standard badges
 * - lg: Prominent badges
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-bold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        // === NEW UNIFIED GRADIENT BADGES ===
        success:
          "bg-gradient-to-r from-lime-400 to-lime-500 text-black border-0",
        info: "bg-gradient-to-r from-cyan-400 to-cyan-500 text-black border-0",
        warning:
          "bg-gradient-to-r from-orange-400 to-orange-500 text-black border-0",
        error: "bg-gradient-to-r from-red-500 to-rose-500 text-white border-0",

        // Subtle variants
        neutral: "bg-white/10 text-white border-0",
        outline: "bg-transparent text-zinc-400 border border-white/20",

        // === LEGACY VARIANTS (for backwards compatibility) ===
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      size: {
        sm: "px-2 py-0.5 text-2xs rounded-md",
        default: "px-2.5 py-1 text-xs rounded-lg",
        lg: "px-3 py-1.5 text-xs rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
