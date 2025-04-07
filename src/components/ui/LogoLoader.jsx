import { motion } from 'framer-motion';

/**
 * קומפוננט לואדר מותאם אישית המשתמש בלוגו המסעדה
 * 
 * @param {Object} props
 * @param {string} props.logoSrc - נתיב ללוגו (ברירת מחדל: "/images/hero/logo-white.png")
 * @param {string} props.color - צבע האנימציה (ברירת מחדל: "border-accent")
 * @param {number} props.size - גודל הלוגו (ברירת מחדל: 80)
 * @param {string} props.bgColor - צבע הרקע (ברירת מחדל: "bg-background")
 */
const LogoLoader = ({
  logoSrc = "/images/hero/logo-white.png",
  color = "border-accent",
  size = 80,
  bgColor = "bg-background"
}) => {
  // רינדור הלואדר
  return (
    <div className={`fixed inset-0 z-50 ${bgColor} flex items-center justify-center`}>
      <div className="relative">
        {/* לוגו המסעדה במרכז */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <img 
            src={logoSrc} 
            alt="לוגו לולה מרטין" 
            style={{ 
              height: `${size}px`,
              filter: 'brightness(0) invert(1)'  // מבטיח שהלוגו לבן
            }}
            className="mx-auto"
          />
        </motion.div>
        
        {/* מעגל מסתובב מסביב ללוגו */}
        <motion.div
          className={`absolute top-1/2 left-1/2 rounded-full border-2 ${color} border-t-transparent`}
          style={{ 
            height: `${size * 1.5}px`, 
            width: `${size * 1.5}px`,
            marginLeft: `-${size * 1.5 / 2}px`,
            marginTop: `-${size * 1.5 / 2}px`
          }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'linear'
          }}
        />
        
        {/* מעגל חיצוני פועם */}
        <motion.div
          className={`absolute top-1/2 left-1/2 rounded-full border ${color} opacity-30`}
          style={{ 
            height: `${size * 2}px`, 
            width: `${size * 2}px`,
            marginLeft: `-${size}px`,
            marginTop: `-${size}px`
          }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.4, 0.2] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
        
        {/* טקסט טעינה מתחת ללוגו */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-white text-center"
        >
          <p className="text-lg font-light">טוען...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LogoLoader;