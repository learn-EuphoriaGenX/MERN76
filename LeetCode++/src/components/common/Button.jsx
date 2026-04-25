import { useState } from 'react';
export default function Button({
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    children,
    fullWidth = false,
    loading = false,
    className = '',
    disabled,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-white text-black hover:bg-gray-200',
        secondary: 'bg-[#1a1c23] text-white border border-gray-700 hover:border-gray-600',
        outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
        ghost: 'text-gray-400 hover:text-white hover:bg-gray-800',
        gradient: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:brightness-110',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <span className="animate-spin mr-2">⟳</span>}

            {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : 18} className="mr-2" />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : 18} className="ml-2" />}
        </button>
    );
}