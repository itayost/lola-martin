// src/components/about/GallerySection.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import { galleryContent, gallery } from '../../data/aboutData';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const lightboxRef = useRef(null);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      // Lock scroll but maintain position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedImage]);

  // Handle keyboard navigation and escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
        const nextIndex = e.key === 'ArrowRight' 
          ? (currentIndex + 1) % gallery.length 
          : (currentIndex - 1 + gallery.length) % gallery.length;
        setSelectedImage(gallery[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Handle touch events for mobile swiping
  useEffect(() => {
    if (!lightboxRef.current || !selectedImage) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum swipe distance in pixels
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped left - go to next image
        const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
        const nextIndex = (currentIndex + 1) % gallery.length;
        setSelectedImage(gallery[nextIndex]);
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped right - go to previous image
        const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
        const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        setSelectedImage(gallery[prevIndex]);
      }
    };
    
    const element = lightboxRef.current;
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [selectedImage]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <Section className="py-16 md:py-24 bg-background text-text">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {galleryContent.title}
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
            {galleryContent.description}
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group touch-manipulation"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover w-full h-full"
                priority={index < 3}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <p className="text-white text-base md:text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            ref={lightboxRef}
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 touch-manipulation"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
              
              {/* Close button - larger and more accessible on mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white bg-black/70 rounded-full p-3 hover:bg-black/90 transition-colors z-10"
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Caption bar */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/70 p-3 md:p-4 rounded-lg">
                <p className="text-base md:text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-white/70 mt-1">
                  {gallery.findIndex(img => img.src === selectedImage.src) + 1} / {gallery.length}
                </p>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 md:px-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
                    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
                    setSelectedImage(gallery[prevIndex]);
                  }}
                  className="text-white bg-black/70 rounded-full p-2 md:p-3 hover:bg-black/90 transition-colors"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
                    const nextIndex = (currentIndex + 1) % gallery.length;
                    setSelectedImage(gallery[nextIndex]);
                  }}
                  className="text-white bg-black/70 rounded-full p-2 md:p-3 hover:bg-black/90 transition-colors"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Swipe instructions - only show on mobile */}
              <div className="absolute bottom-20 left-0 right-0 text-center text-white/50 text-sm md:hidden">
                החלק כדי לראות תמונות נוספות
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default GallerySection;