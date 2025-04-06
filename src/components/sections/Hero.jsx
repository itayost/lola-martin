import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });

      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {
          setIsLoaded(true);
        });
      }
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
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
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 z-30 bg-background flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-accent rounded-full opacity-25"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 border-4 border-t-transparent border-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="absolute inset-0 w-full h-full" style={{ y, opacity }}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video showing Lola Martin restaurant atmosphere"
        >
          <source src="/videos/restaurant-bg.mp4" type="video/mp4" />
        </video>

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
            חוויה קולינרית ייחודית במסעדה היוקרתית שלנו
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
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
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            >
              <motion.div
                className="w-1 h-3 bg-accent rounded-full mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
