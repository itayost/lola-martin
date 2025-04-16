// src/components/motion/MotionComponents.jsx
import { m, AnimatePresence } from 'framer-motion';

// This file exports Framer Motion components to be dynamically imported
// This helps prevent SSR issues with Framer Motion

// Motion variants for animations
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  fadeUpMobile: {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5 
      } 
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      } 
    }
  }
};

// Motion components
export const MotionDiv = m.div;
export const MotionButton = m.button;

// Export AnimatePresence
export { AnimatePresence };

// Default export for dynamic import
export default {
  m,
  AnimatePresence,
  variants,
  MotionDiv,
  MotionButton
};