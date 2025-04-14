// src/pages/about.jsx
import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import AboutHero from '../components/about/AboutHero';
import WelcomeSection from '../components/sections/WelcomeSection';
import GallerySection from '../components/about/GallerySection';

// Remove any reference to getPageMetadata
// The PageMeta component will handle getting metadata from siteMetadata.js

const AboutPage = () => {
  return (
    <>
      <PageMeta pageName="about" />
      
      <main className="bg-background text-text">
        <AboutHero />
        <WelcomeSection />
        <GallerySection />
      </main>
    </>
  );
};

export default AboutPage;