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

  // Create scale and opacity transformations
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <Section 
      ref={sectionRef}
      className="relative bg-card text-text py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20 bg-[url('/images/restaurant-bg.jpg')]" />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gold mb-6"
        >
          ברוכים הבאים ללולה מרטין
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lightMuted text-lg leading-loose mb-6"
        >
          בלב הרצליה פיתוח שוכנת מסעדת לולה מרטין בהובלת המסעדן אפי אללוף.
          לולה מרטין היא מקדש לדגים ופירות ים הכולל בר - מסעדה עם מנות מגוונות אשר תקנה לכם חווית דגים ייחודית ואוטנטית. 
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lightMuted text-lg leading-loose mb-8"
        >
          אפי אללוף המייסד, הבעלים ומי שאחראי על הצד הקולינרי (ג׳קו מאכלי ים) מביא אליכם להרצליה מסורת מפוארת של ידע, אהבה לדגים ופירות ים
          לצד חדשנות בעולם הקולינרי בארץ.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lightMuted text-lg leading-loose mb-6"
        >
        בלולה מרטין תמצאו תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, קוקי סאן ז׳אק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות, דגים נעים וספיישלים מהדגה הימית הטרייה. 
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lightMuted text-lg leading-loose mb-6"
        >
        לולה מרטין מעוצבת כולה מתוך אהבה לים, בצבעים של מעמקי הים, על קירות המסעדה תוכלו לראות תמונות ענק של ייצורי ים. במרכז המסעדה בר ישיבה אינטימי ומפנק בו תוכלו לקבל יחס אישי וממנו ייצאו קוקטיילים מושקעים ואיכותיים, מגוון של אלכוהול והרבה יין.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-lightMuted text-lg leading-loose mb-6"
        >
        במסעדה תפגשו צוות משפחתי ומקצועי אשר יקבל אתכם עם חיוך ויוכל להתאים לכם את החוויה המושלמת.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button href={info.reservations.url}>
            להזמנת מקום
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WelcomeSection;