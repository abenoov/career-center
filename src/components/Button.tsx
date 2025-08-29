import { forwardRef, type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'sm',
      fullWidth = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-normal rounded-[10px] transition-colors focus:outline-none disabled:opacity-50 cursor-pointer';

    const variantStyles = {
      primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500',
      secondary:
        'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
      link: 'bg-transparent text-blue-600 hover:text-blue-700 hover:underline focus:ring-blue-500 p-0',
    };

    const sizeStyles = {
      sm: variant === 'link' ? 'text-sm' : 'px-3 py-2 text-sm',
      md: variant === 'link' ? 'text-base' : 'px-4 py-2.5 text-base',
      lg: variant === 'link' ? 'text-lg' : 'px-6 py-3 text-lg',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    const buttonClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      widthStyles,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={buttonClasses} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
