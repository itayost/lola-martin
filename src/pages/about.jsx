// src/pages/about.jsx
import React from 'react';
import Head from 'next/head';
import AboutHero from '../components/about/AboutHero';
import WelcomeSection from '../components/sections/WelcomeSection';
import GallerySection from '../components/about/GallerySection';
import FloatingDecorations from '../components/ui/FloatingDecorations';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>אודות - לולה מרטין</title>
        <meta name="description" content="הכירו את הסיפור של מסעדת לולה מרטין" />
      </Head>
      
      <div className="bg-background text-text">
        <AboutHero />
        <WelcomeSection />
        
        {/* Enhanced gallery section with floating decorations */}
        <div className="relative overflow-hidden">
          <GallerySection />
          <FloatingDecorations 
            variant="mixed" 
            count={16} 
            opacity={0.25} 
            maxSize="16px" 
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;