import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * UNIFIED CARD SYSTEM
 *
 * Variants:
 * - default: Standard card with semantic surface
 * - elevated: Elevated surface (modals, dropdowns)
 * - interactive: Hover lift + shadow for clickable cards
 * - ghost: Transparent with border only
 *
 * Interaction Spec:
 * - interactive: hover:-translate-y-1 hover:shadow-lg hover:border-brand-300/50
 * - All cards: transition-all duration-300 ease-out
 */
const cardVariants = cva("rounded-xl border overflow-hidden transition-all duration-300 ease-out", {
  variants: {
    variant: {
      default: "bg-card border-border shadow-sm",
      elevated: "bg-card border-border shadow-2xl",
      interactive:
        "bg-card border-border shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-brand-300/50 cursor-pointer active:scale-[0.98] active:shadow-sm",
      ghost: "bg-transparent border-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold text-foreground leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/**
 * MediaCard - Card with image and overlay gradient
 * Use for thumbnails, gallery items, etc.
 */
const MediaCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    aspectRatio?: "square" | "video" | "portrait" | "landscape";
  }
>(({ className, aspectRatio = "square", children, ...props }, ref) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl overflow-hidden border border-border bg-card",
        "hover:border-brand-300/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out cursor-pointer group active:scale-[0.98]",
        aspectClasses[aspectRatio],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
MediaCard.displayName = "MediaCard";

/**
 * MediaCardOverlay - Gradient overlay for text on images
 */
const MediaCardOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
      className,
    )}
    {...props}
  />
));
MediaCardOverlay.displayName = "MediaCardOverlay";

/**
 * MediaCardContent - Content positioned at the bottom of a MediaCard
 */
const MediaCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute bottom-0 left-0 right-0 p-4", className)}
    {...props}
  />
));
MediaCardContent.displayName = "MediaCardContent";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  MediaCard,
  MediaCardOverlay,
  MediaCardContent,
  cardVariants,
};
