// src/components/meta/Meta.jsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '../../data/siteMetadata';

/**
 * Meta component for managing all SEO and meta tags
 * This component should be used on all pages to ensure consistent metadata handling
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.image - OG image URL (relative or absolute)
 * @param {string} props.type - OG type (website, article, etc.)
 * @param {Object} props.openGraph - Additional OpenGraph properties
 * @param {Object} props.twitter - Twitter card specific properties
 * @param {Array} props.additionalMetaTags - Any additional meta tags
 */
const Meta = ({
  title,
  description,
  image,
  type = 'website',
  openGraph,
  twitter,
  additionalMetaTags = [],
}) => {
  const router = useRouter();
  
  // Fallbacks to site defaults
  const metaTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`) : `${siteMetadata.siteUrl}${siteMetadata.image}`;
  
  // Canonical URL (important for SEO)
  const canonical = `${siteMetadata.siteUrl}${router.asPath}`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph Tags - for Facebook, WhatsApp, etc */}
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={metaTitle} />
      <meta property="og:determiner" content="the" />
      {siteMetadata.facebookAppId && (
        <meta property="fb:app_id" content={siteMetadata.facebookAppId} />
      )}
      
      {/* Extra OpenGraph properties */}
      {openGraph && 
        Object.entries(openGraph).map(([property, content]) => (
          <meta key={`og:${property}`} property={`og:${property}`} content={content} />
        ))
      }
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {siteMetadata.twitterHandle && (
        <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      )}
      
      {/* Extra Twitter properties */}
      {twitter && 
        Object.entries(twitter).map(([name, content]) => (
          <meta key={`twitter:${name}`} name={`twitter:${name}`} content={content} />
        ))
      }
      
      {/* WhatsApp preview specific - these are already covered by OG tags */}
      
      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={`meta-${index}`} {...tag} />
      ))}
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default Meta;