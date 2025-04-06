// src/components/about/BehindTheKitchen.jsx
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const BehindTheKitchen = () => {
  return (
    <Section className="bg-card text-text py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gold mb-4">מאחורי המטבח של לולה מרטין</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          אצלנו, כל מנה מתחילה מהלב – עם חומרי גלם טריים, צוות יצירתי ואהבה לאירוח.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-elegant"
        >
          <video
            src="/videos/kitchen.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8 text-right"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">השף דניאל</h3>
            <p className="text-gold italic">
              "האוכל הוא סיפור אהבה שמתחיל מהשוק המקומי ומסתיים אצלכם בצלחת"
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">טריות עונתית</h3>
            <p className="text-muted">
              כל מרכיב נבחר בקפידה לפי העונה, ישירות מהחקלאים המקומיים.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">בישול פתוח</h3>
            <p className="text-muted">
              המטבח שלנו פתוח, כי אין לנו מה להסתיר – רק תשוקה אמיתית לבישול.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default BehindTheKitchen;