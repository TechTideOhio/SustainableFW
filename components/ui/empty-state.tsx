import * as React from "react"
import { cn } from "@/lib/utils"

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  heading: React.ReactNode
  description?: React.ReactNode
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, heading, description, primaryAction, secondaryAction, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col items-center justify-center p-8 text-center", className)} {...props}>
        {icon && <div className="mb-4 text-white/50">{icon}</div>}
        <h3 className="mb-1 text-lg font-semibold text-white">{heading}</h3>
        {description && <p className="mb-4 text-sm text-zinc-400 max-w-sm">{description}</p>}
        {(primaryAction || secondaryAction) && (
          <div className="flex items-center gap-3 mt-2">
            {secondaryAction}
            {primaryAction}
          </div>
        )}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"
export { EmptyState }
