// /mnt/data/LoaderSpinner.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function LoaderSpinner() {
  return (
    <div className="relative">
      {/* Outer pulsating ring */}
      <motion.div
        className="w-24 h-24 border-4 border-accent rounded-full opacity-25"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Inner rotating circle */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 border-4 border-t-transparent border-accent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}