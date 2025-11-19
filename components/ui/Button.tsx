import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variantStyles = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:scale-105 focus-visible:ring-primary-500',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 hover:shadow-md hover:scale-105 focus-visible:ring-gray-400',
      outline: 'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 hover:shadow-md hover:scale-105 focus-visible:ring-primary-500'
    };
    
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm sm:text-base',
      lg: 'px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
