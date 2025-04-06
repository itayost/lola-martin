// src/pages/about.jsx
import React from 'react';
import AboutHero from '../components/about/AboutHero';
import SplitSection from '../components/about/SplitSection';
import StorySection from '../components/about/StorySection';
import ConceptSection from '../components/about/ConceptSection';
import ChefSection from '../components/about/ChefSection';
import BehindTheKitchen from '../components/about/BehindTheKitchen';
import GallerySection from '../components/about/GallerySection';
import CallToAction from '../components/about/CallToAction';
import HalfButtonScrollingSections from '../components/sections/HalfButtonScrollingSections';

const AboutPage = () => {
  return (
    <div className="bg-background text-text">
      <AboutHero />
      <HalfButtonScrollingSections />
      <GallerySection />
      <CallToAction />
    </div>
  );
};

export default AboutPage;