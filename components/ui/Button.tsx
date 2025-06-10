import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  // Determine classes based on variant and size
  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white border-transparent',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-white border-transparent',
    outline: 'bg-transparent hover:bg-green-500/10 text-green-500 border-green-500',
  };

  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium border-2 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Handle hover effect
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    };

    button.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full hover:translate-x-0 transform transition-transform duration-300 ease-out" />
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        className={combinedClasses}
        whileHover={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={combinedClasses}
      whileHover={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.95 }}
      style={{ '--x': '0px', '--y': '0px' } as React.CSSProperties}
    >
      {buttonContent}
    </motion.button>
  );
}
