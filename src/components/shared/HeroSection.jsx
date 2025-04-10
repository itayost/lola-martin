import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/legacy/image";
import LogoLoader from '../ui/LogoLoader';

/**
 * קומפוננט HeroSection משופר המשמש בכל דפי האתר
 * כולל לואדר מותאם אישית עם לוגו, אנימציות וטיפול במצבי שגיאה
 * 
 * @param {Object} props
 * @param {string} props.title - כותרת ראשית
 * @param {string} props.subtitle - כותרת משנה (אופציונלי)
 * @param {string} props.imageSrc - נתיב לתמונת הרקע
 * @param {string} props.imageAlt - טקסט אלטרנטיבי לתמונה
 * @param {string} props.height - גובה הסקשן (אופציונלי, ברירת מחדל: "100vh")
 * @param {number} props.minHeight - גובה מינימלי בפיקסלים (אופציונלי, ברירת מחדל: 600)
 * @param {ReactNode} props.children - תוכן נוסף (אופציונלי)
 * @param {string} props.overlayColor - צבע השכבה מעל התמונה (אופציונלי, ברירת מחדל: "bg-background/60")
 * @param {boolean} props.showScrollIndicator - האם להציג אינדיקטור גלילה (ברירת מחדל: true)
 */
const HeroSection = ({ 
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "100vh",  // שינוי ברירת המחדל ל-100vh
  minHeight = 600,   // הגדלת הגובה המינימלי כדי שיתאים למסכים גדולים
  children,
  overlayColor = "bg-background/60",
  showScrollIndicator = true
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

  // פונקציה לגלילה חלקה למטה
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // וריאנטים לאנימציות
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
      className="relative overflow-hidden" 
      style={{ 
        height: height, 
        minHeight: `${minHeight}px` 
      }}
    >
      {/* לואדר לוגו - משתמשים בקומפוננט החדש */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="absolute inset-0 z-40"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <LogoLoader 
              bgColor="bg-background"  
              color="border-accent"
              size={64}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* רקע */}
      <div className="absolute inset-0">
        {/* תמונת רקע */}
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            onLoadingComplete={handleImageLoaded}
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
            animate={!isLoading ? "visible" : "hidden"}
            variants={titleVariants}
          >
            {title}
          </motion.h1>
          
          <motion.div 
            className="h-1 bg-accent mx-auto"
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
            variants={lineVariants}
            style={{ maxWidth: '96px' }}
          />
          
          {subtitle && (
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto"
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              variants={subtitleVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              className="mt-6"
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              variants={childrenVariants}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* אינדיקטור גלילה למטה */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: !isLoading ? 1 : 0 }}
          transition={{ delay: 1 }}
          onClick={scrollToContent}
          aria-label="גלול למטה"
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
      )}
    </div>
  );
};

export default HeroSection;