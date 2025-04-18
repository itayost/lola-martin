import { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import { galleryContent, gallery } from '../../data/aboutData';
import AnimatedElement from '../shared/AnimatedElement';
import { useAnimationContext } from '../../pages/_app';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const lightboxRef = useRef(null);
  const { animationsReady } = useAnimationContext();

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
      if (touchStartX - touchEndX > swipeThreshold) {
        const currentIndex = gallery.findIndex(img => img.src === selectedImage.src);
        const nextIndex = (currentIndex + 1) % gallery.length;
        setSelectedImage(gallery[nextIndex]);
      } else if (touchEndX - touchStartX > swipeThreshold) {
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
    <Section className="py-16 md:py-24 bg-background text-text" id="gallery">
      <div className="container mx-auto px-4">
        <AnimatedElement 
          animation="fadeInUp" 
          className="text-center mb-10 md:mb-16"
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
              delay={0.1 * Math.min(index, 5)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group touch-manipulation"
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
            </AnimatedElement>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <m.div
            ref={lightboxRef}
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 touch-manipulation"
            onClick={() => setSelectedImage(null)}
          >
            <m.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-4xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  sizes="100vw"
                  fill
                  className="rounded-lg object-contain"
                  priority
                  unoptimized
                />
              </div>
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
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/70 p-3 md:p-4 rounded-lg">
                <p className="text-base md:text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-white/70 mt-1">
                  {gallery.findIndex(img => img.src === selectedImage.src) + 1} / {gallery.length}
                </p>
              </div>
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
              <div className="absolute bottom-20 left-0 right-0 text-center text-white/50 text-sm md:hidden">
                החלק כדי לראות תמונות נוספות
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default GallerySection;