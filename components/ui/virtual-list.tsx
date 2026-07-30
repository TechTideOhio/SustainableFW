"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface VirtualListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight: number | ((index: number) => number);
  height?: number | string;
  overscan?: number;
  className?: string;
}

export function VirtualList<T>({
  items,
  renderItem,
  itemHeight,
  height = 400,
  overscan = 3,
  className,
}: VirtualListProps<T>) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = React.useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const isFixedHeight = typeof itemHeight === "number";

  // Calculate total height and item positions
  const itemPositions = React.useMemo(() => {
    if (isFixedHeight) return []; // Optimization for fixed height
    
    let currentY = 0;
    return items.map((_, index) => {
      const height = (itemHeight as (idx: number) => number)(index);
      const pos = { top: currentY, height };
      currentY += height;
      return pos;
    });
  }, [items, itemHeight, isFixedHeight]);

  const totalHeight = isFixedHeight 
    ? items.length * (itemHeight as number)
    : itemPositions.length > 0 
      ? itemPositions[itemPositions.length - 1].top + itemPositions[itemPositions.length - 1].height
      : 0;

  // Determine visible range
  let startIndex = 0;
  let endIndex = 0;

  if (isFixedHeight) {
    const fixedHeight = itemHeight as number;
    startIndex = Math.max(0, Math.floor(scrollTop / fixedHeight) - overscan);
    endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + (typeof height === 'number' ? height : 800)) / fixedHeight) + overscan
    );
  } else {
    // Binary search could be used here for variable height, but linear is fine for reasonable numbers
    // or just a simple scan
    const viewportHeight = typeof height === 'number' ? height : 800; // approximation if string
    
    // Find start index
    for (let i = 0; i < itemPositions.length; i++) {
      if (itemPositions[i].top + itemPositions[i].height >= scrollTop) {
        startIndex = Math.max(0, i - overscan);
        break;
      }
    }
    
    // Find end index
    for (let i = startIndex; i < itemPositions.length; i++) {
      if (itemPositions[i].top > scrollTop + viewportHeight) {
        endIndex = Math.min(items.length - 1, i + overscan);
        break;
      }
      if (i === itemPositions.length - 1) {
        endIndex = items.length - 1;
      }
    }
  }

  const visibleItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    if (i >= 0 && i < items.length) {
      const top = isFixedHeight 
        ? i * (itemHeight as number)
        : itemPositions[i].top;
      
      const height = isFixedHeight 
        ? (itemHeight as number)
        : itemPositions[i].height;

      visibleItems.push(
        <div
          key={i}
          style={{
            position: "absolute",
            top,
            height,
            width: "100%",
          }}
        >
          {renderItem(items[i], i)}
        </div>
      );
    }
  }

  return (
    <div 
      className={cn("relative overflow-auto bg-bg-app border border-white/10 rounded-md", className)}
      style={{ height }}
      onScroll={handleScroll}
      ref={scrollRef}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems}
      </div>
    </div>
  );
}
