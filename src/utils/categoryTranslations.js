// src/utils/categoryTranslations.js

// Map of English category names to Hebrew translations
export const categoryTranslations = {
  'Starters': 'פתיחים',
  'Salads': 'סלטים',
  'Appetizers': 'מנות ראשונות',
  'Main Courses': 'דגים',
  'Seafood': 'פירות ים',
  'Meat and Poultry': 'בשר ועוף',
  'Desserts': 'קינוחים',
  'Nigiri': 'ניגירי',
  'Sashimi': 'סשימי',
  'Maki Sushi': 'מאקי סושי',
  'Special Rolls': 'רולים מיוחדים',
  'Vegan Sushi': 'סושי טבעוני',
  'Temaki': 'טמאקי',
  'Inside Out Rolls': 'רולים הפוכים',
  'Cocktails': 'קוקטיילים',
  'Sparkling Wine': 'יין מבעבע',
  'Rosé Wine': 'יין רוזה',
  'White Wine': 'יין לבן',
  'Red Wine': 'יין אדום',
};

// Function to get the Hebrew translation for a category
export const getHebrewCategory = (englishCategory) => {
  return categoryTranslations[englishCategory] || englishCategory;
};