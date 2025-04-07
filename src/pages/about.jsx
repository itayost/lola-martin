// src/pages/about.jsx
import React from 'react';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import GallerySection from '../components/about/GallerySection';
import CallToAction from '../components/about/CallToAction';
import Head from 'next/head';
import { generateMetadata, PAGE_METADATA } from '../utils/metadataUtils';
import StorySection from '../src/pages/about';

const AboutPage = () => {
  const pageMetadata = generateMetadata(PAGE_METADATA.about);

  return (
    <>
      <Head>
        <title>{PAGE_METADATA.title}</title>
        <meta name="description" content={PAGE_METADATA.description} />
        <meta name="keywords" content={PAGE_METADATA.keywords} />
        <meta name="robots" content={PAGE_METADATA.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={PAGE_METADATA.openGraph.title} />
        <meta property="og:description" content={PAGE_METADATA.openGraph.description} />
        <meta property="og:url" content={PAGE_METADATA.openGraph.url} />
        <meta property="og:type" content={PAGE_METADATA.openGraph.type} />
        <meta property="og:site_name" content={PAGE_METADATA.openGraph.siteName} />
        <meta property="og:image" content={PAGE_METADATA.openGraph.images[0].url} />
        <meta property="og:image:width" content={PAGE_METADATA.openGraph.images[0].width} />
        <meta property="og:image:height" content={PAGE_METADATA.openGraph.images[0].height} />
        <meta property="og:image:alt" content={PAGE_METADATA.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta name="twitter:card" content={PAGE_METADATA.twitter.card} />
        <meta name="twitter:title" content={PAGE_METADATA.twitter.title} />
        <meta name="twitter:description" content={PAGE_METADATA.twitter.description} />
        <meta name="twitter:image" content={PAGE_METADATA.twitter.images[0]} />
        <meta name="twitter:site" content={PAGE_METADATA.twitter.site} />

        {/* Additional meta tags */}
        PAGE_METADATA.additionalMetaTags.map(tag, index) => {
        <meta name={tag.name} key={index}  content={tag.content} />}
      <head /> 
      <AboutHero />
      <StorySection/>
      <GallerySection/>
    </>
};

export default AboutPage;