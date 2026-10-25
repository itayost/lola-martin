// Menu page frame: short hero, sticky meal tabs, category chips that jump to
// sections (with scroll-spy) instead of filtering.
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { m } from 'framer-motion';
import HeroSection from '@/components/shared/HeroSection';
import { MEAL_TABS } from './useMenuTabs';

const HEADER_OFFSET = 60;
const SECTION_PREFIX = 'sec-';

export const sectionDomId = id => `${SECTION_PREFIX}${id}`;

function useScrollSpy(sectionIds, barRef) {
  const [activeId, setActiveId] = useState(sectionIds[0] || null);

  useEffect(() => {
    setActiveId(sectionIds[0] || null);
    if (sectionIds.length === 0) return undefined;
    const barHeight = barRef.current?.offsetHeight || 0;
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        setActiveId(topmost.target.id.slice(SECTION_PREFIX.length));
      },
      { rootMargin: `-${HEADER_OFFSET + barHeight + 8}px 0px -55% 0px` }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(sectionDomId(id));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps

  return [activeId, setActiveId];
}

function MealTabs({ activeTab, onSelect }) {
  return (
    <div role="tablist" aria-label="סוג תפריט" className="flex justify-center gap-1">
      {MEAL_TABS.map(tab => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onSelect(tab.id)}
            className={clsx(
              'min-h-[44px] rounded-full px-5 text-base font-semibold transition-colors duration-200',
              isActive ? 'bg-accent text-background' : 'text-muted hover:text-text'
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function CategoryChips({ sections, activeId, onJump }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const chip = scroller?.querySelector('[data-active="true"]');
    if (!scroller || !chip) return;
    const target = chip.offsetLeft - scroller.clientWidth / 2 + chip.offsetWidth / 2;
    scroller.scrollTo({ left: target, behavior: 'smooth' });
  }, [activeId]);

  if (sections.length === 0) return null;

  return (
    <div
      ref={scrollerRef}
      className="hide-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 sm:justify-center"
      style={{ scrollbarWidth: 'none' }}
    >
      {sections.map(section => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            data-active={isActive}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => onJump(section.id)}
            className={clsx(
              'min-h-[36px] whitespace-nowrap rounded-full border px-3.5 text-sm transition-colors duration-200',
              isActive
                ? 'border-accent/60 bg-accent/10 text-accentLight'
                : 'border-border text-muted hover:border-muted hover:text-text'
            )}
          >
            {section.title}
          </button>
        );
      })}
    </div>
  );
}

export default function MenuShell({ activeTab, onSelectTab, sections, children }) {
  const barRef = useRef(null);
  const contentRef = useRef(null);
  const [activeId, setActiveId] = useScrollSpy(sections.map(s => s.id), barRef);

  const scrollToY = y => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  };

  const barOffset = () => HEADER_OFFSET + (barRef.current?.offsetHeight || 0);

  const handleJump = id => {
    const el = document.getElementById(sectionDomId(id));
    if (!el) return;
    setActiveId(id);
    scrollToY(el.getBoundingClientRect().top + window.scrollY - barOffset() - 16);
  };

  const handleSelectTab = tabId => {
    if (tabId === activeTab) return;
    onSelectTab(tabId);
    const top = contentRef.current?.getBoundingClientRect().top ?? 0;
    if (top < barOffset()) scrollToY(top + window.scrollY - HEADER_OFFSET);
  };

  return (
    <div className="bg-background text-text">
      <Head>
        <title>תפריט - לולה מרטין</title>
        <meta
          name="description"
          content="תפריט המסעדה של לולה מרטין, מגוון מנות מהמטבח הים תיכוני, דגים ופירות ים"
        />
      </Head>

      <HeroSection
        title="תפריט"
        imageSrc="/images/menu/menu-hero.jpg"
        imageAlt="תפריט - לולה מרטין"
        height="58vh"
        minHeight={400}
        showScrollIndicator={false}
      />

      <div ref={contentRef} />
      <div
        ref={barRef}
        className="sticky top-[60px] z-30 border-b border-border/70 bg-background/90 backdrop-blur-md"
      >
        <div className="container space-y-2 py-2.5">
          <MealTabs activeTab={activeTab} onSelect={handleSelectTab} />
          <CategoryChips sections={sections} activeId={activeId} onJump={handleJump} />
        </div>
      </div>

      <m.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </m.div>
    </div>
  );
}
