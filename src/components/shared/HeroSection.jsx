import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/legacy/image";

/**
 * קומפוננט HeroSection משופר המשמש בכל דפי האתר
 * כולל לואדר, אנימציות וטיפול במצבי שגיאה
 * 
 * @param {Object} props
 * @param {string} props.title - כותרת ראשית
 * @param {string} props.subtitle - כותרת משנה (אופציונלי)
 * @param {string} props.imageSrc - נתיב לתמונת הרקע
 * @param {string} props.imageAlt - טקסט אלטרנטיבי לתמונה
 * @param {string} props.height - גובה הסקשן (אופציונלי, ברירת מחדל: "40vh")
 * @param {number} props.minHeight - גובה מינימלי בפיקסלים (אופציונלי, ברירת מחדל: 400)
 * @param {ReactNode} props.children - תוכן נוסף (אופציונלי)
 * @param {string} props.overlayColor - צבע השכבה מעל התמונה (אופציונלי, ברירת מחדל: "bg-background/60")
 */
const HeroSection = ({ 
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "40vh",
  minHeight = 400,
  children,
  overlayColor = "bg-background/60"
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // טיפול במצבי טעינה
  useEffect(() => {
    // מגדיר טיימר למקרה שהתמונה לא נטענת תוך זמן סביר
    const timer = setTimeout(() => {
      if (!imageLoaded) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageLoaded]);

  // פונקציה שמופעלת כאשר התמונה נטענה בהצלחה
  const handleImageLoaded = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  // פונקציה שמופעלת כאשר יש שגיאה בטעינת התמונה
  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  // וריאנטים לאנימציות
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const lineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: 96, transition: { duration: 0.8, delay: 0.3 } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
  };

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ 
        height: height, 
        minHeight: `${minHeight}px` 
      }}
    >
      {/* רקע */}
      <div className="absolute inset-0">
        {/* לואדר */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              className="absolute inset-0 z-30 bg-background flex items-center justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              <div className="relative w-16 h-16">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full border-4 border-accent rounded-full opacity-25"
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 border-4 border-t-transparent border-accent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* תמונת רקע */}
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            onLoad={handleImageLoaded}
            onError={handleImageError}
          />
        ) : (
          // תמונת גיבוי במקרה של שגיאה
          <div className="w-full h-full bg-gradient-to-b from-primaryDark to-background"></div>
        )}

        {/* שכבת צבע מעל התמונה */}
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      </div>

      {/* תוכן */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {title}
          </motion.h1>
          
          <motion.div 
            className="h-1 bg-accent mx-auto"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            style={{ maxWidth: '96px' }}
          />
          
          {subtitle && (
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              className="mt-6"
              initial="hidden"
              animate="visible"
              variants={childrenVariants}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;