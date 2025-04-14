import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import LogoLoader from '@/components/ui/LogoLoader';
import HeroSection from '@/components/shared/HeroSection';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // טיפול בטעינת וידאו
    const handleVideoLoaded = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };

    const handleVideoError = () => {
      console.warn('Video loading error, using fallback image');
      setVideoFailed(true);
      
      // כאשר הוידאו נכשל, נבדוק אם התמונה טעונה
      if (imageRef.current) {
        if (imageRef.current.complete) {
          setIsLoaded(true);
          setIsLoading(false);
        } else {
          // נוסיף מאזין לטעינת התמונה
          imageRef.current.onload = () => {
            setIsLoaded(true);
            setIsLoading(false);
          };
          
          imageRef.current.onerror = () => {
            // אם גם התמונה נכשלה, בכל זאת נסתיר את הלואדר
            console.error('Both video and fallback image failed to load');
            setIsLoaded(true);
            setIsLoading(false);
          };
        }
      } else {
        // אם אין תייחסות לתמונה, נסיים את הטעינה
        setIsLoaded(true);
        setIsLoading(false);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
      videoRef.current.addEventListener('error', handleVideoError);
    }

    // טיימר פולבק במקרה שהוידאו או התמונה לא נטענים תוך זמן סביר
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
        videoRef.current.removeEventListener('error', handleVideoError);
      }
    };
  }, [isLoaded]);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const backgroundContent = (
    <motion.div className="absolute inset-0 w-full h-full" style={{ y, opacity }}>
      {videoFailed ? (
        <div className="w-full h-full">
          <img 
            ref={imageRef}
            src="/images/restaurant-bg.jpg" 
            alt="לולה מרטין - מסעדה" 
            className="w-full h-full object-cover"
            onLoad={() => {
              setIsLoaded(true);
              setIsLoading(false);
            }}
            onError={() => {
              console.error('Fallback image failed to load');
              setIsLoaded(true);
              setIsLoading(false);
            }}
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/restaurant-bg.jpg"
          aria-label="אווירת מסעדת לולה מרטין"
        >
          <source src="/videos/restaurant-bg.mp4" type="video/mp4" />
          {/* Fallback image if video tag is not supported */}
          <img 
            src="/images/restaurant-bg.jpg" 
            alt="לולה מרטין - מסעדה" 
            className="w-full h-full object-cover" 
          />
        </video>
      )}
    </motion.div>
  );

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* לואדר לוגו */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="absolute inset-0 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <LogoLoader 
              bgColor="bg-background"
              color="border-accent"
              size={80}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection
        title="לולה מרטין"
        subtitle="מסעדת שף ים תיכונית"
        imageSrc="/images/restaurant-bg.jpg"
        imageAlt="לולה מרטין - מסעדה"
        height="100vh"
        minHeight={600}
        overlayColor="bg-background/60"
        showScrollIndicator={true}
        customBackground={backgroundContent}
        customContent={
          <motion.div 
            className="relative h-full flex items-center z-20"
            style={{ y, opacity }}
          >
            <div className="container mx-auto px-6 text-center text-text">
              {/* Logo */}
              <motion.div
                className="mb-6"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={logoVariants}
              >
                <img 
                  src="/images/hero/logo-white.png" 
                  alt="לוגו לולה מרטין" 
                  className="h-24 md:h-32 mx-auto filter brightness-0 invert"
                />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={titleVariants}
              >
                לולה מרטין
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl md:text-3xl mb-8"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={subtitleVariants}
              >
                מסעדת שף ים תיכונית
              </motion.p>

              <motion.div
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={buttonVariants}
              >
                <Button
                  href="/reservations"
                  variant="primary"
                  size="lg"
                >
                  הזמנת שולחן
                </Button>
              </motion.div>
            </div>
          </motion.div>
        }
      />
    </div>
  );
};

export default Hero;