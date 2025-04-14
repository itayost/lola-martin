import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useRestaurantInfo } from '../shared/RestaurantInfo';

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const info = useRestaurantInfo();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Minimal, subtle scroll effects
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  
  return (
    <Section 
      ref={sectionRef}
      className="relative bg-card text-text py-20 overflow-hidden"
    >
      {/* Clean, subtle background */}
      <div className="absolute inset-0 bg-card z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="max-w-2xl mx-auto"
        >
          {/* Minimalist header */}
          <h2 className="text-3xl font-bold text-gold mb-8 text-center">ברוכים הבאים ללולה מרטין</h2>

          {/* Clean, minimalist content */}
          <div className="space-y-6 text-right">
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
          </div>

          {/* Minimalist quote */}
          <div className="my-10 text-right border-r-2 border-accent/50 pr-4">
            <p className="text-white italic">המסורת של מאכלי ים נפגשת עם החדשנות הקולינרית</p>
            <p className="text-xs text-gold mt-2">— אפי אללוף, המייסד</p>
          </div>

          {/* Simple, centered CTA */}
          <div className="flex justify-center mt-8">
            <Button 
              href={info.reservations.url} 
              className="px-6 py-2"
            >
              להזמנת מקום
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default WelcomeSection;