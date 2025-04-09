// src/components/meta/PageMeta.jsx
import Meta from './Meta';
import siteMetadata from '../../data/siteMetadata';

/**
 * PageMeta - A simplified wrapper around Meta component for standard pages
 * This automatically pulls default metadata from the siteMetadata configuration
 * 
 * @param {Object} props
 * @param {string} props.pageName - The page name as defined in siteMetadata.pages
 * @param {Object} props.customMeta - Any custom metadata to override defaults
 */
const PageMeta = ({ pageName, customMeta = {} }) => {
  // Get page defaults from site metadata
  const pageDefaults = siteMetadata.pages[pageName] || {};
  
  // Merge defaults with any custom metadata
  const meta = {
    title: customMeta.title || pageDefaults.title,
    description: customMeta.description || pageDefaults.description,
    image: customMeta.image || pageDefaults.image,
    type: customMeta.type || pageDefaults.type || 'website',
    ...customMeta
  };
  
  return <Meta {...meta} />;
};

export default PageMeta;