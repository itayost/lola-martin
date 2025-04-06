import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Standardized hero section component for consistent design across all pages
 * (excluding home page which typically has a different design)
 * 
 * @param {Object} props
 * @param {string} props.title - The main heading text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {string} props.imageSrc - Path to the background image
 * @param {string} props.imageAlt - Alt text for the background image
 * @param {ReactNode} props.children - Optional additional content
 */
const HeroSection = ({ 
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children 
}) => {
  return (
    <div className="relative h-[40vh] md:h-[40vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {subtitle && (
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;