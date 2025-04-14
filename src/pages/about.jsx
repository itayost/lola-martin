// src/pages/about.jsx
import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import AboutHero from '../components/about/AboutHero';
import WelcomeSection from '../components/sections/WelcomeSection';
import GallerySection from '../components/about/GallerySection';

const AboutPage = () => {

  // Get metadata for this page
  const metadata = getPageMetadata('about');
  const ogImageUrl = metadata.ogImage;

  return (
    <>
      <pageMeta pageName="about"/>
      <main className="bg-background text-text">
        <AboutHero />
        <WelcomeSection />
        <GallerySection />
      </main>
    </>
  );
};

export default AboutPage;