import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = 'elevate',
  onClick,
  href,
  image,
  imageAlt = '',
  imageHeight = 'auto',
  imagePlaceholder = '/images/placeholder.jpg',
  aspectRatio = 'auto',
  bottomContent,
  ...props
}) => {
  // Card variants with enhanced styling and consistency
  const variantStyles = {
    default: 'bg-card border border-border/30 backdrop-blur-sm',
    primary: 'bg-accent/5 border border-accent/20 backdrop-blur-sm',
    secondary: 'bg-primaryDark/20 border border-border/30 backdrop-blur-sm',
    outlined: 'bg-transparent border-2 border-border/50 backdrop-blur-sm',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg'
  };
  
  // Hover effects with more interactive options
  const hoverStyles = {
    none: '',
    elevate: 'hover:shadow-elegant hover:-translate-y-1 hover:border-accent/50',
    border: 'hover:border-accent',
    glow: 'hover:shadow-[0_0_15px_rgba(218,160,109,0.3)]',
    scale: 'hover:scale-[1.02]'
  };
  
  // Aspect ratio styles
  const aspectRatioStyles = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]'
  };
  
  // Card animations
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: hover === 'scale' ? 1.02 : 1,
      y: hover === 'elevate' ? -4 : 0,
      boxShadow: hover === 'glow' 
        ? '0 0 15px rgba(218,160,109,0.3)' 
        : 'none',
      borderColor: hover === 'border' 
        ? 'rgb(218,160,109)' 
        : 'inherit',
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };
  
  // Combine styles
  const cardClasses = `
    rounded-xl 
    overflow-hidden 
    transition-all 
    duration-300 
    group
    ${variantStyles[variant]}
    ${hoverStyles[hover]}
    ${aspectRatioStyles[aspectRatio]}
    ${className}
    ${onClick || href ? 'cursor-pointer' : ''}
  `;
  
  // Image component
  const CardImage = () => image && (
    <div 
      className="relative w-full" 
      style={{ height: imageHeight }}
    >
      <Image
        src={image}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={imagePlaceholder}
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
  
  // Card content wrapper
  const CardContent = () => (
    <div className="flex flex-col h-full">
      {image && <CardImage />}
      
      <div className={`
        flex-grow 
        p-6 
        ${image ? 'pt-4' : ''}
      `}>
        {children}
      </div>
      
      {bottomContent && (
        <div className="
          border-t 
          border-border/30 
          p-4 
          bg-background/5
        ">
          {bottomContent}
        </div>
      )}
    </div>
  );
  
  // Render logic for different card types
  const renderCard = () => {
    // Base props for interactive cards
    const cardProps = {
      className: cardClasses,
      onClick,
      ...props
    };

    // External link
    if (href && href.startsWith('http')) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          {...cardProps}
        >
          <CardContent />
        </motion.a>
      );
    }
    
    // Internal link
    if (href) {
      return (
        <Link href={href}>
          <motion.a
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            {...cardProps}
          >
            <CardContent />
          </motion.a>
        </Link>
      );
    }
    
    // Standard card
    return (
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        {...cardProps}
      >
        <CardContent />
      </motion.div>
    );
  };

  return renderCard();
};

// Subcomponents
Card.Title = ({ children, className = '', ...props }) => (
  <h3 
    className={`
      text-xl 
      font-bold 
      mb-2 
      text-text 
      group-hover:text-accent 
      transition-colors 
      duration-300 
      ${className}
    `} 
    {...props}
  >
    {children}
  </h3>
);

Card.Description = ({ children, className = '', ...props }) => (
  <p 
    className={`
      text-muted 
      text-sm 
      leading-relaxed 
      group-hover:text-text 
      transition-colors 
      duration-300 
      ${className}
    `} 
    {...props}
  >
    {children}
  </p>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div 
    className={`
      mt-auto 
      pt-4 
      border-t 
      border-border 
      flex 
      items-center 
      justify-between 
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

Card.Badge = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const badgeVariants = {
    default: 'bg-background text-muted',
    primary: 'bg-accent/20 text-accent',
    secondary: 'bg-accentLight/20 text-accentLight',
    success: 'bg-green-500/20 text-green-500',
    warning: 'bg-amber-500/20 text-amber-500',
    error: 'bg-red-500/20 text-red-500',
  };
  
  return (
    <span 
      className={`
        text-xs 
        px-2 
        py-1 
        rounded-full 
        inline-block 
        ${badgeVariants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Card;