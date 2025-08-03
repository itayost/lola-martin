import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import { useAnimationContext } from '../../pages/_app';

const Hero = () => {
  const { animationsReady } = useAnimationContext();
  
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [useVideo, setUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  
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

  // Check if we should use video
  useEffect(() => {
    const checkVideoSupport = () => {
      // Check connection
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
      
      setUseVideo(canPlayVideo);
      
      // If not using video, we're ready immediately
      if (!canPlayVideo) {
        setIsLoading(false);
      }
    };
    
    checkVideoSupport();
  }, []);

  // Handle video loading
  useEffect(() => {
    if (!useVideo || !videoRef.current) return;
    
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
  }, [useVideo]);

  // Animation variants
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

  const itemAnimation = {
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

      {/* Main Content */}
      <m.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Full Screen Video/Image Container */}
        <div className="absolute inset-0">
          {useVideo && !videoFailed ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={media.video.webm} type="video/webm" />
              <source src={media.video.mp4} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={media.image}
              alt="אווירת מסעדת לולה מרטין"
              fill
              quality={90}
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <m.div 
          className="relative z-20 h-full flex items-center justify-center"
          initial="initial"
          animate={animationsReady && !isLoading ? "animate" : "initial"}
          variants={contentAnimation}
        >
          <div className="container mx-auto px-4 text-center">
            <m.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              variants={itemAnimation}
            >
              <span className="text-gold">ברוכים הבאים</span>
              <br />
              <span className="text-white">ללולה מרטין</span>
            </m.h1>
            
            <m.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
              variants={itemAnimation}
            >
              חוויה קולינרית ים תיכונית אותנטית בלב הרצליה
            </m.p>
            
            <m.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemAnimation}
            >
              <Button
                href="/reservation"
                variant="primary"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                הזמן שולחן
              </Button>
              
              <Button
                href="/menu"
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                צפה בתפריט
              </Button>
            </m.div>
          </div>
        </m.div>

        {/* Scroll Indicator */}
        <m.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationsReady && !isLoading ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <m.div 
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>
        </m.div>
      </m.div>
    </section>
  );
};

export default Hero;