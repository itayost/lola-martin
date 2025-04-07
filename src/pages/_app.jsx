// src/pages/_app.jsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { PAGE_METADATA } from '../utils/metadataUtils';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Default OG image for the site - used when no specific page OG image is provided
  const ogImageUrl = PAGE_METADATA.ogImage;
  
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    
    // Initial loading state
    setTimeout(() => setIsLoading(false), 500);
    
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
        <meta property="og:title" content={PAGE_METADATA.title} />
        <meta property="og:description" content={PAGE_METADATA.description} />
        <meta property="og:url" content={PAGE_METADATA.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="לולה מרטין" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content={PAGE_METADATA.themeColor} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <AnimatePresence 
          mode="wait" 
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;