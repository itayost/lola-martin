import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../ui/Image';
import Section from '../ui/Section';

const moments = [
  {
    id: 1,
    image: '/images/moments/moment-1.jpg',
    title: 'טוסט לקינוח חגיגי',
    description: 'רגע של שמחה עם קוקטיילים נוצצים וסיום מתוק במיוחד.'
  },
  {
    id: 2,
    image: '/images/moments/moment-2.jpg',
    title: 'מפגש בין חברים',
    description: 'שולחן מלא חיוכים, סיפורים, וצחוק מתגלגל לצד יין טוב.'
  },
  {
    id: 3,
    image: '/images/moments/moment-3.jpg',
    title: 'הפתעת שף בשישי בערב',
    description: 'המנה שלא ציפינו לה – והפכה לשיחת הערב שלנו.'
  },
];

const MomentsSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % moments.length);
  const prev = () => setIndex((index - 1 + moments.length) % moments.length);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-elegant"
          >
            <Image
              src={moments[index].image}
              alt={moments[index].title}
              width={1200}
              height={600}
              className="object-cover w-full h-[400px]"
            />
            <div className="bg-background p-6 text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {moments[index].title}
              </h3>
              <p className="text-lightMuted text-lg">{moments[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="px-4 py-2 text-sm font-medium text-gold border border-gold rounded hover:bg-gold hover:text-black transition"
          >
            הקודם
          </button>
          <button
            onClick={next}
            className="px-4 py-2 text-sm font-medium text-gold border border-gold rounded hover:bg-gold hover:text-black transition"
          >
            הבא
          </button>
        </div>
      </div>
    </Section>
  );
};

export default MomentsSection;