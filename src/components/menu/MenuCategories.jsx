import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';
import { getHebrewCategory } from '../../utils/hebrewTranslations';

const MenuCategories = ({ categories, activeTab }) => {
  // Debug logging for categories
  React.useEffect(() => {
    console.log('Categories in MenuCategories:', categories);
    console.log('Categories type:', typeof categories);
    console.log('Categories keys:', Object.keys(categories));
  }, [categories]);

  // Normalize categories to ensure we can always iterate over them
  const normalizeCategories = (cats) => {
    // If categories is an object, convert to entries
    if (typeof cats === 'object' && cats !== null) {
      return Object.entries(cats);
    }
    
    // If it's already an array of entries, return as-is
    if (Array.isArray(cats)) {
      return cats;
    }
    // If not a valid structure, return empty array
    console.warn('Invalid categories structure:', cats);
    return [];
  };

  const categoryEntries = normalizeCategories(categories);
  
  if (categoryEntries.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted text-lg">לא נמצאו מנות בתפריט זה</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 mb-12">
      {categoryEntries.map(([categoryName, items], index) => {
        // Ensure items is an array and not empty
        const safeItems = Array.isArray(items) ? items : [];
        
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

function CategorySection({ categoryName, items }) {
  // Get Hebrew translation of category name
  const hebrewCategoryName = getHebrewCategory(categoryName);

  return (
    <div className="pt-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">
          {hebrewCategoryName}
        </h2>
        <div className="w-16 h-1 bg-accent mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {items.map(item => (
            <motion.div
              key={item.id || Math.random().toString()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MenuCategories;