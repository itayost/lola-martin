// src/pages/_app.js
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Meta from '../components/meta/Meta';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import siteMetadata from '../data/siteMetadata';

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Default metadata for all pages (can be overridden by individual pages)
  const defaultMeta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    image: siteMetadata.image,
    openGraph: {
      site_name: siteMetadata.title,
    },
    additionalMetaTags: [
      { name: 'application-name', content: siteMetadata.title },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: siteMetadata.title },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
    ]
  };

  return (
    <>
      {/* Base metadata that applies to all pages if not overridden */}
      <Meta {...defaultMeta} />
      
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