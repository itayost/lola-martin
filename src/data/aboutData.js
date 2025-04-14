// src/data/aboutData.js

// Gallery image descriptions mapping
const imageDescriptions = {
  'restaurant-1.jpg': 'חלל המסעדה',
  'restaurant-2.jpg': 'חלל המסעדה',
  'restaurant-3.jpg': 'חלל המסעדה',
  'restaurant-4.jpg': 'חלל המסעדה',
  'restaurant-5.jpg': 'חלל המסעדה',
  'food-1.jpg': 'שרימפס בשום חמאה ויין',
  'food-2.jpg': 'סשימי סלמון',
  'food-3.jpg': 'שרימפס בשום חמאה ויין',
  'food-4.jpg': 'מולים בירקות שורש',
  'food-5.jpg': 'סלט עגבניות',
  'table-1.jpg': 'שולחן מלא בכל טוב',
  'table-2.jpg': 'קריספי רייס',
  'table-3.jpg': 'קרפצ׳יו חציל',
  'table-4.jpg': 'תערובת סושי',
};

// Function to generate gallery data
export const generateGalleryData = () => {
  const galleryImages = [
    'restaurant-1.jpg',
    'restaurant-2.jpg',
    'restaurant-3.jpg',
    'restaurant-4.jpg',
    'restaurant-5.jpg',
    'food-1.jpg',
    'food-2.jpg',
    'food-3.jpg',
    'food-4.jpg',
    'food-5.jpg',
    'table-1.jpg',
    'table-2.jpg',
    'table-3.jpg',
    'table-4.jpg'
  ];

  return galleryImages.map(filename => ({
    src: `/images/gallery/${filename}`,
    alt: imageDescriptions[filename] || 'תמונה מהמסעדה'
  }));
};

// Export the generated gallery data
export const gallery = generateGalleryData();

export const galleryContent = {
  title: "הגלריה שלנו",
  description: "תמונות מהמסעדה ומנות הדגל שלנו"
};

