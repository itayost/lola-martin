// src/components/menu/MenuCategories.jsx - Updated for new menu structure
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { getHebrewCategory } from '../../utils/categoryTranslations';

const CategorySection = ({ categoryName, items }) => {
  const hebrewCategoryName = getHebrewCategory(categoryName);

  return (
    <div className="pt-4 mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">{hebrewCategoryName}</h2>
        <div className="w-16 h-1 bg-accent mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <MenuItem key={item.id || Math.random().toString()} item={item} />
        ))}
      </div>
    </div>
  );
};

const MenuCategories = ({ categories, activeTab, viewType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedCategories, setLoadedCategories] = useState(categories);

  // Update loaded categories when props change
  useEffect(() => {
    setLoadedCategories(categories);
  }, [categories]);

  // If viewType is provided (lunch, dinner, sushi), the data is already loaded
  // If categories is provided directly, use it as is

  const normalizeCategories = cats => {
    if (typeof cats === 'object' && cats !== null && !Array.isArray(cats)) {
      return Object.entries(cats);
    }

    if (Array.isArray(cats)) {
      return cats;
    }

    return [];
  };

  const categoryEntries = normalizeCategories(loadedCategories);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (categoryEntries.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted text-lg">לא נמצאו מנות בתפריט זה</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 mb-12">
      {categoryEntries
        .map(([categoryName, items], index) => {
          const safeItems = Array.isArray(items) ? items : [];

          return safeItems.length > 0 ? (
            <CategorySection
              key={`${activeTab || viewType}-${categoryName}-${index}`}
              categoryName={categoryName}
              items={safeItems}
            />
          ) : null;
        })
        .filter(Boolean)}
    </div>
  );
};

export default MenuCategories;
