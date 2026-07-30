import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const dotVariants = cva("h-3 w-3 rounded-full border-2 shrink-0", {
  variants: {
    status: {
      default: "border-zinc-500 bg-zinc-700",
      success: "border-emerald-500 bg-emerald-500/20",
      warning: "border-amber-500 bg-amber-500/20",
      error: "border-red-500 bg-red-500/20",
      info: "border-blue-500 bg-blue-500/20",
    },
  },
  defaultVariants: { status: "default" },
});

interface TimelineItemProps extends VariantProps<typeof dotVariants> {
  title: string;
  description?: string;
  timestamp?: string;
  children?: React.ReactNode;
}

function TimelineItem({ title, description, timestamp, status, children }: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {/* Connector line */}
      <div className="flex flex-col items-center">
        <div className={dotVariants({ status })} />
        <div className="w-px flex-1 bg-white/10" />
      </div>
      {/* Content */}
      <div className="flex-1 -mt-0.5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm font-medium text-white">{title}</p>
          {timestamp && <time className="text-xs text-zinc-500 shrink-0">{timestamp}</time>}
        </div>
        {description && <p className="mt-1 text-sm text-zinc-400">{description}</p>}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("space-y-0", className)}>{children}</div>;
}

export { Timeline, TimelineItem, type TimelineProps, type TimelineItemProps };
