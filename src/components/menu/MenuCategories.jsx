// src/components/menu/MenuCategories.jsx
import React from 'react';
import { m } from 'framer-motion';
import MenuItem from './MenuItem';
import { getHebrewCategory } from '../../utils/hebrewTranslations';
import AnimatedElement from '../shared/AnimatedElement';
import { useAnimationContext } from '../../pages/_app';

const MenuCategories = ({ categories, activeTab }) => {
  const { animationsReady } = useAnimationContext();

  // Debug logging for categories - keep this for troubleshooting
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Categories in MenuCategories:', categories);
    }
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
            index={index}
          />
        ) : null;
      }).filter(Boolean)}
    </div>
  );
};

function CategorySection({ categoryName, items, index }) {
  // Get Hebrew translation of category name
  const hebrewCategoryName = getHebrewCategory(categoryName);
  const { animationsReady } = useAnimationContext();

  const staggerDelay = 0.1; // Delay between item animations

  return (
    <AnimatedElement
      animation="fadeInUp"
      delay={index * 0.1} // Stagger between categories
      className="pt-4"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">
          {hebrewCategoryName}
        </h2>
        <div className="w-16 h-1 bg-accent mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, itemIndex) => (
          animationsReady ? (
            <m.div
              key={item.id || `${categoryName}-${itemIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: Math.min(itemIndex * staggerDelay, 0.6) // Cap maximum delay
              }}
            >
              <MenuItem item={item} />
            </m.div>
          ) : (
            <div 
              key={item.id || `${categoryName}-${itemIndex}`}
              className="animate-fallback animate-fallback-fadeInUp"
              style={{ 
                // Inline styles for fallback animation delay
                animationDelay: `${Math.min(itemIndex * staggerDelay, 0.6)}s`
              }}
            >
              <MenuItem item={item} />
            </div>
          )
        ))}
      </div>
    </AnimatedElement>
  );
}

export default MenuCategories;