import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useAnimationContext } from '@/pages/_app';

const Hero = () => {
  const { animationsReady, isMobile } = useAnimationContext();
  
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [useVideos, setUseVideos] = useState(false);
  const [videosReady, setVideosReady] = useState(false);
  
  // Video refs
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const heroRef = useRef(null);
  
  // Media sources
  const media = {
    left: {
      video: {
        webm: '/images/hero/left-1.webm',
        mp4: '/images/hero/left-1.mp4'
      },
      image: '/images/hero/left-1.jpg'
    },
    right: {
      video: {
        webm: '/images/hero/right-1.webm',
        mp4: '/images/hero/right-1.mp4'
      },
      image: '/images/hero/right-1.jpg'
    }
  };

  // Check if we should use videos
  useEffect(() => {
    const checkVideoSupport = () => {
      // Check connection
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData === true
      );
      
      // Don't use videos on slow connections
      if (slowConnection) {
        setUseVideos(false);
        setIsLoading(false);
        return;
      }
      
      // Check video format support
      const video = document.createElement('video');
      const canPlayVideo = video.canPlayType('video/mp4') !== '' || 
                          video.canPlayType('video/webm') !== '';
      
      setUseVideos(canPlayVideo);
      
      // If not using videos, we're ready immediately
      if (!canPlayVideo) {
        setIsLoading(false);
      }
    };
    
    checkVideoSupport();
  }, []);

  // Handle video loading
  useEffect(() => {
    if (!useVideos) return;
    
    let loadedCount = 0;
    const videosToLoad = 2;
    let timeoutId;
    
    const showContent = () => {
      setVideosReady(true);
      setIsLoading(false);
      if (timeoutId) clearTimeout(timeoutId);
    };
    
    const handleVideoReady = () => {
      loadedCount++;
      if (loadedCount === videosToLoad) {
        showContent();
      }
    };
    
    const handleVideoError = (side) => {
      console.error(`Failed to load ${side} video, falling back to image`);
      handleVideoReady(); // Count as "loaded" to proceed
    };
    
    // Set maximum wait time of 1.5 seconds
    timeoutId = setTimeout(() => {
      console.log('Loading timeout reached, showing content anyway');
      showContent();
    }, 1500);
    
    // Setup left video
    if (leftVideoRef.current) {
      const leftVideo = leftVideoRef.current;
      
      const onLeftReady = () => handleVideoReady();
      const onLeftError = () => handleVideoError('left');
      
      // Use loadeddata for faster display
      leftVideo.addEventListener('loadeddata', onLeftReady);
      leftVideo.addEventListener('error', onLeftError);
      
      // Force load
      leftVideo.load();
      
      return () => {
        leftVideo.removeEventListener('loadeddata', onLeftReady);
        leftVideo.removeEventListener('error', onLeftError);
      };
    }
    
    // Setup right video
    if (rightVideoRef.current) {
      const rightVideo = rightVideoRef.current;
      
      const onRightReady = () => handleVideoReady();
      const onRightError = () => handleVideoError('right');
      
      // Use loadeddata for faster display
      rightVideo.addEventListener('loadeddata', onRightReady);
      rightVideo.addEventListener('error', onRightError);
      
      // Force load
      rightVideo.load();
      
      return () => {
        rightVideo.removeEventListener('loadeddata', onRightReady);
        rightVideo.removeEventListener('error', onRightError);
      };
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [useVideos]);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentAnimation = {
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

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {/* Loading State */}
        {isLoading && (
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

      {/* Main Content - Hidden until loaded */}
      <m.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Split Screen Container */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
            {useVideos ? (
              <video
                ref={leftVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
              >
                <source src={media.left.video.webm} type="video/webm" />
                <source src={media.left.video.mp4} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={media.left.image}
                alt="אווירת מסעדת לולה מרטין"
                fill
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent via-background/20 to-background/60" />
          </div>

          {/* Right Side */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
            {useVideos ? (
              <video
                ref={rightVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
              >
                <source src={media.right.video.webm} type="video/webm" />
                <source src={media.right.video.mp4} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={media.right.image}
                alt="מנות מיוחדות במסעדת לולה מרטין"
                fill
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-background/20 to-background/60" />
          </div>

          {/* Center Divider */}
          <div className="absolute inset-x-0 top-1/2 md:inset-y-0 md:left-1/2 md:top-0 transform -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-full md:w-px h-px md:h-full bg-gold/20" />
        </div>

        {/* Content Overlay */}
        <m.div 
          className="relative z-20 h-full flex items-center justify-center"
          initial="initial"
          animate={!isLoading ? "animate" : "initial"}
          variants={contentAnimation}
        >
          <div className="container mx-auto px-6 text-center">
            {/* Logo */}
            <m.div
              className="mb-6"
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 }
              }}
            >
              <img
                src="/images/hero/logo-white.png"
                alt="לוגו לולה מרטין"
                className="h-20 md:h-28 mx-auto filter brightness-0 invert"
              />
            </m.div>

            {/* Title */}
            <m.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
            >
              לולה מרטין
            </m.h1>

            {/* Subtitle */}
            <m.p
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-white/90 font-light"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
            >
              חוויה קולינרית ייחודית המשלבת טעמים ים תיכוניים
              <br className="hidden md:block" />
              עם טכניקות בישול מודרניות
            </m.p>

            {/* CTA Buttons */}
            <m.div
              className="flex flex-wrap justify-center gap-4"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.3,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <m.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                <Button
                  href="/menu"
                  variant="outline"
                  size="lg"
                  animated={animationsReady}
                  className="backdrop-blur-sm"
                >
                  לתפריט
                </Button>
              </m.div>
              
              <m.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                <Button
                  href="https://ontopo.com/he/il/page/24219808"
                  variant="primary"
                  size="lg"
                  animated={animationsReady}
                  className="font-bold"
                >
                  הזמנת שולחן
                </Button>
              </m.div>
              
              <m.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                <Button 
                  href="/contact" 
                  variant="light" 
                  size="lg" 
                  animated={animationsReady}
                >
                  צור קשר
                </Button>
              </m.div>
            </m.div>

            {/* Scroll Indicator */}
            <m.button
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: !isLoading ? 1 : 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              aria-label="גלול למטה"
            >
              <m.svg
                className="w-5 h-5"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
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
              </m.svg>
            </m.button>
          </div>
        </m.div>
      </m.div>
    </section>
  );
};

export default Hero;