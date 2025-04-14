// src/components/ui/FloatingDecorations.jsx
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

/**
 * FloatingDecorations - Adds elegant floating decorative elements to any section
 * 
 * @param {Object} props
 * @param {string} props.variant - Style variant ('gold', 'blue', or 'mixed')
 * @param {number} props.count - Number of decorations to display (default: 12)
 * @param {string} props.minSize - Minimum size of decorations in pixels (default: "4px")
 * @param {string} props.maxSize - Maximum size of decorations in pixels (default: "12px")
 * @param {number} props.duration - Animation duration in seconds (default: 20)
 * @param {number} props.opacity - Opacity of decorations (0-1, default: 0.4)
 * @param {string} props.zIndex - CSS z-index value (default: "-1")
 */
const FloatingDecorations = ({
  variant = 'gold',
  count = 12,
  minSize = "4px",
  maxSize = "12px",
  duration = 20,
  opacity = 0.4,
  zIndex = "-1",
}) => {
  const [decorations, setDecorations] = useState([]);
  
  // Convert min/max sizes to numbers
  const minSizeNum = parseInt(minSize);
  const maxSizeNum = parseInt(maxSize);
  
  // Colors based on variant
  const getColors = () => {
    switch (variant) {
      case 'blue':
        return ['#0D2B4A', '#1A486E', '#2E5D8C'];
      case 'gold':
        return ['#DAA06D', '#C08445', '#F5D7B2'];
      case 'mixed':
        return ['#DAA06D', '#1A486E', '#F5D7B2', '#2E5D8C', '#C08445'];
      default:
        return ['#DAA06D', '#C08445', '#F5D7B2'];
    }
  };
  
  const colors = getColors();

  // Generate random decorations on mount
  useEffect(() => {
    const newDecorations = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${minSizeNum + Math.random() * (maxSizeNum - minSizeNum)}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: duration + (Math.random() * 10 - 5), // duration ±5s
      blur: `${1 + Math.random() * 5}px`,
      shape: Math.random() > 0.7 ? 'circle' : Math.random() > 0.5 ? 'square' : 'triangle',
    }));
    
    setDecorations(newDecorations);
  }, [count, colors, minSizeNum, maxSizeNum, duration]);

  // Render the shape based on type
  const renderShape = (shape, size, color) => {
    const sizePx = parseInt(size);
    
    switch (shape) {
      case 'circle':
        return (
          <div
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        );
      case 'square':
        return (
          <div
            className="rotate-45"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${sizePx / 2}px solid transparent`,
              borderRight: `${sizePx / 2}px solid transparent`,
              borderBottom: `${sizePx}px solid ${color}`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none" 
      style={{ zIndex }}
      aria-hidden="true"
    >
      {decorations.map((decoration) => (
        <motion.div
          key={decoration.id}
          className="absolute"
          style={{
            left: decoration.x,
            top: decoration.y,
            filter: `blur(${decoration.blur})`,
            opacity: opacity,
          }}
          animate={{
            y: [`${parseInt(decoration.y) - 50}px`, `${parseInt(decoration.y) + 50}px`],
            x: [`${parseInt(decoration.x) - 30}px`, `${parseInt(decoration.x) + 30}px`],
            opacity: [opacity * 0.7, opacity, opacity * 0.7],
          }}
          transition={{
            duration: decoration.duration,
            delay: decoration.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {renderShape(decoration.shape, decoration.size, decoration.color)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingDecorations;