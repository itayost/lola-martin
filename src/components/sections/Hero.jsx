import { useState, useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useAnimationContext } from '@/pages/_app';

const Hero = () => {
  const { animationsReady, isMobile } = useAnimationContext();
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [videoErrors, setVideoErrors] = useState({ left: false, right: false });
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);
  const [videosPlaying, setVideosPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  // Video refs
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  // Define video and image paths
  const leftVideoWebM = '/images/hero/left-1.webm';
  const rightVideoWebM = '/images/hero/right-1.webm';
  const leftVideoMP4 = '/images/hero/left-1.mp4';
  const rightVideoMP4 = '/images/hero/right-1.mp4';
  const leftImageSrc = '/images/hero/left-1.jpg';
  const rightImageSrc = '/images/hero/right-1.jpg';

  // Check if we should load videos
  useEffect(() => {
    const checkVideoSupport = () => {
      // Check connection speed
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData === true
      );
      
      // Check video support (WebM or MP4)
      const video = document.createElement('video');
      const canPlayVideo = video.canPlayType('video/webm') !== '' || 
                          video.canPlayType('video/mp4') !== '';
      
      // Load videos if supported and connection is good
      setShouldLoadVideos(canPlayVideo && !slowConnection);
    };

    checkVideoSupport();
  }, []);

  // Handle video loading
  useEffect(() => {
    if (!shouldLoadVideos) {
      // If we're not loading videos, show images immediately
      setVideosLoaded(true);
      setShowContent(true);
      return;
    }

    let leftLoaded = false;
    let rightLoaded = false;
    let leftCanPlay = false;
    let rightCanPlay = false;

    const checkAllReady = () => {
      if (leftLoaded && rightLoaded && leftCanPlay && rightCanPlay) {
        setVideosLoaded(true);
        // Small delay to ensure smooth transition
        setTimeout(() => setShowContent(true), 100);
      }
    };

    // Attempt to play videos on mobile
    const attemptPlay = async (videoRef) => {
      if (videoRef.current && isMobile) {
        try {
          await videoRef.current.play();
          setVideosPlaying(true);
        } catch (err) {
          console.log('Autoplay prevented, user interaction needed');
        }
      }
    };

    // Left video
    if (leftVideoRef.current) {
      leftVideoRef.current.addEventListener('loadeddata', () => {
        leftLoaded = true;
        checkAllReady();
      });
      
      leftVideoRef.current.addEventListener('canplaythrough', () => {
        leftCanPlay = true;
        checkAllReady();
        attemptPlay(leftVideoRef);
      });
      
      leftVideoRef.current.addEventListener('error', () => {
        console.error('Failed to load left video');
        setVideoErrors(prev => ({ ...prev, left: true }));
        leftLoaded = true;
        leftCanPlay = true;
        checkAllReady();
      });
    }

    // Right video
    if (rightVideoRef.current) {
      rightVideoRef.current.addEventListener('loadeddata', () => {
        rightLoaded = true;
        checkAllReady();
      });
      
      rightVideoRef.current.addEventListener('canplaythrough', () => {
        rightCanPlay = true;
        checkAllReady();
        attemptPlay(rightVideoRef);
      });
      
      rightVideoRef.current.addEventListener('error', () => {
        console.error('Failed to load right video');
        setVideoErrors(prev => ({ ...prev, right: true }));
        rightLoaded = true;
        rightCanPlay = true;
        checkAllReady();
      });
    }
  }, [shouldLoadVideos, isMobile]);

  // Content animations
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Handle user interaction to play videos on mobile
  const handleUserInteraction = () => {
    if (isMobile && !videosPlaying && shouldLoadVideos) {
      if (leftVideoRef.current) leftVideoRef.current.play().catch(() => {});
      if (rightVideoRef.current) rightVideoRef.current.play().catch(() => {});
      setVideosPlaying(true);
    }
  };

  return (
    <section 
      className="relative h-screen min-h-[600px] overflow-hidden bg-background"
      onClick={handleUserInteraction}
    >
      {/* Loading State - show while videos are loading */}
      {shouldLoadVideos && !showContent && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
          <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
        </div>
      )}
      {/* Split Screen Container */}
      <div className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left/Top Side - Restaurant Ambiance */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-background">
          {shouldLoadVideos ? (
            !videoErrors.left ? (
              <video
                ref={leftVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                preload="auto"
              >
                <source src={leftVideoWebM} type="video/webm" />
                <source src={leftVideoMP4} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={leftImageSrc}
                alt="אווירת מסעדת לולה מרטין"
                fill
                quality={85}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )
          ) : (
            <Image
              src={leftImageSrc}
              alt="אווירת מסעדת לולה מרטין"
              fill
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent via-background/20 to-background/60" />
        </div>

        {/* Right/Bottom Side - Food Showcase */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-background">
          {shouldLoadVideos ? (
            !videoErrors.right ? (
              <video
                ref={rightVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                preload="auto"
              >
                <source src={rightVideoWebM} type="video/webm" />
                <source src={rightVideoMP4} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={rightImageSrc}
                alt="מנות מיוחדות במסעדת לולה מרטין"
                fill
                quality={85}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )
          ) : (
            <Image
              src={rightImageSrc}
              alt="מנות מיוחדות במסעדת לולה מרטין"
              fill
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-background/20 to-background/60" />
        </div>

        {/* Simple Center Divider */}
        <div className="absolute inset-x-0 top-1/2 md:inset-y-0 md:left-1/2 md:top-0 transform -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-full md:w-px h-px md:h-full bg-gold/20" />
      </div>

      {/* Content Overlay */}
      <div className={`relative z-20 h-full flex items-center justify-center transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 text-center">
          {/* Logo */}
          <m.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationsReady ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="/images/hero/logo-white.png"
              alt="לוגו לולה מרטין"
              className="h-20 md:h-28 mx-auto filter brightness-0 invert"
            />
          </m.div>

          {/* CTA Buttons */}
          <m.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationsReady ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              href="/menu"
              variant="outline"
              size="lg"
              animated={animationsReady}
              className="backdrop-blur-sm"
            >
              לתפריט
            </Button>
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

          {/* Clean Scroll Indicator */}
          <m.button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationsReady ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
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
      </div>
    </section>
  );
};

export default Hero;