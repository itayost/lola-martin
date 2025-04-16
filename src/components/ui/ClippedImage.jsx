// src/components/ui/ClippedImage.jsx
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

const ClippedImage = ({
  src,
  alt = '',
  clipPath = 'none', // Options: rtl, ltr, double, wave, diagonal, diamond, circle
  width = 600,
  height = 400,
  priority = false,
  className = '',
  animate = true,
  enableHover = true,
  enablePulse = false,
  ...props
}) => {
  // Map clipPath option to appropriate class name
  const getClipPathClass = () => {
    const clipPathMap = {
      rtl: 'clip-image-rtl',
      ltr: 'clip-image-ltr',
      double: 'clip-image-double',
      wave: 'clip-image-wave',
      diagonal: 'clip-image-diagonal',
      diamond: 'clip-image-diamond',
      circle: 'clip-image-circle',
      none: ''
    };
    
    return clipPathMap[clipPath] || '';
  };

  const clipPathClass = getClipPathClass();
  
  // Build CSS classes
  const cssClasses = [
    'overflow-hidden relative',
    clipPathClass,
    enableHover ? 'clip-hover' : '',
    enablePulse ? 'clip-animate-pulse' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: clipPath === 'circle' || clipPath === 'diamond' ? 0.8 : 1,
      y: ['double', 'wave'].includes(clipPath) ? 30 : 0,
      x: clipPath === 'rtl' ? 50 : clipPath === 'ltr' ? -50 : clipPath === 'diagonal' ? 30 : 0,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother animation
      }
    }
  };

  // Wrapper component based on animation preference
  const Wrapper = animate ? m.div : 'div';
  const animationProps = animate ? {
    initial: 'hidden',
    animate: 'visible',
    variants: imageVariants
  } : {};

  return (
    <Wrapper
      className={cssClasses}
      {...animationProps}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-cover"
        {...props}
      />
      
      {/* Optional overlay effect */}
      {clipPath !== 'none' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
    </Wrapper>
  );
};

export default ClippedImage;