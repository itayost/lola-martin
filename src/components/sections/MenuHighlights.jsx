import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from '../ui/Image';

const highlights = [
  {
    id: 1,
    title: 'תפריט צהריים',
    description: 'מנות קלילות, טריות, והנחה של 10% בימים א׳–ה׳',
    image: '/images/highlights/lunch.jpg',
    link: '/menu?tab=lunch&category=Lunch',
  },
  {
    id: 2,
    title: 'תפריט ערב',
    description: 'חוויה קולינרית מלאה עם דגים, פירות ים ובשרים',
    image: '/images/highlights/dinner.jpg',
    link: '/menu?tab=dinner&category=Dinner',
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
    <section className="py-20 bg-background text-text">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">טעימה מהתפריט</h2>
          <p className="text-lightMuted">הצצה למנות שמחכות לכם אצלנו במסעדה</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Link key={item.id} href={item.link} legacyBehavior passHref>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-card border border-border rounded-xl overflow-hidden shadow-subtle hover:shadow-elegant transition-shadow cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-lightMuted">{item.description}</p>
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