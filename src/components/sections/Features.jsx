import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import Image from '../ui/Image';

const Features = () => {
  const [ref, controls] = useScrollAnimation();

  const features = [
    {
      id: 1,
      title: 'מטבח ים-תיכוני',
      description: 'בלולה מרטין אנחנו חוגגים את טעמי הים התיכון עם מנות יצירתיות בהשראת יוון, איטליה, לבנון וישראל – מבוססות על מתכונים מסורתיים ופרשנות מודרנית של השף.',
      icon: '/images/icons/food.svg',
    },
    {
      id: 2,
      title: 'חומרי גלם טריים',
      description: 'התפריט שלנו משתנה בהתאם לעונה – עם ירקות שנבחרים מדי בוקר, דגים טריים ישירות מהים, ושימוש בחומרי גלם מקומיים שמביאים את הטבע לצלחת.',
      icon: '/images/icons/fresh.svg',
    },
    {
      id: 3,
      title: 'אווירה ייחודית',
      description: 'העיצוב של המסעדה שואב השראה מהים ומהתרבות המקומית – עם תאורה חמימה, מוזיקה נעימה, ושירות מוקפד שמאפשר חוויה של רוגע ויוקרה.',
      icon: '/images/icons/ambiance.svg',
    },
  ];

  return (
    <section className="py-20 bg-background text-text">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gold mb-4"
          >
            למה לבחור בלולה מרטין?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-lightMuted max-w-2xl mx-auto"
          >
            חוויה קולינרית שמשלבת בין טעמים, אווירה ושירות – עם דגש על הפרטים הקטנים שעושים את כל ההבדל
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="bg-card border border-border rounded-xl p-8 text-center shadow-subtle hover:shadow-elegant transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-lightMuted leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;