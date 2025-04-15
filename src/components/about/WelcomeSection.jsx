import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Image from 'next/image';
import { useRestaurantInfo } from '../shared/RestaurantInfo';

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const info = useRestaurantInfo();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: contentScroll } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  });

  // Enhanced motion effects
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [30, 0]);
  
  // Paragraph reveal animations based on scroll
  const textOpacity = useTransform(contentScroll, [0, 0.3], [0.6, 1]);
  const textY = useTransform(contentScroll, [0, 0.3], [20, 0]);
  
  return (
    <Section 
      ref={sectionRef}
      className="relative bg-card text-text py-20 overflow-hidden"
    >
      {/* Clean, subtle background with slight parallax */}
      <motion.div 
        className="absolute inset-0 bg-card z-0"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]) 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={contentRef}
          style={{ opacity, y }}
          className="max-w-2xl mx-auto"
        >
          {/* Minimalist header with subtle animation */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl font-bold text-gold mb-8 text-center"
          >
            ברוכים הבאים ללולה מרטין
          </motion.h2>

          {/* Content paragraphs with staggered reveal on scroll */}
          <motion.div 
            className="space-y-6 text-right"
            style={{ opacity: textOpacity, y: textY }}
          >
            <p className="text-lightMuted">
              בלב הרצליה פיתוח שוכנת מסעדת לולה מרטין בהובלת המסעדן אפי אללוף.
              לולה מרטין היא מקדש לדגים ופירות ים הכולל בר - מסעדה עם מנות מגוונות אשר תקנה לכם חווית דגים ייחודית ואוטנטית. 
            </p>

            <p className="text-lightMuted">
              אפי אללוף המייסד, הבעלים ומי שאחראי על הצד הקולינרי (ג׳קו מאכלי ים) מביא אליכם להרצליה מסורת מפוארת של ידע, אהבה לדגים ופירות ים
              לצד חדשנות בעולם הקולינרי בארץ.
            </p>

            <p className="text-lightMuted">
              בלולה מרטין תמצאו תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, קוקי סאן ז׳אק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות, דגים נעים וספיישלים מהדגה הימית הטרייה. 
            </p>

            <p className="text-lightMuted">
              לולה מרטין מעוצבת כולה מתוך אהבה לים, בצבעים של מעמקי האוקיינוס, על קירות המסעדה תוכלו לראות תמונות ענק של ייצורי ים. במרכז המסעדה בר ישיבה אינטימי ומפנק בו תוכלו לקבל יחס אישי וממנו ייצאו קוקטיילים מושקעים ואיכותיים, מגוון של אלכוהול והרבה הרבה יין.
            </p>

            <p className="text-lightMuted">
              במסעדה תפגשו צוות משפחתי ומקצועי אשר יקבל אתכם עם חיוך רחב, ויוכל להתאים לכם את החוויה המושלמת.
            </p>
          </motion.div>

          {/* Quote with Efi's photo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
            className="my-10 flex items-center gap-4 bg-primaryDark/10 p-5 rounded-lg"
          >
            {/* Efi's photo */}
            <div className="flex-shrink-0 relative h-20 w-20 rounded-full overflow-hidden border-2 border-accent/40">
              <Image 
                src="/images/about/efi-alalouf.jpg" 
                alt="אפי אללוף"
                fill
                sizes="80px" // Appropriate size for a 20x20 element
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            {/* Quote */}
            <div className="text-right">
              <p className="text-white italic">המסורת של מאכלי ים נפגשת עם החדשנות הקולינרית</p>
              <p className="text-xs text-gold mt-2">— אפי אללוף, המייסד</p>
            </div>
          </motion.div>

          {/* CTA with hover animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex justify-center mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                href={info.reservations.url} 
                className="px-6 py-2"
              >
                להזמנת מקום
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default WelcomeSection;