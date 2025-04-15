import React from 'react';
import NextImage from "next/image";
import { motion } from 'framer-motion';

// ✅ Static imports from assets
import lunch from '../../assets/images/highlights/lunch.jpg';
import dinner from '../../assets/images/highlights/dinner.jpg';
import sushi from '../../assets/images/highlights/sushi.jpg';

import moment_1 from '../../assets/images/moments/moment-1.jpg';
import moment_2 from '../../assets/images/moments/moment-2.jpg';
import moment_3 from '../../assets/images/moments/moment-3.jpg';

// ✅ Static path-to-import map
const STATIC_IMAGES = {
  '/images/highlights/lunch.jpg': lunch,
  '/images/highlights/dinner.jpg': dinner,
  '/images/highlights/sushi.jpg': sushi,

  '/images/moments/moment-1.jpg': moment_1,
  '/images/moments/moment-2.jpg': moment_2,
  '/images/moments/moment-3.jpg': moment_3,
};

// ✅ Default image sizes (override if needed)
const IMAGE_DIMENSIONS = {
  ...Object.keys(STATIC_IMAGES).reduce((acc, key) => {
    acc[key] = { width: 800, height: 600 };
    return acc;
  }, {}),
  default: { width: 1200, height: 800 },
};

const Image = ({
  src,
  alt = '',
  className = '',
  width: providedWidth,
  height: providedHeight,
  layout = 'responsive',
  objectFit = 'cover',
  priority = false,
  quality = 75,
  animated = true,
  ...props
}) => {
  const staticImage = STATIC_IMAGES[src] || src;

  const getDimensions = () => {
    if (providedWidth && providedHeight) {
      return { width: providedWidth, height: providedHeight };
    }
    if (IMAGE_DIMENSIONS[src]) return IMAGE_DIMENSIONS[src];
    if (staticImage?.width && staticImage?.height) {
      return {
        width: staticImage.width,
        height: staticImage.height,
      };
    }
    return IMAGE_DIMENSIONS.default;
  };

  const { width, height } = getDimensions();

  const baseClasses = `
    ${className}
    transition-opacity 
    duration-300 
    ease-in-out
  `;

  const Wrapper = animated ? motion.div : 'div';

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={baseClasses}
    >
      <NextImage
        src={staticImage}
        alt={alt}
        layout={layout}
        {...(layout !== 'fill' && { width, height })}
        objectFit={objectFit}
        priority={priority}
        quality={quality}
        className="w-full h-full object-cover"
        {...props}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </Wrapper>
  );
};

export default Image;