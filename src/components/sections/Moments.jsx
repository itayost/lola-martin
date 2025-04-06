import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../ui/Image';
import Section from '../ui/Section';

const moments = [
  {
    id: 1,
    image: '/images/moments/moment-1.jpg',
    title: 'טוסט לקינוח חגיגי'
  },
  {
    id: 2,
    image: '/images/moments/moment-2.jpg',
    title: 'מפגש בין חברים'
  },
  {
    id: 3,
    image: '/images/moments/moment-3.jpg',
    title: 'הפתעת שף בשישי בערב'
  },
];

const MomentsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % moments.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="bg-card text-text py-12 sm:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gold mb-2 sm:mb-4">רגעים בלתי נשכחים בלולה מרטין</h2>
        <p className="text-sm sm:text-lg text-muted max-w-2xl mx-auto">
          כל ביקור אצלנו הוא הרבה מעבר לארוחה – הוא חוויה של טעמים, אנשים ורגעים שמרגישים כמו חופשה.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={moments[index].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-xl sm:rounded-2xl shadow-elegant"
          >
            <div className="aspect-video sm:aspect-[16/9]">
              <Image
                src={moments[index].image}
                alt={moments[index].title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default MomentsSection;