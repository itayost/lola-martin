// src/pages/menu.jsx - Updated with category mapping fix
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { lunch, dinner, sushi } from '../data/menu';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import { itemBelongsToCategory } from '../utils/categoryMappings';

const MenuPage = () => {
  const router = useRouter();
  const heroBottomRef = useRef(null);
  const [activeTab, setActiveTab] = useState('dinner');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [menuData] = useState({ lunch, dinner, sushi });

  // Handle initial URL parameters only once
  useEffect(() => {
    if (!router.isReady || isInitialized) return;

    const { tab, category } = router.query;

    if (tab && ['lunch', 'dinner', 'sushi'].includes(tab.toLowerCase())) {
      setActiveTab(tab.toLowerCase());
    }

    if (category) {
      setActiveCategory(category);
    }

    setIsInitialized(true);
  }, [router.isReady, router.query, isInitialized]);

  // Update URL when tab or category changes
  useEffect(() => {
    if (!router.isReady || !isInitialized) return;

    const query = { tab: activeTab };
    if (activeCategory) {
      query.category = activeCategory;
    }

    if (typeof window !== 'undefined') {
      const newUrl = `${router.pathname}?${new URLSearchParams(query).toString()}`;
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    }
  }, [activeTab, activeCategory, router.isReady, isInitialized, router.pathname]);

  // Get unique categories for the current tab (in Hebrew)
  const getCategories = useMemo(() => {
    try {
      const currentTabItems = menuData[activeTab] || [];
      const uniqueCategories = [...new Set(currentTabItems.map(item => item.category))];
      return uniqueCategories.filter(Boolean);
    } catch (err) {
      console.error('Error getting categories:', err);
      return [];
    }
  }, [activeTab, menuData]);

  // Filter and categorize menu items
  const categorizedItems = useMemo(() => {
    try {
      const categorized = {};
      let items = menuData[activeTab] || [];

      // If a category is selected, filter items
      if (activeCategory) {
        items = items.filter(item => itemBelongsToCategory(item, activeCategory));
      }

      // Group items by their original category
      items.forEach(item => {
        const category = item.category || 'General';
        if (!categorized[category]) {
          categorized[category] = [];
        }
        categorized[category].push(item);
      });

      return categorized;
    } catch (err) {
      console.error('Error categorizing items:', err);
      return {};
    }
  }, [activeTab, activeCategory, menuData]);

  // Scroll to content after changing tabs/categories
  const scrollToHeroBottom = () => {
    if (heroBottomRef.current) {
      const headerHeight = 80;
      const y = heroBottomRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Tab change handler
  const handleTabChange = newTab => {
    if (newTab === activeTab) return;
    setActiveTab(newTab);
    setActiveCategory(null);
    scrollToHeroBottom();
  };

  // Category change handler
  const handleCategoryChange = category => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    scrollToHeroBottom();
  };

  return (
    <div className="bg-background text-foreground">
      <Head>
        <title>תפריט - לולה מרטין</title>
        <meta
          name="description"
          content="תפריט המסעדה של לולה מרטין, מגוון מנות מהמטבח הים תיכוני, דגים ופירות ים"
        />
      </Head>

      {/* Hero Section */}
      <MenuHero />
      <div ref={heroBottomRef}></div>

      {/* Sticky filter tabs */}
      <div className="sticky top-[60px] z-30 bg-background/80 backdrop-blur border-b border-border py-3">
        <div className="container mx-auto px-4">
          {/* Main menu tabs */}
          <MenuTabs activeTab={activeTab} setActiveTab={handleTabChange} />

          {/* Small spacing */}
          <div className="h-3"></div>

          {/* Category filter tabs */}
          <MenuCategoryTabs
            categories={getCategories}
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
            activeTab={activeTab}
          />
        </div>
      </div>

      {/* Menu content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'lunch' && (
          <div className="mb-8 p-4 bg-accent/10 rounded-lg border border-accent/20 text-center">
            <p className="text-lg font-medium text-accent">תפריט צהריים - 10% הנחה על תפריט הערב</p>
            <p className="text-sm text-muted mt-1">מוגש בימים א'-ה' בין השעות 12:00-17:00</p>
          </div>
        )}
        <MenuCategories categories={categorizedItems} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default MenuPage;
