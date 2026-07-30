import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const kbdVariants = cva(
  "inline-flex items-center justify-center rounded border border-white/10 bg-bg-elevated font-mono font-medium text-white shadow-[0_2px_0_0_rgba(255,255,255,0.1)]",
  {
    variants: {
      size: {
        default: "h-6 min-w-[24px] px-1.5 text-xs",
        sm: "h-5 min-w-[20px] px-1 text-[10px]",
        lg: "h-8 min-w-[32px] px-2 text-sm",
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export interface KbdProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <kbd ref={ref} className={cn(kbdVariants({ size, className }))} {...props} />
    )
  }
)
Kbd.displayName = "Kbd"
export { Kbd, kbdVariants }
