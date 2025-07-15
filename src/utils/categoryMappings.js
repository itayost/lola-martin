// src/utils/categoryMappings.js
// Maps Hebrew category names to English category values in the data

export const hebrewToEnglishCategories = {
  // Appetizers
  פתיחים: 'Starters',
  ראשונות: 'Appetizers',

  // Salads
  סלטים: 'Salads',

  // Main courses
  עיקריות: ['Main Courses', 'Seafood', 'Meat and Poultry'],
  דגים: 'Main Courses',
  'פירות ים': 'Seafood',
  'בשר ועוף': 'Meat and Poultry',

  // Sushi
  ניגירי: 'Nigiri',
  סשימי: 'Sashimi',
  מאקי: 'Maki Sushi',
  'רולים מיוחדים': 'Special Rolls',
  טבעוני: 'Vegan Sushi',
  טמאקי: 'Temaki',
  'אינסייד אאוט': 'Inside Out Rolls',

  // Drinks
  קוקטיילים: 'Cocktails',
  'יין מבעבע': 'Sparkling Wine',
  'יין רוזה': 'Rosé Wine',
  'יין לבן': 'White Wine',
  'יין אדום': 'Red Wine',

  // Desserts
  קינוחים: 'Desserts',
};

// Reverse mapping for displaying Hebrew names from English categories
export const englishToHebrewCategories = {
  Starters: 'פתיחים',
  Appetizers: 'ראשונות',
  Salads: 'סלטים',
  'Main Courses': 'עיקריות',
  Seafood: 'פירות ים',
  'Meat and Poultry': 'בשר ועוף',
  Nigiri: 'ניגירי',
  Sashimi: 'סשימי',
  'Maki Sushi': 'מאקי',
  'Special Rolls': 'רולים מיוחדים',
  'Vegan Sushi': 'טבעוני',
  Temaki: 'טמאקי',
  'Inside Out Rolls': 'אינסייד אאוט',
  Cocktails: 'קוקטיילים',
  'Sparkling Wine': 'יין מבעבע',
  'Rosé Wine': 'יין רוזה',
  'White Wine': 'יין לבן',
  'Red Wine': 'יין אדום',
  Desserts: 'קינוחים',
};

// Helper function to get English category from Hebrew
export const getEnglishCategory = hebrewCategory => {
  return hebrewToEnglishCategories[hebrewCategory] || hebrewCategory;
};

// Helper function to check if an item belongs to a Hebrew category
export const itemBelongsToCategory = (item, hebrewCategory) => {
  const englishCategories = hebrewToEnglishCategories[hebrewCategory];

  if (!englishCategories) {
    // If no mapping found, try direct match
    return item.category === hebrewCategory;
  }

  // Handle array of categories (like 'עיקריות' which maps to multiple English categories)
  if (Array.isArray(englishCategories)) {
    return englishCategories.includes(item.category);
  }

  // Single category match
  return item.category === englishCategories;
};
