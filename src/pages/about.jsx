// src/pages/about.jsx
import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';

const AboutPage = () => {
  return (
    <>
      <PageMeta pageName="about" />
      
      <main className="relative bg-background text-text">
        <AboutHero />
        <AboutStory />
      </main>
    </>
  );
};

export default AboutPage;