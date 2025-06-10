import React, { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothScrollLink({
  href,
  children,
  className = '',
  onClick,
}: SmoothScrollLinkProps) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = href.replace(/.*#/, '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement, {
        offset: -100, // Adjust offset as needed
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
