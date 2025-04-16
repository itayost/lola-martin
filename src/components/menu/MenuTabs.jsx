// src/components/menu/MenuTabs.jsx with Hebrew translations
import clsx from 'clsx';
import { m } from 'framer-motion';
import { getHebrewUI } from '../../utils/hebrewTranslations';
import { useAnimationContext } from '../../pages/_app';

// The tab list is already in Hebrew in your original code
const TAB_LIST = [
  { id: 'lunch', label: 'צהריים' },
  { id: 'dinner', label: 'ערב' },
  { id: 'sushi', label: 'סושי' },
];

const getTabClass = (isActive) =>
  clsx(
    'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200',
    isActive
      ? 'bg-accent text-background border-accent'
      : 'bg-card text-muted border-border hover:text-accent hover:border-accent'
  );

const MenuTabs = ({ activeTab, setActiveTab }) => {
  const { animationsReady } = useAnimationContext();

  // If animations aren't ready, render non-animated version
  if (!animationsReady) {
    return (
      <nav
        className="flex gap-2 overflow-x-auto justify-center hide-scrollbar px-2 py-1"
        aria-label={getHebrewUI('Menu')}
      >
        {TAB_LIST.map((tab) => (
          <button
            key={tab.id}
            className={getTabClass(activeTab === tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    );
  }

  // When animations are ready, use animated version
  return (
    <nav
      className="flex gap-2 overflow-x-auto justify-center hide-scrollbar px-2 py-1"
      aria-label={getHebrewUI('Menu')}
    >
      {TAB_LIST.map((tab, index) => (
        <m.button
          key={tab.id}
          className={getTabClass(activeTab === tab.id)}
          onClick={() => setActiveTab(tab.id)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.3, 
              delay: index * 0.1 
            }
          }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
        </m.button>
      ))}
    </nav>
  );
};

export default MenuTabs;