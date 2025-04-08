import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

// קומפוננטים של דף הבית
import Hero from '../components/sections/Hero';
import WelcomeSection from '../components/sections/WelcomeSection';
import Moments from '../components/sections/Moments';
import Location from '../components/sections/Location';
import MenuHighlights from '../components/sections/MenuHighlights';

export default function HomePage() {
  // אפשרות להוסיף לוגיקה לאחר טעינת הדף
  useEffect(() => {
    // אפשר להוסיף כאן קוד שירוץ אחרי שהדף נטען
    // למשל אנליטיקס או לוגיקה אחרת
  }, []);

  return (
    <>
      <Head>
        <title>לולה מרטין - מסעדה יוקרתית בהרצליה</title>
        <meta name="description" content="מסעדת לולה מרטין - חוויה קולינרית ייחודית המשלבת טעמים ים תיכוניים מסורתיים עם נגיעות מודרניות. הזמינו שולחן עכשיו." />
        <meta property="og:title" content="לולה מרטין - מסעדה יוקרתית בהרצליה" />
        <meta property="og:description" content="חוויה קולינרית ייחודית המשלבת טעמים ים תיכוניים מסורתיים עם נגיעות מודרניות" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://lolamartin.co.il" />
        <link rel="canonical" href="https://lolamartin.co.il" />
      </Head>

      <main className="bg-card text-text dark:bg-background dark:text-white antialiased">
        {/* הירו הראשי עם וידאו ולואדר לוגו */}
        <Hero />

        {/* סקשן "ברוכים הבאים" עם טקסט מבוא על המסעדה */}
        <WelcomeSection />

        {/* הצגת דוגמאות מהתפריט */}
        <MenuHighlights />

        {/* רגעים מיוחדים במסעדה */}
        <Moments />

        {/* סקשן מיקום המסעדה עם מפה */}
        <Location />

        {/* כפתור חזרה לראש העמוד */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-background shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="חזרה לראש העמוד"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.button>
      </main>
    </>
  );
}