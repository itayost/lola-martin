// src/pages/about.jsx
import React from 'react';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import GallerySection from '../components/about/GallerySection';
import CallToAction from '../components/about/CallToAction';
// src/pages/about.jsx
import Head from 'next/head';
import { generateMetadata, PAGE_METADATA } from '../utils/metadataUtils';

const AboutPage = () => {
  const pageMetadata = generateMetadata(PAGE_METADATA.about);

  return (
    <>
      <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords} />
        <meta name="robots" content={pageMetadata.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={pageMetadata.openGraph.title} />
        <meta property="og:description" content={pageMetadata.openGraph.description} />
        <meta property="og:url" content={pageMetadata.openGraph.url} />
        <meta property="og:type" content={pageMetadata.openGraph.type} />
        <meta property="og:site_name" content={pageMetadata.openGraph.siteName} />
        <meta property="og:image" content={pageMetadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={pageMetadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={pageMetadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={pageMetadata.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta name="twitter:card" content={pageMetadata.twitter.card} />
        <meta name="twitter:title" content={pageMetadata.twitter.title} />
        <meta name="twitter:description" content={pageMetadata.twitter.description} />
        <meta name="twitter:image" content={pageMetadata.twitter.images[0]} />
        <meta name="twitter:site" content={pageMetadata.twitter.site} />

        {/* Additional meta tags */}
        {pageMetadata.additionalMetaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
      </Head>
      <AboutHero />
      <StorySection/>
      <GallerySection/>
    </>
  );
};

export default AboutPage;