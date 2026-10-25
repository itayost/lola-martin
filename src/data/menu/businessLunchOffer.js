// Business lunch (עסקיות) as one fixed-price offer, transcribed from the printed card.
// Every dish shares the offer price; only the add-ons carry their own price.
export const businessLunchOffer = {
  title: 'העסקיות של לולה',
  shortTitle: 'עסקיות',
  price: 79,
  includes: 'העסקיות כוללות לחם וחמישה מטבלים',
  servedDays: "א'-ה'",
  servedHours: '12:00-17:00',
  groups: [
    {
      id: 'land',
      title: 'בשר ועוף',
      sides: { label: 'תוספות לבחירה', options: ["צ'יפס", 'פירה', 'אורז', "מג'דרה"] },
      dishes: ['כבד עוף צלוי ביין אדום', 'פרגית', 'שניצל', "המבורגר עם צ'יפס"],
    },
    {
      id: 'sea',
      title: 'דגים ופירות ים',
      dishes: [
        'חריימה דג',
        'אורז פירות ים',
        'פילה לברק על פסטה אלי אוליו',
        'קציצות דגים על קוסקוס',
        'פסטה סלמון ברוטב שמנת/רוזה',
        'שרימפס שום חמאה ויין על אורז/פירה/פסטה',
        'שרימפס אלי אוליו על אורז/פירה/פסטה',
      ],
    },
  ],
  addOns: [
    { name: 'כוס יין לבן / רוזה', price: 25 },
    { name: 'בירה מהחבית', price: 25 },
  ],
};
