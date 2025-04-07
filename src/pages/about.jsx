// src/pages/about.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import ConceptSection from '../components/about/ConceptSection';
import ChefSection from '../components/about/ChefSection';
import BehindTheKitchen from '../components/about/BehindTheKitchen';
import TeamSection from '../components/about/TeamSection';
import GallerySection from '../components/about/GallerySection';
import CallToAction from '../components/about/CallToAction';
import PageNavigation from '../components/ui/PageNavigation';
import { getPageMetadata } from '../utils/metadataUtils';

const AboutPage = () => {
  // Define navigation pages for PageNavigation component
  const  = [
    { path: '/', label: 'בית' },
    { path: '/menu', label: 'תפריט' },
    { path: '/about', label: 'אודות' },
    { path: '/contact', label: 'צור קשר' },
  ];
  
  // Get metadata for this page
  const metadata = getPageMetadata('about');
  const ogImageUrl = metadata.ogImage;

  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="bg-background text-text">
        <AboutHero />
        
        
        {/* Content Sections */}
        <StorySection />
        <ConceptSection />
        <TeamSection />
        <GallerySection />
        
      </div>
    </Layout>
  );
};

export default AboutPage;