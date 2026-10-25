// Small shared pieces for the menu: price and dietary marks.
import clsx from 'clsx';
import { Leaf, WheatOff, Carrot } from 'lucide-react';

const DIETARY = {
  vegan: { Icon: Leaf, label: 'טבעוני', className: 'text-emerald-400' },
  'gluten-free': { Icon: WheatOff, label: 'ללא גלוטן', className: 'text-amber-300' },
  vegetarian: { Icon: Carrot, label: 'צמחוני', className: 'text-orange-300' },
};

const normalizeTag = tag => String(tag).toLowerCase().replace(/\s+/g, '-');

export function DietaryMarks({ tags = [], className }) {
  const known = tags.map(normalizeTag).filter(tag => DIETARY[tag]);
  if (known.length === 0) return null;
  return (
    <span className={clsx('inline-flex items-center gap-1.5 align-middle', className)}>
      {known.map(tag => {
        const { Icon, label, className: color } = DIETARY[tag];
        return (
          <span key={tag} title={label} className="inline-flex">
            <Icon aria-hidden="true" className={clsx('h-3.5 w-3.5', color)} strokeWidth={2} />
            <span className="sr-only">{label}</span>
          </span>
        );
      })}
    </span>
  );
}

function Amount({ value, className }) {
  return (
    <span className={clsx('whitespace-nowrap tabular-nums', className)}>
      {value}
      <span className="ms-0.5 text-[0.8em] font-normal">₪</span>
    </span>
  );
}

export function Price({ item, className }) {
  const { price, originalPrice } = item;
  if (price && typeof price === 'object') {
    return (
      <span className={clsx('inline-flex flex-col items-end text-sm leading-tight', className)}>
        {price.glass && <span>כוס <Amount value={price.glass} /></span>}
        {price.bottle && <span>בקבוק <Amount value={price.bottle} /></span>}
      </span>
    );
  }
  return (
    <span className={clsx('inline-flex items-baseline gap-2', className)}>
      {originalPrice && <Amount value={originalPrice} className="text-sm text-muted line-through" />}
      <Amount value={price} />
    </span>
  );
}
