import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  animated = true,
  ...props
}) => {
  // Button base styles and variants
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-xl
    transition-all duration-300
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    group
    ${fullWidth ? 'w-full' : ''}
  `;


const variantStyles = {
  primary: `
    bg-gold text-black
    hover:bg-goldDark hover:text-white
    focus-visible:ring-gold
    shadow-md hover:shadow-lg active:shadow-sm
  `,
  outline: `
    border-2 border-gold text-gold bg-transparent
    hover:bg-gold hover:text-black
    focus-visible:ring-gold
  `,
  ghost: `
    text-white bg-transparent
    hover:bg-white/10 hover:text-white
    focus-visible:ring-gold
  `,
  danger: `
    bg-red-600 text-white
    hover:bg-red-700 hover:text-white
    focus-visible:ring-red-500
    shadow-md hover:shadow-lg
  `,
  light: `
    bg-white/10 text-white
    hover:bg-white/30 hover:text-white
    border border-white/20
    focus-visible:ring-white
  `
};

  const sizeStyles = {
    sm: 'py-1.5 px-3 text-xs gap-1.5',
    md: 'py-2.5 px-5 text-sm gap-2',
    lg: 'py-3 px-6 text-base gap-2.5',
    xl: 'py-4 px-8 text-lg gap-3'
  };

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  // Spinner and loading state
  const Spinner = () => (
    <m.span
      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ 
        repeat: Infinity, 
        duration: 1, 
        ease: "linear" 
      }}
    />
  );

  // Button content with optional icon and loading state
  const ButtonContent = () => (
    <>
      {loading && <Spinner />}
      
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''}`} />
      )}
      
      {children && <span>{children}</span>}
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className={`w-5 h-5 ${children ? 'ml-2' : ''}`} />
      )}
    </>
  );

  // Animated wrapper
  const AnimatedWrapper = ({ children }) => 
    animated ? (
      <m.div
        whileHover={{ 
          scale: disabled || loading ? 1 : 1.02,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: disabled || loading ? 1 : 0.98,
          transition: { duration: 0.1 }
        }}
      >
        {children}
      </m.div>
    ) : (
      <div>{children}</div>
    );

  // Render logic for different button types
  const renderButton = () => {
    const buttonProps = {
      className: buttonClasses,
      disabled: disabled || loading,
      'aria-disabled': disabled || loading,
      ...props
    };

    const content = <ButtonContent />;

    if (href) {
      const isExternal = href.startsWith('http');
      
      if (isExternal) {
        return (
          <AnimatedWrapper>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...buttonProps}
            >
              {content}
            </a>
          </AnimatedWrapper>
        );
      }
      
      return (
        <AnimatedWrapper>
          <Link href={href} {...buttonProps}>
            {content}
          </Link>
        </AnimatedWrapper>
      );
    }

    return (
      <AnimatedWrapper>
        <button 
          type="button"
          onClick={onClick}
          {...buttonProps}
        >
          {content}
        </button>
      </AnimatedWrapper>
    );
  };

  return renderButton();
};

// Icon Button Variant
Button.Icon = ({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  className = '',
  ariaLabel,
  ...props
}) => (
  <Button
    variant={variant}
    size={size}
    className={`!p-2 !aspect-square flex items-center justify-center ${className}`}
    icon={Icon}
    aria-label={ariaLabel || 'Icon Button'}
    {...props}
  />
);

export default Button;