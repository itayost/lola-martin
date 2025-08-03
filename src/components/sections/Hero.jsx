import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import { useAnimationContext } from '../../pages/_app';

const Hero = () => {
  const { animationsReady, isMobile } = useAnimationContext();
  
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [useVideo, setUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');
  
  // Refs
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  
  // Media source - Using only one video now
  const media = {
    video: {
      webm: '/images/hero/right-1.webm',
      mp4: '/images/hero/right-1.mp4'
    },
    image: '/images/hero/right-1.jpg'
  };

  // Handle viewport height changes on mobile (address bar)
  useEffect(() => {
    const updateViewportHeight = () => {
      // Use window.innerHeight for actual viewport height
      const vh = window.innerHeight;
      setViewportHeight(`${vh}px`);
      
      // Update CSS variable for use in styles
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };

    updateViewportHeight();
    
    // Update on resize and orientation change
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);

  // Check if we should use video
  useEffect(() => {
    const checkVideoSupport = () => {
      // NEVER use video on mobile devices to prevent memory issues
      if (isMobile) {
        setUseVideo(false);
        setIsLoading(false);
        return;
      }
      
      // Check connection for desktop
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData === true
      );
      
      // Don't use video on slow connections
      if (slowConnection) {
        setUseVideo(false);
        setIsLoading(false);
        return;
      }
      
      // Check video format support
      const video = document.createElement('video');
      const canPlayVideo = video.canPlayType('video/mp4') !== '' || 
                          video.canPlayType('video/webm') !== '';
      
      setUseVideo(canPlayVideo && !isMobile);
      
      // If not using video, we're ready immediately
      if (!canPlayVideo || isMobile) {
        setIsLoading(false);
      }
    };
    
    // Small delay to ensure smooth initial render
    setTimeout(checkVideoSupport, 100);
  }, [isMobile]);

  // Handle video loading (desktop only)
  useEffect(() => {
    if (!useVideo || !videoRef.current || isMobile) return;
    
    let timeoutId;
    
    const showContent = () => {
      setVideoReady(true);
      setIsLoading(false);
      if (timeoutId) clearTimeout(timeoutId);
    };
    
    const handleVideoReady = () => {
      showContent();
    };
    
    const handleVideoError = () => {
      console.error('Failed to load video, falling back to image');
      setVideoFailed(true);
      setUseVideo(false);
      showContent();
    };
    
    // Set maximum wait time
    timeoutId = setTimeout(() => {
      console.log('Loading timeout reached, showing content anyway');
      showContent();
    }, 1500);
    
    const video = videoRef.current;
    
    // Use loadeddata for faster display
    video.addEventListener('loadeddata', handleVideoReady);
    video.addEventListener('error', handleVideoError);
    
    // Force load
    video.load();
    
    return () => {
      video.removeEventListener('loadeddata', handleVideoReady);
      video.removeEventListener('error', handleVideoError);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [useVideo, isMobile]);

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

  return (
    <section 
      ref={heroRef} 
      className="relative overflow-hidden bg-background"
      style={{ 
        height: viewportHeight,
        minHeight: isMobile ? '500px' : '600px'
      }}
    >
      <AnimatePresence mode="wait">
        {/* Loading State - Simplified for mobile */}
        {isLoading && !isMobile && (
          <m.div
            key="loader"
            className="absolute inset-0 z-30 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gold/20 rounded-full" />
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0">
        {/* Full Screen Video/Image Container */}
        <div className="absolute inset-0">
          {useVideo && !videoFailed && !isMobile ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={media.image}
            >
              <source src={media.video.webm} type="video/webm" />
              <source src={media.video.mp4} type="video/mp4" />
            </video>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={media.image}
                alt="אווירת מסעדת לולה מרטין"
                fill
                quality={isMobile ? 75 : 90}
                priority
                sizes={isMobile ? "(max-width: 768px) 100vw" : "100vw"}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          )}
          
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
            
            <m.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              variants={itemAnimation}
            >
              <Button
                href="/reservation"
                variant="primary"
                size={isMobile ? "md" : "lg"}
                className={isMobile ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"}
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

        {/* Scroll Indicator - Now visible on all devices */}
        <m.div 
          className={`absolute ${isMobile ? 'bottom-12' : 'bottom-8'} left-1/2 transform -translate-x-1/2`}
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
            className={`group ${isMobile ? 'p-3' : 'p-2'} focus:outline-none focus:ring-2 focus:ring-gold rounded-full`}
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
    </section>
  );
};

export default Hero;