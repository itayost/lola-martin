// src/components/about/GallerySection.jsx
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from "next/legacy/image";
import Section from '../ui/Section';
import FloatingDecorations from '../ui/FloatingDecorations';
import { galleryContent, gallery } from '../../data/aboutData';

const GallerySection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeImage, setActiveImage] = useState(null);
  const overlayRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageHoverVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  // Open the lightbox for a gallery item
  const openLightbox = (item) => {
    setActiveImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close the lightbox
  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  // Handle click outside the lightbox image to close it
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closeLightbox();
    }
  };

  return (
    <Section className="py-20 bg-background relative overflow-hidden">
      {/* Add the floating decorations in the background */}
      <FloatingDecorations variant="mixed" count={16} opacity={0.25} maxSize="16px" />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-text">
          {galleryContent.title}
        </motion.h2>
        <motion.div variants={fadeIn} className="w-24 h-1 bg-accent mx-auto mb-6"></motion.div>
        <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-lg text-muted">
          צפו בתמונות מהמסעדה, המנות המיוחדות שלנו, והאווירה המיוחדת שאנו מציעים
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10"
      >
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover="hover"
            variants={imageHoverVariants}
            className={`relative overflow-hidden rounded-lg ${
              index === 3 ? "md:col-span-2 md:row-span-2" : ""
            } group cursor-pointer bg-card border border-border/20 shadow-subtle`}
            style={{ height: index === 3 ? "auto" : "240px" }}
            onClick={() => openLightbox(item)}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-3 py-2 bg-gold/90 rounded-lg">
                  {item.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-xl shadow-elegant"
            >
              <div className="relative aspect-[4/3] w-full bg-background/50">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  layout="fill"
                  objectFit="contain"
                  quality={90}
                />
              </div>
              
              <div className="bg-card p-4 text-center border-t border-border">
                <h3 className="text-xl font-bold text-gold">{activeImage.alt}</h3>
              </div>
              
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-background/50 hover:bg-background/80 rounded-full p-2 text-white transition-colors"
                aria-label="סגור תמונה"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="absolute bottom-[72px] left-0 right-0 flex justify-center gap-2 pb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = gallery.findIndex(item => item.src === activeImage.src);
                    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
                    setActiveImage(gallery[prevIndex]);
                  }}
                  className="bg-gold hover:bg-goldDark text-background p-2 rounded-full transition-colors"
                  aria-label="התמונה הקודמת"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = gallery.findIndex(item => item.src === activeImage.src);
                    const nextIndex = (currentIndex + 1) % gallery.length;
                    setActiveImage(gallery[nextIndex]);
                  }}
                  className="bg-gold hover:bg-goldDark text-background p-2 rounded-full transition-colors"
                  aria-label="התמונה הבאה"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default GallerySection;