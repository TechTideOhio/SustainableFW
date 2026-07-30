import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * LIMÓN BUTTON SYSTEM
 * Near-zero radius (1px). Flat. No shadows, no glows.
 * Primary: Lemon Zest fill, Black Olive text.
 * Ghost: Forest Ink text, no bg, no border.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.04em] ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lemon-zest focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-lemon-zest text-black-olive hover:bg-lemon-zest/90 active:scale-[0.97] rounded-[1px]",
        secondary:
          "bg-forest-ink text-warm-cream hover:bg-forest-ink/90 active:scale-[0.97] rounded-[1px]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:scale-[0.97] rounded-[1px]",
        outline:
          "border border-pure-white bg-transparent text-warm-cream hover:bg-pure-white/5 active:scale-[0.97] rounded-[1px]",
        ghost:
          "text-forest-ink hover:text-lemon-zest bg-transparent active:brightness-95 rounded-[1px]",
        link:
          "text-forest-ink underline-offset-4 hover:underline active:brightness-95",
        // Legacy aliases
        primary:
          "bg-lemon-zest text-black-olive hover:bg-lemon-zest/90 active:scale-[0.97] rounded-[1px]",
        glass:
          "bg-black-olive/80 backdrop-blur-md text-warm-cream hover:bg-black-olive/90 active:scale-[0.97] rounded-[1px] border border-sage-mist/15",
        edgeGlow:
          "border border-lemon-zest/30 bg-transparent text-lemon-zest hover:bg-lemon-zest/5 active:scale-[0.97] rounded-[1px]",
        lime:
          "bg-lemon-zest text-black-olive font-bold rounded-[1px] hover:bg-lemon-zest/90 active:scale-[0.97]",
        limeOutline:
          "bg-transparent text-warm-cream border border-pure-white/30 rounded-[1px] hover:border-lemon-zest hover:text-lemon-zest active:scale-[0.97]",
        limeGhost:
          "text-sage-mist hover:text-lemon-zest bg-transparent rounded-[1px] active:scale-[0.97]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-base",
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
