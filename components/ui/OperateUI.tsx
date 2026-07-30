import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';
import Link from 'next/link';

interface SageCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function SageCard({ children, className, padding = 'md', ...props }: SageCardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-8',
  };

  return (
    <motion.div
      className={cn(
        'bg-bone-white rounded-xl shadow-subtle',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// PILL TAG
// Role: Uppercase metadata tag, axis label, or status badge.
// 4px radius, transparent or very-light fill, 1px border in Forest Ink (#09352e) or Lichen (#cad3d2). 
// Text is cinetype at 12px, weight 400, letter-spacing +0.30em, uppercase, color Forest Ink.
interface PillTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'outline' | 'filled';
}

export function PillTag({ children, className, variant = 'outline', ...props }: PillTagProps) {
  return (
    <span
      className={cn(
        'font-cinetype tracking-cinetype uppercase text-[12px] rounded-md px-2.5 py-1 inline-flex items-center justify-center font-normal',
        variant === 'outline' ? 'border border-lichen text-forest-ink bg-transparent' : 'bg-forest-ink text-bone-white border-none',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// MINT BUTTON
// Role: The only chromatic filled action in the system.
// Background Moss (#85c093), text Forest Ink (#09352e), 12px radius, padding 10px 20px, denim weight 500 at 14px.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
}

export const OperateButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl px-5 py-2.5 font-denim text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2';
    
    const variants = {
      primary: 'bg-moss text-forest-ink hover:brightness-105',
      outline: 'bg-transparent border shadow-subtle text-forest-ink hover:bg-forest-ink/5',
      ghost: 'bg-transparent text-forest-ink hover:bg-forest-ink/5',
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
OperateButton.displayName = 'OperateButton';

// GHOST LINK
// Role: Inline navigation and bracketed text links.
// No background, no border, denim at 14px weight 500, color Deep Fern (#007010). Often wrapped in square brackets.
export function GhostLink({ href, children, bracketed = false, className }: { href: string; children: React.ReactNode; bracketed?: boolean; className?: string }) {
  return (
    <Link href={href} className={cn('font-denim text-[14px] font-medium text-deep-fern hover:underline', className)}>
      {bracketed ? '[ ' : ''}{children}{bracketed ? ' ]' : ''}
    </Link>
  );
}

// AXIS BRACKET LABEL
// Role: Edge-of-canvas label that frames a section as a chart axis.
// muoto at 12px weight 500, color Forest Ink, with a leading bracket glyph ('[ Chaos ]' / '[ Clarity ]').
export function AxisLabel({ children, className, align = 'left' }: { children: React.ReactNode; className?: string; align?: 'left' | 'right' }) {
  return (
    <div className={cn('font-muoto tracking-muoto text-[12px] font-medium text-forest-ink flex items-center gap-1', className)}>
      {align === 'left' && <span className="opacity-70">[</span>}
      {children}
      {align === 'right' && <span className="opacity-70">]</span>}
    </div>
  );
}

// HAIRLINE DIVIDER
// Role: Thin separator between content bands.
// 1px line in Lichen (#cad3d2) or 0.5px inset in #cad3d2.
export function HairlineDivider({ className, dotted = false }: { className?: string; dotted?: boolean }) {
  return (
    <hr 
      className={cn(
        'w-full border-t border-lichen',
        dotted ? 'border-dashed' : 'border-solid shadow-subtle-3',
        className
      )} 
    />
  );
}

// FLOATING ROUND CHIP
// Role: Compact floating callout used for inline questions or status pings.
// Background Forest Ink (#09352e), text Bone White, 9999px radius (pill), padding 6px 12px, muoto at 12px weight 500.
export function FloatingChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'absolute bg-forest-ink text-bone-white rounded-full px-3 py-1.5 font-muoto text-[12px] font-medium shadow-md',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
