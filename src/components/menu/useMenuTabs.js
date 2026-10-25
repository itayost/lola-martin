// Menu page state: active meal tab (synced to ?tab=) and
// category sections grouped in data order.
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { dinner, sushi } from '@/data/menu';
import { getHebrewCategory } from '@/utils/categoryTranslations';

export const MEAL_TABS = [
  { id: 'business', label: 'עסקיות' },
  { id: 'dinner', label: 'ערב' },
  { id: 'sushi', label: 'סושי' },
];

const ITEMS_BY_TAB = { dinner, sushi };
const TAB_IDS = MEAL_TABS.map(tab => tab.id);
// Old links used ?tab=lunch; they now land on the business lunch offer.
const TAB_ALIASES = { lunch: 'business' };

export const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function groupIntoSections(items) {
  const order = [];
  const byCategory = {};
  items.forEach(item => {
    const key = item.category || 'General';
    if (!byCategory[key]) {
      byCategory[key] = [];
      order.push(key);
    }
    byCategory[key].push(item);
  });
  return order.map(key => ({
    id: slugify(key),
    title: getHebrewCategory(key),
    items: byCategory[key],
  }));
}

export function useMenuTabs(defaultTab = 'dinner') {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (!router.isReady) return;
    const requested = String(router.query.tab || '').toLowerCase();
    const resolved = TAB_ALIASES[requested] || requested;
    if (TAB_IDS.includes(resolved)) setActiveTab(resolved);
  }, [router.isReady, router.query.tab]);

  const selectTab = tabId => {
    if (!TAB_IDS.includes(tabId)) return;
    setActiveTab(tabId);
    const url = `${router.pathname}?tab=${tabId}`;
    window.history.replaceState({ ...window.history.state, as: url, url }, '', url);
  };

  const sections = useMemo(
    () => groupIntoSections(ITEMS_BY_TAB[activeTab] || []),
    [activeTab]
  );

  return { activeTab, selectTab, sections };
}
