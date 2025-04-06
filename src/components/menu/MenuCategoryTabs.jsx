import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuCategoryTabs = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  activeTab,
  itemsContainerRef
}) => {
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const tabsRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(80); // Default value
  
  // If no categories, return null
  if (!categories || categories.length === 0) {
    return null;
  }
  
  // Handle category change with scroll to top
  const handleCategoryChange = (category) => {
    // Set the active category
    setActiveCategory(category);
    // Scroll to top of items container if ref exists
    if (itemsContainerRef && itemsContainerRef.current) {
      itemsContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Check if scrolling indicators should be shown
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftScroll(scrollLeft > 10);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Handle scroll button clicks
  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = 200;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Measure header height on mount and window resize
  useEffect(() => {
    const measureHeaderHeight = () => {
      // Try to find the header element - adjust selector to match your header
      const header = document.querySelector('.main-header, header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    
    // Initial measurement
    measureHeaderHeight();
    
    // Re-measure on resize
    window.addEventListener('resize', measureHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', measureHeaderHeight);
    };
  }, []);

  // Setup horizontal scroll detection
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initial check
      checkScroll();
      
      // Add event listeners
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      // Cleanup
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  return (
    <div 
      ref={tabsRef} 
      className="sticky bg-background border-b border-border/30 shadow-md z-50"
      style={{ 
        top: `${headerHeight}px`, // Position below the header
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="relative py-4">
          {/* Left scroll button */}
          {showLeftScroll && (
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-1 bg-background rounded-full shadow-md border border-border/30"
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="h-4 w-4 text-text" />
            </button>
          )}
          
          {/* Scrollable categories container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-3 min-w-max">
              {/* All categories option */}
              <button
                key="all"
                onClick={() => handleCategoryChange(null)}
                className={`
                  flex-shrink-0 
                  px-4 py-2 
                  text-sm 
                  rounded-full 
                  transition-all 
                  duration-300
                  whitespace-nowrap
                  ${activeCategory === null 
                    ? 'bg-accent text-background ring-2 ring-accent/30' 
                    : 'text-text hover:bg-background/50 hover:text-accent'}
                `}
              >
                הכל
              </button>
              
              {/* Individual category tabs */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    flex-shrink-0 
                    px-4 py-2 
                    text-sm 
                    rounded-full 
                    transition-all 
                    duration-300
                    whitespace-nowrap
                    ${activeCategory === category 
                      ? 'bg-accent text-background ring-2 ring-accent/30' 
                      : 'text-text hover:bg-background/50 hover:text-accent'}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryTabs;