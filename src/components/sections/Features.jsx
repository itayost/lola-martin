// Features.jsx – mobile-optimized section
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import Image from '../ui/Image';

const Features = () => {
  const [ref, controls] = useScrollAnimation();

  const features = [
    {
      id: 1,
      title: 'מטבח ים-תיכוני',
      description: 'תפריט עשיר המשלב טעמים ים-תיכוניים אותנטיים עם טכניקות בישול מודרניות',
      icon: '/images/icons/food.svg',
    },
    {
      id: 2,
      title: 'חומרי גלם טריים',
      description: 'שימוש בחומרי גלם עונתיים ומקומיים, נבחרים בקפידה מהספקים הטובים ביותר',
      icon: '/images/icons/fresh.svg',
    },
    {
      id: 3,
      title: 'אווירה ייחודית',
      description: 'עיצוב מרהיב המשלב אלמנטים מסורתיים ומודרניים ליצירת חוויה ייחודית',
      icon: '/images/icons/ambiance.svg',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
            מה מיוחד אצלנו
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            לולה מרטין מציעה חוויה קולינרית ייחודית, המשלבת מסורת וחדשנות
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Image src={feature.icon} alt="" width={32} height={32} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;