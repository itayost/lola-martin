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
      
      <main className="relative bg-background text-text">
        <AboutHero />
        <WelcomeSection />
        <GallerySection />
      </main>
    </>
  );
};

export default AboutPage;