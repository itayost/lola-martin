// src/components/ui/ScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-gold text-background shadow-lg hover:bg-goldDark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
          aria-label="חזרה לראש העמוד"
        >
          <ChevronUp className="h-6 w-6" />
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;