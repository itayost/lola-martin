import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import menuData from '../data/menuData';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import MenuDownload from '../components/menu/MenuDownload';

const MenuPage = () => {
  const router = useRouter();
  const { tab, category } = router.query;
  const menuItemsRef = useRef(null);

  // State for main tabs (lunch, dinner, drinks)
  const [activeTab, setActiveTab] = useState('lunch');

  // State for category filtering within a tab
  const [activeCategory, setActiveCategory] = useState(null);

  // State for menu data
  const [currentMenuData, setCurrentMenuData] = useState(menuData);

  // Set tab and category from URL query
  useEffect(() => {
    if (!router.isReady) return;

    if (tab && ['lunch', 'dinner', 'sushi'].includes(tab.toLowerCase())) {
      setActiveTab(tab.toLowerCase());
    }

    if (category) {
      setActiveCategory(category);
    }
  }, [router.isReady, tab, category]);

  // Get categories from the current active tab data
  const getCategories = useMemo(() => {
    const currentTabItems = currentMenuData[activeTab] || [];
    const uniqueCategories = [...new Set(currentTabItems.map(item => item.category))];
    return uniqueCategories.filter(Boolean); // Remove any undefined/null categories
  }, [currentMenuData, activeTab]);

  // Organize items by category for the current tab
  const categorizedItems = useMemo(() => {
    const categorized = {};
    let items = currentMenuData[activeTab] || [];

    // Filter by active category if one is selected
    if (activeCategory) {
      items = items.filter(item => item.category === activeCategory);
    }

    items.forEach(item => {
      const category = item.category || 'General';
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push(item);
    });

    return categorized;
  }, [currentMenuData, activeTab, activeCategory]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCategory(null); // Reset category when changing tabs
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    // If clicking the same category again, reset the filter
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="bg-card min-h-screen stacking-context">
      {/* Hero section */}
      <MenuHero />

      {/* Main content with proper stacking context */}
      <div className="relative">
        <div className="container mx-auto px-4 overflow-fix">
          {/* Menu tabs section */}
          <div className="py-8">
            <MenuTabs 
              activeTab={activeTab} 
              setActiveTab={handleTabChange}
            />
          </div>

          {/* Lunch special notice */}
          {activeTab === 'lunch' && (
            <div className="text-center text-sm font-medium text-gold bg-darkMuted p-3 rounded-xl shadow-elegant mb-4">
              תפריט צהריים מוגש בימים א׳–ה׳ בין השעות 12:00–17:00.
            </div>
          )}
        </div>
        
<div className="sticky top-[56px] md:top-[64px] z-40 bg-card border-b border-border">
  <MenuCategoryTabs 
    categories={getCategories}
    activeCategory={activeCategory}
    setActiveCategory={handleCategoryChange}
    activeTab={activeTab}
    itemsContainerRef={menuItemsRef}
  />
</div>

        <div className="container mx-auto px-4 overflow-fix">
          {/* Menu items section with ref for scrolling */}
          <div ref={menuItemsRef} className="pt-8">
            <MenuCategories 
              categories={categorizedItems} 
              activeTab={activeTab} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;