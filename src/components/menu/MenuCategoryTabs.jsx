// src/components/menu/MenuCategoryTabs.jsx - Simplified version
import { useEffect, useRef, useState } from 'react';
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
  
  // Check if scroll buttons are needed
  useEffect(() => {
    const checkScrollButtons = () => {
      if (!scrollContainerRef.current) return;
      
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
      
      // Show right scroll button if there's content beyond right edge
      setShowRightScroll(scrollLeft < (scrollWidth - clientWidth - 5));
      
      // Show left scroll button if we're not at the beginning
      setShowLeftScroll(scrollLeft > 5);
    };
    
    // Check on initial load and when categories or active tab changes
    checkScrollButtons();
    
    // Listen for window resize
    window.addEventListener('resize', checkScrollButtons);
    
    // Listen for scroll events in the container
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
    }
    
    return () => {
      window.removeEventListener('resize', checkScrollButtons);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, [categories, activeTab]);
  
  // Scroll active button into view when tab/category changes
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    
    const selectedBtn = scrollContainerRef.current.querySelector('[data-active="true"]');
    if (selectedBtn) {
      // Calculate position to scroll to center
      const container = scrollContainerRef.current;
      const scrollPos = selectedBtn.offsetLeft - (container.clientWidth / 2) + (selectedBtn.offsetWidth / 2);
      
      // Smooth scroll to position
      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
    }
  }, [activeCategory, categories, activeTab]);

  // Handle category selection
  const handleCategoryClick = (category) => {
    if (category === allCategoriesLabel) {
      setActiveCategory(null); // Reset to show all categories
    } else {
      setActiveCategory(category);
    }
  };

  // Scroll functions
  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = scrollContainerRef.current.clientWidth / 2;
    scrollContainerRef.current.scrollBy({
      left: -scrollAmount, // Negative because RTL
      behavior: 'smooth'
    });
  };
  
  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = scrollContainerRef.current.clientWidth / 2;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount, // Positive because RTL
      behavior: 'smooth'
    });
  };

  // Don't render if no categories
  if (!categories || categories.length === 0) return null;

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Right scroll button */}
      {showRightScroll && (
        <button
          className="absolute right-0 z-10 bg-background/90 backdrop-blur-sm p-1 rounded-full shadow-md hover:bg-card"
          onClick={scrollRight}
          aria-label="גלול ימינה"
        >
          <ChevronRight className="h-5 w-5 text-accent" />
        </button>
      )}
      
      {/* Scrollable category tabs container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar items-center gap-2 py-2 px-4 max-w-full mx-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* "All" button always shown first */}
        <button
          onClick={() => handleCategoryClick(allCategoriesLabel)}
          data-active={activeCategory === null}
          className={`
            whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors
            ${activeCategory === null 
              ? 'bg-primary text-white font-medium' 
              : 'bg-muted/50 hover:bg-muted text-muted-foreground'
            }
          `}
        >
          {allCategoriesLabel}
        </button>

        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            data-active={activeCategory === category}
            className={`
              whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors
              ${activeCategory === category 
                ? 'bg-primary text-white font-medium' 
                : 'bg-muted/50 hover:bg-muted text-muted-foreground'
              }
            `}
          >
            {getHebrewCategory(category)}
          </button>
        ))}
      </div>
      
      {/* Left scroll button */}
      {showLeftScroll && (
        <button
          className="absolute left-0 z-10 bg-background/90 backdrop-blur-sm p-1 rounded-full shadow-md hover:bg-card"
          onClick={scrollLeft}
          aria-label="גלול שמאלה"
        >
          <ChevronLeft className="h-5 w-5 text-accent" />
        </button>
      )}
    </div>
  );
};

export default MenuCategoryTabs;