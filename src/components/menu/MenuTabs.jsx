// src/components/menu/MenuTabs.jsx
import clsx from 'clsx';
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

  // Simplified animation with CSS transitions
  return (
    <nav
      className="flex gap-2 overflow-x-auto justify-center hide-scrollbar px-2 py-1"
      aria-label={getHebrewUI('Menu')}
    >
      {TAB_LIST.map((tab, index) => (
        <button
          key={tab.id}
          className={`${getTabClass(activeTab === tab.id)} transition-all duration-200 active:scale-95`}
          onClick={() => setActiveTab(tab.id)}
          style={{
            opacity: animationsReady ? 1 : 0,
            transform: `translateY(${animationsReady ? '0' : '-10px'})`,
            transitionDelay: `${index * 0.05}s`,
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default MenuTabs;