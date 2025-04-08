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
        <Hero />
        <WelcomeSection />
        <MenuHighlights />
        <Moments />
        <Location />        
      </main>
    </>
  );
}