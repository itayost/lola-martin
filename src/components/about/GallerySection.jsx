import { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import { galleryContent, gallery } from '../../data/aboutData';
import AnimatedElement from '../shared/AnimatedElement';
import { useAnimationContext } from '../../pages/_app';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const lightboxRef = useRef(null);
  const { animationsReady } = useAnimationContext();

  // Check if we're on mobile and set state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile(); // Initial check
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
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
      const swipeThreshold = 50;
      // Note: For RTL direction, we need to reverse the swipe direction logic
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe right to left (in RTL this moves to previous)
        const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
        const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        setSelectedImage(gallery[prevIndex]);
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe left to right (in RTL this moves to next)
        const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
        const nextIndex = (currentIndex + 1) % gallery.length;
        setSelectedImage(gallery[nextIndex]);
      }
    };

    const element = lightboxRef.current;
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [selectedImage, gallery]);

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

  // Fallback in case animations aren't ready on mobile
  if (isMobile && !animationsReady) {
    return (
      <Section className="py-16 md:py-24 bg-background text-text" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 animate-fallback animate-fallback-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {galleryContent.title}
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
              {galleryContent.description}
            </p>
          </div>

          <div 
            ref={containerRef}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group touch-manipulation animate-fallback animate-fallback-fadeIn"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full h-full image-loading">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    onLoad={({ target }) => {
                      const container = target.parentElement;
                      container.classList.remove('image-loading');
                      container.classList.add('image-loaded');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 flex items-end p-4 md:p-6">
                    <p className="text-white text-base md:text-lg font-medium group-hover-transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-16 md:py-24 bg-background text-text" id="gallery">
      <div className="container mx-auto px-4">
        <AnimatedElement 
          animation="fadeInUp" 
          className="text-center mb-10 md:mb-16"
          threshold={0.1} // Lower threshold for better detection
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {galleryContent.title}
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
            {galleryContent.description}
          </p>
        </AnimatedElement>

        <div 
          ref={containerRef}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {gallery.map((item, index) => (
            <AnimatedElement
              key={index}
              animation="fadeIn"
              delay={isMobile ? 0.05 * Math.min(index, 5) : 0.1 * Math.min(index, 5)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group touch-manipulation"
              onClick={() => setSelectedImage(item)}
              threshold={0.05} // Lower threshold for mobile
            >
              <div className="relative w-full h-full image-loading">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  onLoad={({ target }) => {
                    const container = target.parentElement;
                    container.classList.remove('image-loading');
                    container.classList.add('image-loaded');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 flex items-end p-4 md:p-6">
                  <p className="text-white text-base md:text-lg font-medium group-hover-transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.alt}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* Lightbox for gallery images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 touch-none"
          onClick={() => setSelectedImage(null)}
          ref={lightboxRef}
        >
          <div 
            className="relative max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container - making it MUCH larger for touch targets */}
            <div className="flex items-center justify-center w-full min-h-[60vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || "Gallery image"}
                className="max-h-[70vh] max-w-full rounded-lg object-contain"
                style={{touchAction: "none"}} /* prevent browser handling */
              />
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image caption */}
            <div className="absolute bottom-4 left-0 right-0 text-white text-center bg-black/50 p-3 rounded-lg mx-4">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-white/70 mt-1">
                {gallery.findIndex(img => img.src === selectedImage.src) + 1} / {gallery.length}
              </p>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
                const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
                setSelectedImage(gallery[prevIndex]);
              }}
              className="bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors w-12 h-12 flex items-center justify-center z-20"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
                const nextIndex = (currentIndex + 1) % gallery.length;
                setSelectedImage(gallery[nextIndex]);
              }}
              className="bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors w-12 h-12 flex items-center justify-center z-20"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile swipe hint */}
          <div className="absolute bottom-20 left-0 right-0 text-center text-white/50 text-sm md:hidden">
            החלק כדי לראות תמונות נוספות
          </div>
        </div>
      )}
    </Section>
  );
};

export default GallerySection;