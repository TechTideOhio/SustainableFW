import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const controls = useAnimation();
  
  // Determine classes based on variant and size
  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white border-transparent shadow-lg shadow-green-500/20',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-white border-transparent shadow-lg shadow-amber-500/20',
    outline: 'bg-transparent hover:bg-green-500/10 text-green-500 border-green-500',
    ghost: 'bg-transparent hover:bg-white/10 text-white border-transparent',
  };

  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium border-2 transition-all duration-300 ease-out transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95';
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  // Handle hover effect
  useEffect(() => {
    const button = buttonRef.current;
    if (!button || disabled) return;

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
  }, [disabled]);

  const handleMouseEnter = () => {
    if (!disabled) {
      controls.start({
        scale: 1.05,
        transition: { duration: 0.2 }
      });
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      controls.start({
        scale: 1,
        transition: { duration: 0.2 }
      });
    }
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <motion.span 
          className="absolute top-0 left-0 w-full h-full bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        className={combinedClasses}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        style={{ '--x': '0px', '--y': '0px' } as React.CSSProperties}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={combinedClasses}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={disabled ? {} : { scale: 0.95 }}
      disabled={disabled}
      style={{ '--x': '0px', '--y': '0px' } as React.CSSProperties}
    >
      {buttonContent}
    </motion.button>
  );
}
