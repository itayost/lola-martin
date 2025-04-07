// src/pages/_app.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { PAGE_METADATA } from '../utils/metadataUtils';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content="https://lola-martin.vercel.app//about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="לולה מרטין" />
        
        {/* Additional OG image metadata */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <Layout>
        <AnimatePresence 
          mode="wait" 
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div key={router.pathname}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;