// Appetizers includes both openings and firsts
export const openings = [
  {
    id: 'opening1',
    name: 'לחם הבית',
    description: 'שמן זית, בלסמי וזיתים',
    price: 22,
    category: 'Starters',
  },
  {
    id: 'opening2',
    name: 'צלחת חריפה',
    price: 19,
    dietary: ['Vegan', 'Gluten Free'],
    description: '',
    category: 'Starters',
    image: '/images/menu/appetizers/spicy.jpg',
  },
  {
    id: 'opening3',
    name: 'איקרא',
    description: 'סלט ביצי דגים, בצל ירוק קצוץ, בצל לבן',
    price: 36,
    category: 'Starters',
    image: '/images/menu/appetizers/ikra.jpg',
  },
  {
    id: 'opening4',
    name: 'מטיאס',
    price: 36,
    category: 'Starters',
    image: '/images/menu/appetizers/matias.jpg',
  },
  {
    id: 'opening5',
    name: 'סגאנקי',
    description: 'קוביית גבינת פטה מטוגנת ברוטב דבש',
    price: 36,
    category: 'Starters',
    image: '/images/menu/appetizers/saganaki.jpg',
  },
];

export const firsts = [
  {
    id: 'first1',
    name: "אויסטר ג'ילרדו",
    description: 'חומץ בן יין ובצל אדום',
    price: 34,
    category: 'Appetizers',
    image: '/images/menu/appetizers/oyster.jpg',
  },
  {
    id: 'first2',
    name: "קרפצ'יו חציל",
    description:
      'חציל קלוי על אש גלויה, תערובת גבינות של פטה ולאבנה, סלסה עגבניות, טחינה גולמית, חמוציות, סילאן שבבי חלווה',
    price: 57,
    category: 'Appetizers',
    image: '/images/menu/appetizers/carpazio.jpg',
  },
  {
    id: 'first3',
    name: 'עטאייף דג',
    description: 'דג לבן, עשבי תיבול, קרם חציל שחור, קרם גזר, טחינת שקדים ויוגורט',
    price: 59,
    category: 'Appetizers',
    image: '/images/menu/appetizers/ataif.jpg',
  },
  {
    id: 'first4',
    name: 'תמנון לפקדה',
    description:
      "זרוע תמנון מבושל בבישול איטי בטמפרטורה נמוכה עם שמן זית, צ'ילי, שום על מצע קציפת פטה. פיקנטי.",
    price: 79,
    category: 'Appetizers',
    image: '/images/menu/appetizers/tamnun.jpg',
  },
  {
    id: 'first5',
    name: 'טרטר סלמון',
    description: 'ברוטב יוזטו קושו, שמן שומשום, סויה, בצל ירוק וביצי סלמון',
    price: 69,
    category: 'Appetizers',
    image: '/images/menu/appetizers/tartar-salmon.jpg',
  },
  {
    id: 'first6',
    name: 'טרטר טונה אדומה',
    description:
      "טונה אדומה, ויניגרייט צ'ילי, שמן שומשום, שמן בזיל, בצל ירוק, פניני בלסמי (מכיל רוטב סויה)",
    price: 79,
    category: 'Appetizers',
    image: '/images/menu/appetizers/tartar-tuna.jpg',
  },
  {
    id: 'first7',
    name: 'סשימי דג לבן',
    description: 'נתחי דג לבן, ויניגרייט לימון כבוש וסלט אננס, פאפאיה וכוסברה',
    price: 69,
    category: 'Appetizers',
    image: '/images/menu/appetizers/sashimi.jpg',
  },
  {
    id: 'first8',
    name: "סביצ'ה בר ים",
    description:
      "קוביות מוסר ים טרי חתוכות לקוביות קטנות, בצל, כוסברה, צ'ילי, קוביות של קולורבי ומלפפון קרנצ'י, שמן בזיליקום וקריספי שאלוט",
    price: 69,
    category: 'Appetizers',
    image: '/images/menu/appetizers/savice.jpg',
  },
  {
    id: 'first9',
    name: "קוקי סא'ן ג'ק",
    description: 'סקאלופ, 3-4 יחידות במנה לפי הגודל, על רוטב שמנת, פרמזן ופטריות כמהין',
    price: 79,
    category: 'Appetizers',
    image: '/images/menu/appetizers/scullops.jpg',
  },
  {
    id: 'first10',
    name: 'שיפוד שרימפס',
    description:
      "צלוי על הפלנצ'ה, 4 שיפודי יקטורי של שרימפס במרינדה, מוגש על קרם ארטישוק ירושלמי, קרם גזר, סלטון עשבי תיבול",
    price: 79,
    category: 'Appetizers',
  },
  {
    id: 'first11',
    name: 'שרימפס טמפורה',
    price: 72,
    category: 'Appetizers',
  },
  {
    id: 'first12',
    name: 'סיגר מראקש',
    description:
      'עלי סיגר מרוקאים במילוי בשר טלה מפורק על טחינה עם עמבה וסלטון עגבניות פיקטני ושמן אריסה',
    price: 64,
    category: 'Appetizers',
    image: '/images/menu/appetizers/cigar.jpg',
  },
  {
    id: 'first13',
    special: true,
    name: "קלמרי פלאנצ'ה",
    description:
      'קלמרי במילוי עשבי תיבול. כוסברה, פטרוזיליה, בצל מקורמל, שמן זית, מוגש על לאבנה מעושנת וסלט קטן של עדשים שחורות ובורגול פיקנטי',
    price: 69,
    category: 'Appetizers',
    image: '/images/menu/appetizers/calamari-purple.jpg',
  },
];
