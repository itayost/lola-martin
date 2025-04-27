// src/components/menu/MenuCategories.jsx - Simplified version
import MenuItem from './MenuItem';
import { getHebrewCategory } from '../../utils/categoryTranslations';

const CategorySection = ({ categoryName, items }) => {
  // Get Hebrew translation of category name
  const hebrewCategoryName = getHebrewCategory(categoryName);

  return (
    <div className="pt-4 mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">
          {hebrewCategoryName}
        </h2>
        <div className="w-16 h-1 bg-accent mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <MenuItem 
            key={item.id || Math.random().toString()} 
            item={item} 
          />
        ))}
      </div>
    </div>
  );
};

const MenuCategories = ({ categories, activeTab }) => {
  // Normalize categories to ensure we can iterate over them
  const normalizeCategories = (cats) => {
    if (typeof cats === 'object' && cats !== null && !Array.isArray(cats)) {
      return Object.entries(cats);
    }
    
    if (Array.isArray(cats)) {
      return cats;
    }
    
    return [];
  };

  const categoryEntries = normalizeCategories(categories);
  
  // Show message if no categories found
  if (categoryEntries.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted text-lg">לא נמצאו מנות בתפריט זה</p>
      </div>
    );
  }

  // Render each category section
  return (
    <div className="space-y-16 mb-12">
      {categoryEntries.map(([categoryName, items], index) => {
        // Ensure items is an array and not empty
        const safeItems = Array.isArray(items) ? items : [];
        
        // Only render non-empty categories
        return safeItems.length > 0 ? (
          <CategorySection 
            key={`${activeTab}-${categoryName}-${index}`}
            categoryName={categoryName}
            items={safeItems}
          />
        ) : null;
      }).filter(Boolean)}
    </div>
  );
};

export default MenuCategories;