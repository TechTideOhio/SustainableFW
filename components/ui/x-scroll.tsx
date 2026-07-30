import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ScrollAreaProps } from "@radix-ui/react-scroll-area";

interface XScrollProps extends ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  scrollBarClassName?: string;
}

export default function XScroll({
  children,
  className,
  scrollBarClassName,
  ...props
}: XScrollProps) {
  return (
    <ScrollArea className={cn("w-full flex-1", className)} {...props}>
      {children}
      <ScrollBar orientation="horizontal" className={scrollBarClassName} />
    </ScrollArea>
  );
}
