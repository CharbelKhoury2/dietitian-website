import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  as?: typeof Link | 'button' | 'a';
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    loading = false,
    className = '',
    onClick,
    type = 'button',
    as: Component = 'button',
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white shadow-sm hover:shadow-md focus:ring-sage-500',
      secondary: 'bg-coral-500 hover:bg-coral-600 text-white shadow-sm hover:shadow-md focus:ring-coral-500',
      outline: 'border-2 border-sage-300 text-sage-700 hover:bg-sage-50 hover:border-sage-400 focus:ring-sage-500',
      ghost: 'text-sage-700 hover:bg-sage-50 focus:ring-sage-500',
    };
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    };
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const buttonContent = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </>
    );

    if (Component === Link) {
      return (
        <Link
          ref={ref as any}
          className={combinedClasses}
          {...props}
        >
          {buttonContent}
        </Link>
      );
    }

    if (Component === 'a') {
      return (
        <a
          ref={ref as any}
          className={combinedClasses}
          {...props}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        ref={ref as any}
        type={type}
        className={combinedClasses}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
