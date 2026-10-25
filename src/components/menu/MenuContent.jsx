// Menu content: the business-lunch offer panel and the category sections.
// Photo dishes become vertical cards (3 per row on desktop); dishes without a
// photo become compact content-height tiles, so no card carries dead space.
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ArrowLeft, Clock, Wheat } from 'lucide-react';
import { businessLunchOffer as offer } from '@/data/menu/businessLunchOffer';
import { DietaryMarks, Price } from './MenuBits';
import { sectionDomId } from './MenuShell';

function OfferPanel({ onShowDinner }) {
  return (
    <section aria-labelledby="offer-title" className="container py-10 md:py-16">
      <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-elegant lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="relative isolate flex min-h-[320px] flex-col justify-between gap-10 p-7 md:p-10">
          <Image
            src="/images/menu/mains/shrimp-garlic.jpg"
            alt="שרימפס שום חמאה ויין"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background/20" />
          <div>
            <h2 id="offer-title" className="flex flex-wrap items-baseline gap-x-4 gap-y-1 leading-none">
              <span className="text-4xl font-bold md:text-5xl">{offer.shortTitle}</span>
              <span className="text-6xl font-bold text-accent tabular-nums md:text-7xl">
                {offer.price}
                <span className="text-[0.5em] font-semibold">₪</span>
              </span>
            </h2>
            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-background/70 px-4 py-2 text-base font-medium text-accentLight backdrop-blur-sm">
              <Wheat aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
              {offer.includes}
            </p>
          </div>
          <p className="inline-flex items-center gap-2 text-sm text-text/85">
            <Clock aria-hidden="true" className="h-4 w-4 text-accent" />
            ימים {offer.servedDays}, {offer.servedHours}
          </p>
        </div>

        <div className="p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {offer.groups.map(group => (
              <div key={group.id}>
                <h3 className="text-lg font-semibold text-accentLight">{group.title}</h3>
                <ul className="mt-3 divide-y divide-border/70">
                  {group.dishes.map(dish => (
                    <li key={dish} className="py-2.5 text-base text-text">{dish}</li>
                  ))}
                </ul>
                {group.sides && (
                  <div className="mt-4">
                    <p className="text-sm text-muted">{group.sides.label}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {group.sides.options.map(option => (
                        <li key={option} className="rounded-full border border-border px-3 py-1 text-sm text-text/90">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 border-t border-border pt-5">
            {offer.addOns.map(addOn => (
              <span key={addOn.name} className="inline-flex items-baseline gap-2 text-base">
                {addOn.name}
                <Price item={addOn} className="font-semibold text-accent" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onShowDinner}
        className="group mx-auto mt-8 flex items-center gap-2 rounded-full px-4 py-2 text-center text-base text-muted transition-colors [text-wrap:balance] hover:text-text"
      >
        כל מנות תפריט הערב זמינות גם בצהריים, במחיר הרגיל
        <ArrowLeft aria-hidden="true" className="h-4 w-4 text-accent transition-transform group-hover:-translate-x-1" />
      </button>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-accentLight backdrop-blur">
      {children}
    </span>
  );
}

function DishCard({ item }) {
  const [hasImage, setHasImage] = useState(true);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,border-color] duration-300 hover:border-accent/40 hover:shadow-elegant">
      <div className="relative aspect-[16/10] overflow-hidden bg-primaryDark sm:aspect-[4/3]">
        {hasImage && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            onError={() => setHasImage(false)}
          />
        )}
        {(item.recommended || item.special) && (
          <div className="absolute end-3 top-3 flex gap-1.5">
            {item.recommended && <Badge>מומלץ</Badge>}
            {item.special && <Badge>מיוחד</Badge>}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-snug">
            {item.name} <DietaryMarks tags={item.dietary} className="ms-1" />
          </h3>
          <Price item={item} className="pt-0.5 text-lg font-semibold text-accent" />
        </div>
        {item.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{item.description}</p>
        )}
      </div>
    </article>
  );
}

function DishTile({ item }) {
  return (
    <article className="rounded-xl border border-border/70 bg-card/50 px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug">
          {item.name} <DietaryMarks tags={item.dietary} className="ms-1" />
        </h3>
        <Price item={item} className="font-semibold text-accent" />
      </div>
      {item.description && <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>}
    </article>
  );
}

function CategorySection({ section }) {
  const withPhoto = section.items.filter(item => item.image);
  const textOnly = section.items.filter(item => !item.image);
  return (
    <section id={sectionDomId(section.id)} aria-labelledby={`${section.id}-title`} className="scroll-mt-40">
      <div className="mb-7 flex items-end gap-4">
        <h2 id={`${section.id}-title`} className="text-3xl font-bold md:text-4xl">{section.title}</h2>
        <span className="mb-1.5 text-sm text-muted">{section.items.length} מנות</span>
      </div>
      {withPhoto.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withPhoto.map(item => <DishCard key={item.id} item={item} />)}
        </div>
      )}
      {textOnly.length > 0 && (
        <div className={clsx('grid gap-3 sm:grid-cols-2 lg:grid-cols-3', withPhoto.length > 0 && 'mt-5')}>
          {textOnly.map(item => <DishTile key={item.id} item={item} />)}
        </div>
      )}
    </section>
  );
}

export default function MenuContent({ activeTab, sections, onSelectTab }) {
  if (activeTab === 'business') return <OfferPanel onShowDinner={() => onSelectTab('dinner')} />;
  return (
    <div className="container space-y-16 py-12 md:space-y-24 md:py-16">
      {sections.map(section => <CategorySection key={section.id} section={section} />)}
    </div>
  );
}
