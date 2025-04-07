// src/pages/about.jsx
import React from 'react';
import Head from 'next/head';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import GallerySection from '../components/about/GallerySection';
import CallToAction from '../components/about/CallToAction';
import { PAGE_METADATA } from '../utils/metadataUtils';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>{PAGE_METADATA.about.title}</title>
        <meta name="description" content={PAGE_METADATA.about.description} />
        <meta name="keywords" content={PAGE_METADATA.about.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={PAGE_METADATA.about.title} />
        <meta property="og:description" content={PAGE_METADATA.about.description} />
        <meta property="og:url" content="https://www.lolamartin.co.il/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="לולה מרטין" />
        <meta property="og:image" content={`https://www.lolamartin.co.il${PAGE_METADATA.about.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_METADATA.about.title} />
        <meta name="twitter:description" content={PAGE_METADATA.about.description} />
        <meta name="twitter:image" content={`https://www.lolamartin.co.il${PAGE_METADATA.about.image}`} />
      </Head>
      
      <AboutHero />
      <StorySection />
      <GallerySection />
      <CallToAction />
    </>
  );
};

export default AboutPage;