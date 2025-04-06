import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from '../ui/Image';

const highlights = [
  {
    id: 1,
    title: 'תפריט צהריים',
    description: 'מנות קלילות, טריות, והנחה של 10% בימים א׳–ה׳',
    image: '/images/highlights/lunch.jpg',
    link: '/menu?tab=lunch',
  },
  {
    id: 2,
    title: 'תפריט ערב',
    description: 'חוויה קולינרית מלאה עם דגים, פירות ים ובשרים',
    image: '/images/highlights/dinner.jpg',
    link: '/menu?tab=dinner',
  },
  {
    id: 3,
    title: 'סושי וגלגולים מיוחדים',
    description: 'מבחר סושי טרי עם טוויסט של לולה',
    image: '/images/highlights/sushi.jpg',
    link: '/menu?tab=sushi',
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-12 sm:py-20 bg-background text-text">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-2 sm:mb-4">טעימה מהתפריט</h2>
          <p className="text-sm sm:text-base text-lightMuted">הצצה למנות שמחכות לכם אצלנו במסעדה</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {highlights.map((item) => (
            <Link key={item.id} href={item.link} legacyBehavior passHref>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-subtle hover:shadow-elegant transition-shadow cursor-pointer"
              >
                <div className="relative aspect-video sm:aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg sm:rounded-t-xl"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-base text-lightMuted line-clamp-2">{item.description}</p>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;