import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import LogoLoader from '@/components/ui/LogoLoader';  // ייבוא הלואדר החדש

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

  const gradientOverlay = (
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
  );

  const decorElements = [
    { x: '10%', y: '20%', delay: 0.5, blur: '5px', size: 10 },
    { x: '85%', y: '15%', delay: 0.7, blur: '7px', size: 8 },
    { x: '70%', y: '80%', delay: 0.9, blur: '4px', size: 12 },
    { x: '25%', y: '75%', delay: 1.1, blur: '6px', size: 6 },
    { x: '15%', y: '30%', delay: 1.3, blur: '3px', size: 8 },
  ];

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* לואדר לוגו - משתמשים בקומפוננט החדש */}
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

        {gradientOverlay}

        {decorElements.map((elem, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-accent"
            style={{
              left: elem.x,
              top: elem.y,
              width: elem.size,
              height: elem.size,
              filter: `blur(${elem.blur})`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -20, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5,
              delay: elem.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-6 text-center text-text">
          {/* Logo added here, above the text */}
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
            <span className="inline-block">לולה מרטין</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-2xl mx-auto text-white/90 font-light"
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            variants={subtitleVariants}
          >
            חוויה קולינרית ייחודית
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            variants={buttonVariants}
          >
            <Button href="/menu" size="lg" className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-background">
              לתפריט
            </Button>
            <Button
              href="https://ontopo.com/he/il/page/24219808"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-background font-bold shadow-xl hover:bg-[#d7a243]"
            >
              הזמנת שולחן
            </Button>
            <Button href="/contact" size="lg" className="bg-muted text-white hover:bg-gold hover:text-black">
              צור קשר
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="group p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
              aria-label="גלול למטה"
            >
              <motion.div
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
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;