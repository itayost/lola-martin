import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import LogoLoader from '../ui/LogoLoader';
import { useAnimationContext } from '../../pages/_app';
import { useRestaurantInfo } from '../shared/RestaurantInfo';

const Hero = () => {
  const { animationsReady, isMobile } = useAnimationContext();
  const info = useRestaurantInfo();
  
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Refs
  const heroRef = useRef(null);
  const intervalRef = useRef(null);
  const loadedImagesCount = useRef(0);
  
  // Hero images array
  const heroImages = [
    '/images/hero/right-1.jpg',
    '/images/hero/right-2.jpg', 
    '/images/hero/right-3.jpg'
  ];
  
  // Rotation interval - 5 seconds
  const ROTATION_INTERVAL = 5000;

  // Handle viewport height changes on mobile (address bar)
  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight;
      setViewportHeight(`${vh}px`);
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };

    updateViewportHeight();
    
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);

  // Preload all images for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => {
            loadedImagesCount.current += 1;
            // If all images are loaded, set loading to false
            if (loadedImagesCount.current === heroImages.length) {
              setImagesLoaded(true);
              // Add delay to show loader for at least a moment
              setTimeout(() => setIsLoading(false), 800);
            }
            resolve();
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Even if some images fail, continue
        setImagesLoaded(true);
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    preloadImages();
  }, []);

  // Start image rotation after initial load
  useEffect(() => {
    if (!imagesLoaded || heroImages.length <= 1) return;

    // Start rotation after a delay
    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }, ROTATION_INTERVAL);
    }, ROTATION_INTERVAL);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imagesLoaded, heroImages.length]);

  // Simplified animation variants for mobile
  const contentAnimation = isMobile ? {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = isMobile ? {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  } : {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 2, ease: 'easeInOut' },
        scale: { duration: 8, ease: 'easeOut' } // Subtle zoom effect during display
      }
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        opacity: { duration: 2, ease: 'easeInOut' }
      }
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative overflow-hidden bg-background"
      style={{ 
        height: viewportHeight,
        minHeight: isMobile ? '500px' : '600px'
      }}
    >
      <AnimatePresence>
        {/* Loading State - Using LogoLoader component */}
        {isLoading && (
          <m.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <LogoLoader 
              bgColor="bg-background"
              color="border-gold"
              size={isMobile ? 64 : 80}
            />
          </m.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0">
        {/* Rotating Images Container */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <m.div
              key={currentImageIndex}
              className="absolute inset-0"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="אווירת מסעדת לולה מרטין"
                fill
                quality={isMobile ? 75 : 90}
                priority={currentImageIndex === 0}
                sizes={isMobile ? "(max-width: 768px) 100vw" : "100vw"}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </m.div>
          </AnimatePresence>
          
          {/* Gradient overlay - Lighter on mobile for better text visibility */}
          <div className={`absolute inset-0 ${
            isMobile 
              ? 'bg-gradient-to-t from-background via-background/60 to-background/20' 
              : 'bg-gradient-to-t from-background via-background/50 to-transparent'
          }`} />
        </div>

        {/* Content Overlay */}
        <m.div 
          className="relative z-10 h-full flex items-center justify-center"
          initial="initial"
          animate={(animationsReady || isMobile) && !isLoading ? "animate" : "initial"}
          variants={contentAnimation}
        >
          <div className="container mx-auto px-4 text-center">
            {/* Logo */}
            <m.div 
              className="mb-6 md:mb-8"
              variants={itemAnimation}
            >
              <div className={`relative mx-auto ${
                isMobile 
                  ? 'w-48 h-24' 
                  : 'w-64 h-32 md:w-80 md:h-40 lg:w-96 lg:h-48'
              }`}>
                <Image
                  src="/images/hero/logo-white.png"
                  alt="לולה מרטין"
                  fill
                  priority
                  className="brightness-110 drop-shadow-2xl"
                  sizes={isMobile ? "192px" : "(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"}
                  style={{
                    objectFit: "contain"
                  }}
                />
              </div>
            </m.div>
            
            {/* Subtitle */}
            <m.p 
              className={`text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto ${
                isMobile 
                  ? 'text-xl font-medium' 
                  : 'text-2xl md:text-3xl lg:text-4xl font-semibold'
              }`}
              variants={itemAnimation}
            >
              חוויה קולינרית ים תיכונית אותנטית בלב הרצליה
            </m.p>
            
            {/* Buttons */}
            <m.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              variants={itemAnimation}
            >
              <Button
                href={info.reservations.url}
                variant="primary"
                size={isMobile ? "md" : "lg"}
                className={isMobile ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"}
                target="_blank"
                rel="noopener noreferrer"
              >
                הזמן שולחן
              </Button>
              
              <Button
                href="/menu"
                variant="secondary"
                size={isMobile ? "md" : "lg"}
                className={isMobile ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"}
              >
                צפה בתפריט
              </Button>
            </m.div>
          </div>
        </m.div>

        {/* Scroll Indicator */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <m.div 
            className={`absolute ${isMobile ? 'bottom-12' : 'bottom-8'} left-1/2 transform -translate-x-1/2 pointer-events-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: (animationsReady || isMobile) && !isLoading ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button
              onClick={() => {
                const heroElement = heroRef.current;
                const header = document.querySelector('.main-header');
                const headerHeight = header?.offsetHeight || 64;
                window.scrollTo({ 
                  top: (heroElement?.offsetHeight || window.innerHeight) - headerHeight + 32,
                  behavior: 'smooth' 
                });
              }}
              className={`group ${isMobile ? 'p-3' : 'p-2'} focus:outline-none focus:ring-2 focus:ring-accent rounded-full hover:bg-white/10 transition-colors`}
              aria-label="גלול למטה"
            >
              <m.div
                className={isMobile ? "w-8 h-8" : "w-6 h-6"}
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }}
              >
                <svg
                  className="w-full h-full text-white/70 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </m.div>
            </button>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;