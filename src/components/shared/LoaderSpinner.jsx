import React from 'react';
import { m } from 'framer-motion';

const LoaderSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center">
      {/* Pulsing outer ring */}
      <m.div
        className="absolute w-24 h-24 rounded-full border-4 border-tussock opacity-30"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Spinning loader */}
      <m.div
        className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default LoaderSpinner;