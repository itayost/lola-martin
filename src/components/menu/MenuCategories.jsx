// src/components/menu/MenuCategories.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';
import { getHebrewCategory } from '../../utils/categoryTranslations';

const MenuCategories = ({ categories, activeTab }) => {
  // Debug log to understand categories
  useEffect(() => {
    console.log('Categories in MenuCategories:', categories);
    console.log('Active Tab in MenuCategories:', activeTab);
  }, [categories, activeTab]);

  const categoryEntries = Object.entries(categories);
  
  if (categoryEntries.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted text-lg">לא נמצאו מנות בתפריט זה</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 mb-12">
      {categoryEntries.map(([categoryName, items], index) => (
        <CategorySection 
          key={`${activeTab}-${categoryName}`}
          categoryName={categoryName}
          items={items}
          index={index}
        />
      ))}
    </div>
  );
};

const CategorySection = ({ categoryName, items, index }) => {
  // Translate the category name to Hebrew
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
              key={item.id}
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
};

export default MenuCategories;