import React from 'react';
import { motion } from 'framer-motion';

const LoaderSpinner = () => {
  return (
    <div className="relative w-20 h-20">
      <motion.div
        className="absolute top-0 left-0 w-full h-full border-4 border-accent rounded-full opacity-25"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 border-4 border-t-transparent border-accent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default LoaderSpinner;