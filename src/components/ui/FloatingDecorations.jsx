// src/components/ui/FloatingDecorations.jsx
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const FloatingDecorations = ({
  variant = 'gold',
  count = 12,
  minSize = '4px',
  maxSize = '12px',
  duration = 20,
  opacity = 0.4,
  zIndex = '-1',
}) => {
  const [decorations, setDecorations] = useState([]);

  const minSizeNum = parseInt(minSize);
  const maxSizeNum = parseInt(maxSize);

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

  useEffect(() => {
    if (typeof window === 'undefined') return; // avoid SSR issues

    const newDecorations = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${minSizeNum + Math.random() * (maxSizeNum - minSizeNum)}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: duration + (Math.random() * 10 - 5),
      blur: `${1 + Math.random() * 5}px`,
      shape: Math.random() > 0.7 ? 'circle' : Math.random() > 0.5 ? 'square' : 'triangle',
    }));

    setDecorations(newDecorations);
  }, [count, colors, minSizeNum, maxSizeNum, duration]);

  const renderShape = (shape, size, color) => {
    const sizePx = parseInt(size);
    switch (shape) {
      case 'circle':
        return <div className="rounded-full" style={{ width: size, height: size, backgroundColor: color }} />;
      case 'square':
        return <div className="rotate-45" style={{ width: size, height: size, backgroundColor: color }} />;
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
      {decorations.map((d) => (
        <motion.div
          key={d.id}
          className="absolute"
          style={{ left: d.x, top: d.y, filter: `blur(${d.blur})`, opacity }}
          animate={{
            y: [`-${d.size}`, `${d.size}`],
            x: [`-${d.size}`, `${d.size}`],
            opacity: [opacity * 0.7, opacity, opacity * 0.7],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {renderShape(d.shape, d.size, d.color)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingDecorations;
