import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-600 text-white hover:bg-brand-700 active:scale-[0.97] rounded-lg shadow-sm",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 active:scale-[0.97] rounded-lg border border-slate-200 dark:border-slate-700",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:scale-[0.97] rounded-lg",
        outline:
          "border border-slate-300 bg-background text-foreground hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 active:scale-[0.97] rounded-lg",
        ghost:
          "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 active:scale-[0.97] rounded-lg",
        link:
          "text-brand-600 underline-offset-4 hover:underline active:brightness-95",
        // Legacy aliases (mapped to new system for backwards compat)
        primary:
          "bg-brand-600 text-white hover:bg-brand-700 active:scale-[0.97] rounded-lg shadow-sm",
        glass:
          "bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md text-foreground hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-[0.97] rounded-lg border border-border",
        edgeGlow:
          "border border-brand-600/30 bg-background text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-600/10 active:scale-[0.97] rounded-lg",
        lime:
          "bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 active:scale-[0.97] shadow-sm",
        limeOutline:
          "bg-transparent text-foreground border border-slate-300 dark:border-slate-600 rounded-full hover:border-brand-600 hover:text-brand-600 active:scale-[0.97]",
        limeGhost:
          "text-slate-500 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full active:scale-[0.97]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs rounded-lg",
        md: "h-11 px-6 rounded-lg",
        lg: "h-12 px-8 text-base rounded-lg",
        xl: "h-14 px-10 text-lg rounded-lg",
        icon: "h-10 w-10 rounded-lg",
        "icon-sm": "h-8 w-8 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, children, disabled, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && "opacity-80 cursor-not-allowed"
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
