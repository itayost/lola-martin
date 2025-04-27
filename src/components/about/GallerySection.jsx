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

  // Use a simplified return for all cases
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

      {/* Simple Mobile-First Lightbox for gallery images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black z-50 overscroll-none"
          ref={lightboxRef}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0, 
            bottom: 0,
            touchAction: 'none',
            overscrollBehavior: 'none'
          }}
        >
          {/* Full viewport image container */}
          <div className="w-full h-full flex flex-col">
            {/* Top navigation bar */}
            <div className="flex justify-between items-center p-4 bg-black/75">
              <span className="text-white text-sm">
                {gallery.findIndex(img => img.src === selectedImage.src) + 1} / {gallery.length}
              </span>
              
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white p-2 rounded-full bg-black/50"
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Image display area - fills the space */}
            <div 
              className="flex-grow flex items-center justify-center relative bg-black/75"
              onClick={() => setSelectedImage(null)}
              style={{ overscrollBehavior: 'none' }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || "Gallery image"}
                className="max-h-full max-w-full object-contain"
                onClick={e => e.stopPropagation()}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  touchAction: 'none'
                }}
              />
              
              {/* Overlay nav buttons */}
              <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
                    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
                    setSelectedImage(gallery[prevIndex]);
                  }}
                  className="h-full w-1/4 flex items-center justify-start pr-4 pointer-events-auto"
                  aria-label="Previous image"
                >
                  <div className="bg-black/50 text-white rounded-full p-3 w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
                    const nextIndex = (currentIndex + 1) % gallery.length;
                    setSelectedImage(gallery[nextIndex]);
                  }}
                  className="h-full w-1/4 flex items-center justify-end pl-4 pointer-events-auto"
                  aria-label="Next image"
                >
                  <div className="bg-black/50 text-white rounded-full p-3 w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Caption area */}
            <div className="p-4 bg-black/75 text-white text-center">
              <p className="text-base font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default GallerySection;