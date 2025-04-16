// src/pages/_app.js
import { useState, useEffect, createContext, useContext } from 'react';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import Meta from '../components/meta/Meta';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import siteMetadata from '../data/siteMetadata';

// Create Animation Context
export const AnimationContext = createContext({ animationsReady: false });
export const useAnimationContext = () => useContext(AnimationContext);

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animationsReady, setAnimationsReady] = useState(false);

  // Handle initial loading
  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Small additional delay before enabling animations
      // This ensures the page is fully rendered first
      setTimeout(() => {
        setAnimationsReady(true);
      }, 200);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Listen for route changes to reset animations if needed
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Temporarily disable animations during navigation
      setAnimationsReady(false);
    };

    const handleRouteChangeComplete = () => {
      // Re-enable animations after navigation completes
      setTimeout(() => {
        setAnimationsReady(true);
      }, 200);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

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
      
      {/* Use LazyMotion for more efficient loading of Framer Motion */}
      <LazyMotion features={domAnimation} strict>
        {/* Provide animation context to all components */}
        <AnimationContext.Provider value={{ animationsReady }}>
          <Layout>
            <AnimatePresence 
              mode="wait" 
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </Layout>
        </AnimationContext.Provider>
      </LazyMotion>
    </>
  );
}

export default MyApp;