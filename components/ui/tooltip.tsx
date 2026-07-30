"use client";
﻿import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Stable Tooltip wrapper that prevents the"controlled to uncontrolled" warning.
 * Once `open` is provided (even as undefined on first render), it locks into
 * uncontrolled mode. Only switches to controlled if `open` is explicitly a boolean
 * on the very first render.
 */
const Tooltip: React.FC<
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>
> = (props) => {
  const { open, defaultOpen, onOpenChange, ...rest } = props;
  const isControlled = React.useRef(open !== undefined && open !== null);

  if (isControlled.current) {
    return (
      <TooltipPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        {...rest}
      />
    );
  }

  // Uncontrolled — never pass `open` to avoid the warning
  return (
    <TooltipPrimitive.Root
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      {...rest}
    />
  );
};

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-xl border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
