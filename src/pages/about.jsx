// src/pages/about.jsx
import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import AboutHero from '../components/about/AboutHero';
import WelcomeSection from '../components/about/WelcomeSection';
import GallerySection from '../components/about/GallerySection';


const AboutPage = () => {
  return (
    <>
      <PageMeta pageName="about" />
      
      <main className="bg-background text-text">
        <AboutHero />
        <WelcomeSection />
        <div className="relative overflow-hidden">
          <GallerySection />
          <FloatingDecorations 
            variant="mixed" 
            count={16} 
            opacity={0.25} 
            maxSize="16px" 
          />
        </div>
      </main>
    </>
  );
};

export default AboutPage;