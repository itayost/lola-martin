// src/data/aboutData.js

// Gallery image descriptions mapping
const imageDescriptions = {
  'restaurant-1.jpg': 'חלל המסעדה',
  'restaurant-2.jpg': 'הבר שלנו',
  'restaurant-3.jpg': 'חלל המסעדה',
  'restaurant-4.jpg': 'חלל המסעדה',
  'restaurant-5.jpg': 'חלל המסעדה',
  'food-1.jpg': 'מנת דגל - פירות ים',
  'food-2.jpg': 'מנת דג טרי',
  'food-3.jpg': 'אויסטרים טריים',
  'food-4.jpg': 'קוקטייל מיוחד',
  'food-5.jpg': 'שף בפעולה',
  'table-1.jpg': 'שולחן במסעדה',
  'table-2.jpg': 'שולחן במסעדה',
  'table-3.jpg': 'שולחן במסעדה',
  'table-4.jpg': 'שולחן במסעדה',
  'salad.jpg': 'סלט טרי',
  'mulim.jpg': 'מולים טריים'
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
    'table-4.jpg',
    'salad.jpg',
    'mulim.jpg'
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

