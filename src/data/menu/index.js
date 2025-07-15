// Lazy load categories for better performance
const loadCategory = async category => {
  switch (category) {
    case 'appetizers':
      return import('./categories/appetizers');
    case 'salads':
      return import('./categories/salads');
    case 'mains':
      return import('./categories/mains');
    case 'sushi':
      return import('./categories/sushi');
    case 'drinks':
      return import('./categories/drinks');
    case 'desserts':
      return import('./categories/desserts');
    default:
      return { default: [] };
  }
};

// Export views directly for initial page load
export { lunch } from './views/lunch';
export { dinner } from './views/dinner';
export { sushi } from './views/sushi';

// Export lazy loader for categories
export { loadCategory };

// For components that need all data immediately (like search)
export const loadAllMenuData = async () => {
  const [appetizers, salads, mains, sushi, drinks, desserts] = await Promise.all([
    loadCategory('appetizers'),
    loadCategory('salads'),
    loadCategory('mains'),
    loadCategory('sushi'),
    loadCategory('drinks'),
    loadCategory('desserts'),
  ]);

  return {
    ...appetizers,
    ...salads,
    ...mains,
    ...sushi,
    ...drinks,
    ...desserts,
  };
};

// Helper function to get specific category items
export const getCategoryItems = async categoryName => {
  const module = await loadCategory(categoryName);

  // Extract all exported arrays from the module
  const items = [];
  Object.values(module).forEach(value => {
    if (Array.isArray(value)) {
      items.push(...value);
    }
  });

  return items;
};

// Helper function to search items across all categories
export const searchMenuItems = async searchTerm => {
  const allData = await loadAllMenuData();
  const searchLower = searchTerm.toLowerCase();
  const results = [];

  Object.values(allData).forEach(categoryArray => {
    if (Array.isArray(categoryArray)) {
      const matches = categoryArray.filter(
        item =>
          item.name?.toLowerCase().includes(searchLower) ||
          item.description?.toLowerCase().includes(searchLower)
      );
      results.push(...matches);
    }
  });

  return results;
};
