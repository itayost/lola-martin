// src/utils/metadataUtils.js
export const SITE_CONFIG = {
  name: 'לולה מרטין',
  shortName: 'Lola Martin',
  description: 'מסעדה יוקרתית המציעה חוויית אוכל בלתי נשכחת',
  url: 'https://www.lolamartin.co.il',
  type: 'restaurant.restaurant',
  locale: 'he_IL',
  socialMedia: {
    facebook: 'https://facebook.com/lolamartin',
    instagram: 'https://instagram.com/lolamartin',
    twitter: 'https://twitter.com/lolamartin'
  }
};

const baseKeywords = [
  'מסעדה בהרצליה',
  'מסעדה ים-תיכונית',
  'דגים ופירות ים',
  'מסעדת שף',
  'אוכל טרי',
  'חוויה קולינרית'
];

export const generateMetadata = (pageConfig = {}) => {
  const {
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    image = '/images/og-restaurant.jpg',
    path = '',
    keywords = []
  } = pageConfig;

  // Combine and deduplicate keywords
  const combinedKeywords = [...new Set([...baseKeywords, ...keywords])].join(', ');

  // Construct full URLs
  const fullUrl = `${SITE_CONFIG.url}${path ? `/${path.replace(/^\//, '')}` : ''}`;
  const fullImage = `${SITE_CONFIG.url}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    // Standard metadata
    title,
    description,
    keywords: combinedKeywords,

    // Open Graph metadata
    openGraph: {
      title,
      description,
      type: SITE_CONFIG.type,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      images: [{
        url: fullImage,
        width: 1200,
        height: 630,
        alt: title
      }]
    },

    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      site: SITE_CONFIG.socialMedia.twitter
    },

    // Additional metadata for <Head>
    additionalMetaTags: [
      { name: 'author', content: SITE_CONFIG.name },
      { name: 'robots', content: 'index, follow' }
    ]
  };
};

export const PAGE_METADATA = {
  home: {
    title: 'לולה מרטין - מסעדת שף ים-תיכונית מובילה',
    description: 'חוויה קולינרית ייחודית של דגים ופירות ים טריים בלב הרצליה',
    path: '',
    keywords: [
      'מסעדת שף',
      'מסעדה בהרצליה פיתוח',
      'מנות דגים טריים'
    ]
  },
  about: {
    title: 'אודות לולה מרטין - הסיפור שלנו',
    description: 'גלו את הסיפור של מסעדת לולה מרטין, הרעיון הקולינרי והחזון המקורי שלנו',
    path: 'about',
    image: '/images/about/food-2.jpg',
    keywords: [
      'סיפור המסעדה',
      'שף לולה מרטין',
      'מטבח ים-תיכוני'
    ]
  },
  menu: {
    title: 'תפריט לולה מרטין - מנות דגים ופירות ים',
    description: 'תפריט מגוון של מנות דגים, פירות ים, סושי וקינוחים מלאי השראה',
    path: 'menu',
    image: '/images/food-2.jpg',
    keywords: [
      'תפריט סושי',
      'מנות דגים',
      'פירות ים טריים'
    ]
  },
  contact: {
    title: 'צור קשר - לולה מרטין',
    description: 'צרו קשר עם מסעדת לולה מרטין. הזמנת שולחן, בירורים ופרטי התקשרות',
    path: 'contact',
    image: '/images/restaurant-bg.jpg',
    keywords: [
      'הזמנת שולחן',
      'פרטי התקשרות',
      'שעות פתיחה'
    ]
  }
};

// src/utils/metadataUtils.js
export const renderMetadata = (pageConfig) => {
  const metadata = generateMetadata(pageConfig);
  
  // Validate and fallback for twitter:card
  const twitterCard = 
    ['summary', 'summary_large_image', 'app', 'player'].includes(metadata.twitter.card)
      ? metadata.twitter.card
      : 'summary_large_image';

  // Ensure URLs and images are fully qualified
  const qualifyUrl = (url) => 
    url.startsWith('http') ? url : `${SITE_CONFIG.url}${url.startsWith('/') ? url : `/${url}`}`;

  // Ensure image exists with fallback
  const twitterImage = qualifyUrl(
    metadata.twitter.images[0] || '/images/og-restaurant.jpg'
  );
  const ogImage = qualifyUrl(
    metadata.openGraph.images[0]?.url || '/images/og-restaurant.jpg'
  );

  return (
    <>
      {/* Browser Title */}
      <title>{metadata.title}</title>

      {/* Search Engine Description */}
      <meta name="description" content={metadata.description} />

      {/* Twitter Card Metadata */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:title" content={metadata.twitter.title} />
      <meta property="twitter:description" content={metadata.twitter.description} />
      <meta property="twitter:image" content={twitterImage} />
      {metadata.twitter.site && (
        <meta name="twitter:site" content={metadata.twitter.site} />
      )}

      {/* Open Graph Metadata */}
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:type" content={metadata.openGraph.type} />
    </>
  );
};