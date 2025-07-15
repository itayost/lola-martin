import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useAnimationContext } from '@/pages/_app';

const Hero = () => {
  const { animationsReady, isMobile } = useAnimationContext();
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImageIndex, setRightImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Define image sets for each side
  const leftImages = [
    '/images/hero/left-1.jpg',
    '/images/hero/left-2.jpg',
    '/images/hero/left-3.jpg',
  ];

  const rightImages = [
    '/images/hero/right-1.jpg',
    '/images/hero/right-2.jpg',
    '/images/hero/right-3.jpg',
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [...leftImages, ...rightImages].map(src => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // Auto-switch images
  useEffect(() => {
    if (!imagesLoaded) return;

    const leftInterval = setInterval(() => {
      setLeftImageIndex(prev => (prev + 1) % leftImages.length);
    }, 5000); // 5 seconds for cleaner timing

    const rightInterval = setInterval(() => {
      setRightImageIndex(prev => (prev + 1) % rightImages.length);
    }, 5500); // Slightly offset for visual interest

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [imagesLoaded, leftImages.length, rightImages.length]);

  // Clean crossfade animation
  const imageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2, // Longer fade for smoother effect
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  // Simple content animations
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

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-background">
      {/* Split Screen Container */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left/Top Side - Restaurant Ambiance */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-background">
          {/* Background layer - always visible */}
          <div className="absolute inset-0">
            <Image
              src={leftImages[0]}
              alt=""
              fill
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Crossfading images */}
          <AnimatePresence mode="sync">
            <m.div
              key={leftImageIndex}
              className="absolute inset-0"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Image
                src={leftImages[leftImageIndex]}
                alt="אווירת מסעדת לולה מרטין"
                fill
                quality={85}
                priority={leftImageIndex === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </m.div>
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent via-background/20 to-background/60" />
        </div>

        {/* Right/Bottom Side - Food Showcase */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-background">
          {/* Background layer - always visible */}
          <div className="absolute inset-0">
            <Image
              src={rightImages[0]}
              alt=""
              fill
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Crossfading images */}
          <AnimatePresence mode="sync">
            <m.div
              key={rightImageIndex}
              className="absolute inset-0"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Image
                src={rightImages[rightImageIndex]}
                alt="מנות מיוחדות במסעדת לולה מרטין"
                fill
                quality={85}
                priority={rightImageIndex === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </m.div>
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-background/20 to-background/60" />
        </div>

        {/* Simple Center Divider */}
        <div className="absolute inset-x-0 top-1/2 md:inset-y-0 md:left-1/2 md:top-0 transform -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-full md:w-px h-px md:h-full bg-gold/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Logo */}
          <m.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            לולה מרטין
          </m.h1>

          {/* Subtitle */}
          <m.p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-white/90 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            חוויה קולינרית ייחודית המשלבת טעמים ים תיכוניים
            <br className="hidden md:block" />
            עם טכניקות בישול מודרניות
          </m.p>

          {/* CTA Buttons */}
          <m.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            <Button href="/contact" variant="light" size="lg" animated={animationsReady}>
              צור קשר
            </Button>
          </m.div>

          {/* Clean Scroll Indicator */}
          <m.button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
