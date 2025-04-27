// src/utils/hebrewTranslations.js

// Import category translation function
import { getHebrewCategory } from './categoryTranslations';

// Map of English dietary restrictions to Hebrew translations
export const dietaryTranslations = {
  'Vegan': 'טבעוני',
  'Vegetarian': 'צמחוני',
  'Gluten Free': 'ללא גלוטן',
  'Dairy Free': 'ללא חלב',
  'Nut Free': 'ללא אגוזים',
  'Spicy': 'חריף',
  'Sugar Free': 'ללא סוכר',
  'Contains Alcohol': 'מכיל אלכוהול',
  'Raw': 'נא',
};

// Map of special tags to Hebrew translations
export const specialTagTranslations = {
  'Special': 'מיוחד',
  'New': 'חדש',
  'Popular': 'פופולרי',
  'Chef\'s Choice': 'בחירת השף',
  'Recommended': 'מומלץ',
  'Seasonal': 'עונתי',
  'Limited Time': 'לזמן מוגבל',
  'Signature Dish': 'מנת הדגל',
};

// Map of general UI terms to Hebrew translations
export const uiTranslations = {
  'All': 'הכל',
  'Menu': 'תפריט',
  'Lunch': 'צהריים',
  'Dinner': 'ערב',
  'Sushi': 'סושי',
  'Wine': 'יין',
  'Drinks': 'משקאות',
  'Desserts': 'קינוחים',
  'No items found': 'לא נמצאו פריטים',
  'bottle': 'בקבוק',
  'glass': 'כוס',
  'NIS': '₪',
  'Order Now': 'הזמן עכשיו',
  'Reserve a Table': 'הזמן שולחן',
  'View Menu': 'צפה בתפריט',
  'Contact Us': 'צור קשר',
  'Search': 'חיפוש',
  'Filter': 'סינון',
  'Sort By': 'מיין לפי',
  'Price: Low to High': 'מחיר: מהנמוך לגבוה',
  'Price: High to Low': 'מחיר: מהגבוה לנמוך',
};

// Re-export the category translation function
export { getHebrewCategory };

// Translation function for dietary restrictions
export const getHebrewDietary = (englishDietary) => {
  return dietaryTranslations[englishDietary] || englishDietary;
};

// Translation function for special tags
export const getHebrewSpecialTag = (englishTag) => {
  return specialTagTranslations[englishTag] || englishTag;
};

// Translation function for UI elements
export const getHebrewUI = (englishUI) => {
  return uiTranslations[englishUI] || englishUI;
};

// Helper function to translate array of dietary restrictions
export const translateDietaryArray = (dietaryArray) => {
  if (!dietaryArray || !Array.isArray(dietaryArray)) return [];
  return dietaryArray.map(diet => getHebrewDietary(diet));
};

// Helper function to format price with Hebrew symbol
export const formatPrice = (price) => {
  if (typeof price === 'object') {
    const formattedPrice = {};
    if (price.bottle) formattedPrice.bottle = `${price.bottle} ${getHebrewUI('NIS')}`;
    if (price.glass) formattedPrice.glass = `${price.glass} ${getHebrewUI('NIS')}`;
    return formattedPrice;
  }
  return `${price} ${getHebrewUI('NIS')}`;
};

// Helper function to get translated price labels
export const getPriceLabel = (type) => {
  return getHebrewUI(type);
};

// Helper for formatting multiple price options
export const formatMultiplePrices = (priceObj) => {
  if (!priceObj || typeof priceObj !== 'object') return '';
  
  const priceStrings = [];
  
  if (priceObj.bottle) {
    priceStrings.push(`${getHebrewUI('bottle')}: ${formatPrice(priceObj.bottle)}`);
  }
  
  if (priceObj.glass) {
    priceStrings.push(`${getHebrewUI('glass')}: ${formatPrice(priceObj.glass)}`);
  }
  
  return priceStrings;
};