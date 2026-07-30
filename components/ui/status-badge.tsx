import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium",
  {
    variants: {
      status: {
        online: "text-emerald-400",
        offline: "text-zinc-400",
        busy: "text-red-400",
        away: "text-amber-400",
        warning: "text-yellow-400",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        default: "text-sm px-2.5 py-1",
        lg: "text-base px-3 py-1.5",
      },
    },
    defaultVariants: { status: "offline", size: "default" },
  }
);

const dotColors: Record<string, string> = {
  online: "bg-emerald-400",
  offline: "bg-zinc-400",
  busy: "bg-red-400",
  away: "bg-amber-400",
  warning: "bg-yellow-400",
};

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

function StatusBadge({ status, size, children, pulse = true, className }: StatusBadgeProps) {
  const statusKey = status ?? "offline";
  return (
    <span className={cn(statusBadgeVariants({ status, size }), "bg-white/5 border border-white/10", className)}>
      <span className="relative flex h-2 w-2">
        {pulse && statusKey !== "offline" && (
          <span className={cn("absolute inset-0 rounded-full motion-safe:animate-ping opacity-75", dotColors[statusKey])} />
        )}
        <span className={cn("relative rounded-full h-2 w-2", dotColors[statusKey])} />
      </span>
      {children}
    </span>
  );
}

export { StatusBadge, statusBadgeVariants, type StatusBadgeProps };
