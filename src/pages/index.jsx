import Hero from '../components/sections/Hero';
import WelcomeSection from '../components/sections/WelcomeSection';
import Moments from '../components/sections/Moments';
import Location from '../components/sections/Location';
import MenuHighlights from '../components/sections/MenuHighlights';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lola Martin</title>
        <meta property="og:title" content="Lola Martin" />
        <meta property="og:type" content="SeaFood Bar | Restaurant" />
        <meta property="og:url" content="https://lola-martin.vercel.app/" />
        <meta property="og:image" content="/images/og-home.jpg" />
      </Head>
      <main className="bg-card text-text dark:bg-background dark:text-white antialiased">
        <Hero />
        <WelcomeSection />
        <MenuHighlights/>
        <Moments />
        <Location />
      </main>
    </>
  );
}