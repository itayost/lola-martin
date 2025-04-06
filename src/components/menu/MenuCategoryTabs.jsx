import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MenuCategoryTabs = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  activeTab, 
  itemsContainerRef 
}) => {
  const allCategoriesLabel = 'הכל';
  const [isScrolling, setIsScrolling] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === allCategoriesLabel) {
      setActiveCategory(null); // When "הכל" is clicked, set to null instead of "הכל"
    } else {
      setActiveCategory(category);
    }
  };

  const handleScroll = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if no categories
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex overflow-x-auto hide-scrollbar items-center gap-2 py-1">
      {/* "All" category button - always shown first */}
      <motion.button
        key="all-categories"
        whileTap={{ scale: 0.95 }}
        onClick={() => handleCategoryClick(allCategoriesLabel)}
        className={`whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors ${
          activeCategory === null ? 
          'bg-primary text-primary-foreground font-medium' : 
          'bg-muted/50 hover:bg-muted text-muted-foreground'
        }`}
      >
        {allCategoriesLabel}
      </motion.button>

      {/* Other category buttons */}
      {categories.map((category) => (
        <motion.button
          key={category}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCategoryClick(category)}
          className={`whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors ${
            activeCategory === category ? 
            'bg-primary text-primary-foreground font-medium' : 
            'bg-muted/50 hover:bg-muted text-muted-foreground'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default MenuCategoryTabs;