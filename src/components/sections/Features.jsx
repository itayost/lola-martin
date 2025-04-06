// Features.jsx – minimal and modern mobile-friendly version
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
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-3">
            מה מיוחד אצלנו
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            לולה מרטין מציעה חוויה קולינרית ייחודית, המשלבת מסורת וחדשנות
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                <Image src={feature.icon} alt="" width={28} height={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;