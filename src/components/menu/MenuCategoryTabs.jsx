import React, { useState, useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { getHebrewCategory } from '../../utils/categoryTranslations';

const MenuCategoryTabs = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  activeTab
}) => {
  const allCategoriesLabel = 'הכל';
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const scrollContainerRef = useRef(null);
  
  // האזנה לשינויים בקטגוריות ולשינויי גודל המסך
  useEffect(() => {
    const checkForScrollButtons = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        
        // הצג כפתור גלילה ימינה אם יש תוכן מעבר לגבול הימני
        setShowRightScroll(scrollLeft < (scrollWidth - clientWidth - 5));
        
        // הצג כפתור גלילה שמאלה אם אנחנו לא בהתחלה
        setShowLeftScroll(scrollLeft > 5);
      }
    };
    
    // בדוק בטעינה ראשונית
    checkForScrollButtons();
    
    // הוסף האזנה לשינויי גודל מסך
    window.addEventListener('resize', checkForScrollButtons);
    
    // הוסף האזנה לאירועי גלילה בקונטיינר הטאבים
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkForScrollButtons);
    }
    
    return () => {
      window.removeEventListener('resize', checkForScrollButtons);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkForScrollButtons);
      }
    };
  }, [categories, activeTab]);
  
  // גלילה לכפתור פעיל כאשר הטאב או הקטגוריה משתנים
  useEffect(() => {
    if (scrollContainerRef.current) {
      const selectedBtn = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (selectedBtn) {
        // חשב את המיקום לגלילה במרכז
        const container = scrollContainerRef.current;
        const scrollPos = selectedBtn.offsetLeft - (container.clientWidth / 2) + (selectedBtn.offsetWidth / 2);
        
        // גלול בצורה חלקה
        container.scrollTo({
          left: scrollPos,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory, categories, activeTab]);

  const handleCategoryClick = (category) => {
    // עדכן את הקטגוריה הפעילה
    if (category === allCategoriesLabel) {
      setActiveCategory(null); // כאשר "הכל" נלחץ, נאפס את הקטגוריה
    } else {
      setActiveCategory(category);
    }
  };

  // פונקציות גלילה ימינה ושמאלה
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount, // שלילי כי RTL
        behavior: 'smooth'
      });
    }
  };
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount, // חיובי כי RTL
        behavior: 'smooth'
      });
    }
  };

  // אם אין קטגוריות, אל תציג כלום
  if (!categories || categories.length === 0) return null;

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* כפתור גלילה ימינה */}
      {showRightScroll && (
        <m.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 z-10 bg-background/90 backdrop-blur-sm p-1 rounded-full shadow-md hover:bg-card"
          onClick={scrollRight}
          aria-label="גלול ימינה"
        >
          <ChevronRight className="h-5 w-5 text-accent" />
        </m.button>
      )}
      
      {/* קונטיינר לטאבי הקטגוריות עם גלילה אופקית */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar items-center gap-2 py-2 px-4 max-w-full mx-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* כפתור "הכל" תמיד מוצג ראשון */}
        <m.button
          key="all-categories"
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCategoryClick(allCategoriesLabel)}
          data-active={activeCategory === null}
          className={`whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors ${
            activeCategory === null ? 
            'bg-primary text-primary-foreground font-medium' : 
            'bg-muted/50 hover:bg-muted text-muted-foreground'
          }`}
        >
          {allCategoriesLabel}
        </m.button>

        {/* כפתורי קטגוריות אחרים */}
        {categories.map((category) => (
          <m.button
            key={category}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(category)}
            data-active={activeCategory === category}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors ${
              activeCategory === category ? 
              'bg-primary text-primary-foreground font-medium' : 
              'bg-muted/50 hover:bg-muted text-muted-foreground'
            }`}
          >
            {getHebrewCategory(category)}
          </m.button>
        ))}
      </div>
      
      {/* כפתור גלילה שמאלה */}
      {showLeftScroll && (
        <m.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 z-10 bg-background/90 backdrop-blur-sm p-1 rounded-full shadow-md hover:bg-card"
          onClick={scrollLeft}
          aria-label="גלול שמאלה"
        >
          <ChevronLeft className="h-5 w-5 text-accent" />
        </m.button>
      )}
    </div>
  );
};

export default MenuCategoryTabs;