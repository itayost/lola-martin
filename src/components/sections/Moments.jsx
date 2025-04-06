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
    <Section className="bg-card text-text py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gold mb-4">רגעים בלתי נשכחים בלולה מרטין</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          כל ביקור אצלנו הוא הרבה מעבר לארוחה – הוא חוויה של טעמים, אנשים ורגעים שמרגישים כמו חופשה.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={moments[index].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl shadow-elegant"
          >
            <Image
              src={moments[index].image}
              alt={moments[index].title}
              width={1200}
              height={600}
              className="object-cover w-full h-[400px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default MomentsSection;