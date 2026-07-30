import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * TEMPLATE 3 BUTTON SYSTEM (SaaS Circular — Lime Accent)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-lime hover:bg-lime/90 text-black rounded-xl",
        secondary:
          "bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl",
        ghost: "text-zinc-400 hover:text-white bg-transparent",
        destructive:
          "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl",
        glass: "glass-panel text-white hover:bg-white/10 hover:border-white/20",
        edgeGlow: "lime-edge bg-transparent text-white hover:text-lime hover:bg-white/5 shadow-[0_0_15px_-5px_rgb(var(--lime-rgb)/0.3)]",
        
        // === LEGACY VARIANTS (for backwards compatibility) ===
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Marketing CTAs (pill style)
        lime: "bg-lime text-black font-bold rounded-full hover:brightness-110 hover:scale-105 shadow-[0_0_30px_-10px_rgb(var(--lime-rgb)/0.4)]",
        limeOutline:
          "bg-transparent text-white border border-white/20 rounded-full hover:border-lime hover:text-lime hover:bg-white/5",
        limeGhost:
          "text-zinc-400 hover:text-lime hover:bg-white/5 rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
