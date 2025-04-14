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

  // Refined scroll transformations with subtle effects
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0]);
  
  return (
    <Section 
      ref={sectionRef}
      className="relative bg-card text-text py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-card/90 z-0" />
      
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/patterns/waves.svg')] bg-repeat z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          style={{ opacity, y }}
          className="max-w-3xl mx-auto"
        >
          {/* Refined section header with elegant divider */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 tracking-tight">ברוכים הבאים ללולה מרטין</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>

          {/* Main content with professional typography */}
          <div className="prose prose-lg max-w-none text-right">
            <p className="text-lightMuted leading-relaxed">
              <span className="text-gold text-xl font-serif">ב</span>לב הרצליה פיתוח שוכנת מסעדת לולה מרטין בהובלת המסעדן אפי אללוף.
              לולה מרטין היא מקדש לדגים ופירות ים הכולל בר - מסעדה עם מנות מגוונות אשר תקנה לכם חווית דגים ייחודית ואוטנטית. 
            </p>

            <p className="text-lightMuted leading-relaxed">
              אפי אללוף המייסד, הבעלים ומי שאחראי על הצד הקולינרי (ג׳קו מאכלי ים) מביא אליכם להרצליה מסורת מפוארת של ידע, אהבה לדגים ופירות ים
              לצד חדשנות בעולם הקולינרי בארץ.
            </p>

            <p className="text-lightMuted leading-relaxed">
              בלולה מרטין תמצאו תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, קוקי סאן ז׳אק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות, דגים נעים וספיישלים מהדגה הימית הטרייה. 
            </p>

            <div className="my-8 p-6 bg-primaryDark/10 border-r-4 border-accent rounded-lg text-right">
              <p className="text-lightMuted leading-relaxed mb-0">
                לולה מרטין מעוצבת כולה מתוך אהבה לים, בצבעים של מעמקי האוקיינוס, על קירות המסעדה תוכלו לראות תמונות ענק של ייצורי ים. במרכז המסעדה בר ישיבה אינטימי ומפנק בו תוכלו לקבל יחס אישי וממנו ייצאו קוקטיילים מושקעים ואיכותיים, מגוון של אלכוהול והרבה הרבה יין.
              </p>
            </div>

            <p className="text-lightMuted leading-relaxed">
              במסעדה תפגשו צוות משפחתי ומקצועי אשר יקבל אתכם עם חיוך רחב, ויוכל להתאים לכם את החוויה המושלמת.
            </p>
          </div>

          {/* Founder quote with professional treatment */}
          <div className="mt-10 mb-12 px-10 relative">
            <div className="absolute text-gold opacity-20 text-8xl top-0 right-0 font-serif leading-none">"</div>
            <blockquote className="text-right relative z-10">
              <p className="text-lg text-white italic mb-4">המסורת של מאכלי ים נפגשת עם החדשנות הקולינרית, ליצירת חוויה ים תיכונית אותנטית</p>
              <footer className="text-gold font-medium">אפי אללוף, המייסד</footer>
            </blockquote>
            <div className="absolute text-gold opacity-20 text-8xl bottom-0 left-0 font-serif leading-none">"</div>
          </div>

          {/* Call to action */}
          <div className="flex justify-center mt-10">
            <Button 
              href={info.reservations.url} 
              className="px-8 py-3 text-base font-medium shadow-subtle hover:shadow-md transition-all duration-300"
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