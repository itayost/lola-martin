import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const WelcomeSection = () => {
  const sectionRef = useRef(null);
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
          לולה מרטין היא מקדש לדגים ופירות ים הכולל בר - מסעדה עם מנות של פירות ים אשר תקנה לכם חווית דגים ייחודית ואוטנטית. 
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lightMuted text-lg leading-loose mb-6"
        >
        בלולה מרטין תמצאו תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, קוקי סאן ז׳אק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות." 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="/menu">
            הצצה לתפריט
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WelcomeSection;