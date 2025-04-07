// src/utils/metadataUtils.js

// Default metadata for the entire site
export const PAGE_METADATA = {
  title: 'לולה מרטין | Lola Martin',
  description: 'מסעדה יוקרתית המציעה חוויית אוכל בלתי נשכחת',
  ogImage: '/images/logos/web-app-manifest-512x512.jpg',
  siteUrl: 'https://lolamartin.co.il',
  locale: 'he_IL',
  themeColor: '#DAA06D',
  twitter: '@lolamartin',
};

// Page-specific metadata
export const PAGE_SPECIFIC_METADATA = {
  home: {
    title: 'לולה מרטין | Lola Martin',
    description: 'מסעדה יוקרתית המציעה חוויית אוכל בלתי נשכחת',
    ogImage: 'public/images/logos/web-app-manifest-512x512.png',
  },
  about: {
    title: 'אודות - לולה מרטין',
    description: 'הכירו את הסיפור של מסעדת לולה מרטין, השף שלנו, והקונספט הייחודי שלנו.',
    ogImage: '/public/images/logos/favicon.ico',
  },
  menu: {
    title: 'תפריט - לולה מרטין',
    description: 'תפריט המסעדה שלנו, המציע מגוון מנות מהמטבח הים תיכוני בשילוב עם מאכלי ים טריים.',
    ogImage: 'public/images/logos/web-app-manifest-512x512.png',
  },
  contact: {
    title: 'צור קשר - לולה מרטין',
    description: 'צרו קשר עם מסעדת לולה מרטין. שאלות, הזמנת שולחן, אירועים פרטיים.',
    ogImage: 'public/images/logos/web-app-manifest-512x512.png',
  },
  privacy: {
    title: 'מדיניות פרטיות - לולה מרטין',
    description: 'מדיניות הפרטיות של מסעדת לולה מרטין.',
    ogImage: '/public/images/logos/web-app-manifest-512x512.png',
  },
};

// Generate full metadata for a specific page
export const getPageMetadata = (pageName) => {
  const defaultMetadata = PAGE_METADATA;
  const pageMetadata = PAGE_SPECIFIC_METADATA[pageName] || {};
  
  return {
    ...defaultMetadata,
    ...pageMetadata,
  };
};

// Function to build complete Open Graph metadata
export const buildOpenGraphMetadata = (pageName, customValues = {}) => {
  const metadata = getPageMetadata(pageName);
  
  return {
    title: customValues.title || metadata.title,
    description: customValues.description || metadata.description,
    ogImage: customValues.ogImage || metadata.ogImage,
    url: customValues.url || `${metadata.siteUrl}/${pageName === 'home' ? '' : pageName}`,
    type: customValues.type || 'website',
  };
};