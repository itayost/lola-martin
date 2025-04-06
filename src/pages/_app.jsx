// src/pages/_app.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lola Martin - מסעדה יוקרתית</title>
        <meta name="description" content="מסעדה יוקרתית המציעה חוויית אוכל בלתי נשכחת" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AnimatePresence 
          mode="wait" 
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;