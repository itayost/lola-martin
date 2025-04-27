import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import LogoLoader from '../ui/LogoLoader';
import { useAnimationContext } from '../../pages/_app';
import Head from 'next/head';

const HeroSection = ({ 
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "100vh",
  minHeight = 600,
  children,
  overlayColor = "bg-background/60",
  showScrollIndicator = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { animationsReady } = useAnimationContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!imageLoaded) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageLoaded]);

  const handleImageLoaded = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const scrollToContent = () => {
    const heroElement = document.querySelector('.hero-section');
    const header = document.querySelector('.main-header');
    const headerHeight = header?.offsetHeight || 64;
    window.scrollTo({ 
      top: (heroElement?.offsetHeight || window.innerHeight) - headerHeight + 32,
      behavior: 'smooth' 
    });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 1, 
      width: 96, 
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  return (
    <div 
      className="relative overflow-hidden hero-section" 
      style={{ height, minHeight: `${minHeight}px` }}
    >
      <AnimatePresence>
        {(isLoading || !animationsReady) && (
          <m.div 
            className="absolute inset-0 z-40"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <LogoLoader 
              bgColor="bg-background"  
              color="border-accent"
              size={64}
            />
          </m.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            quality={90}
            priority
            onLoad={handleImageLoaded}
            onError={handleImageError}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-primaryDark to-background"></div>
        )}
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      </div>

      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 text-center">
          <m.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial="hidden"
            animate={animationsReady && !isLoading ? "visible" : "hidden"}
            variants={titleVariants}
          >
            {title}
          </m.h1>
          <m.div 
            className="h-1 bg-accent mx-auto"
            initial="hidden"
            animate={animationsReady && !isLoading ? "visible" : "hidden"}
            variants={lineVariants}
            style={{ maxWidth: '96px' }}
          />
          {subtitle && (
            <m.p
              className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto"
              initial="hidden"
              animate={animationsReady && !isLoading ? "visible" : "hidden"}
              variants={subtitleVariants}
            >
              {subtitle}
            </m.p>
          )}
          {children && (
            <m.div
              className="mt-6"
              initial="hidden"
              animate={animationsReady && !isLoading ? "visible" : "hidden"}
              variants={childrenVariants}
            >
              {children}
            </m.div>
          )}
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute inset-0 z-30">
          <m.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationsReady && !isLoading ? 1 : 0 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={scrollToContent}
              className="group p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
              aria-label="גלול למטה"
            >
              <m.div
                className="w-6 h-6"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
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
      )}
    </div>
  );
};

export default HeroSection;
