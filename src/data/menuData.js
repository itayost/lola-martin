const openings = [
    {
      id: 'opening1',
      name: 'לחם, שמן זית, חומץ בלסמי, וזיתים',
      price: 22,
      category: 'Starters'
    },
    {
      id: 'opening2',
      name: 'צלחת חריפה',
      price: 19,
      dietary: ["Vegan", "Gluten Free"],
      description: "",
      category: 'Starters'
    },
    {
      id: 'opening3',
      name: 'איקרה (סלט ביצי דגים)',
      price: 36,
      category: 'Starters'
    },
    {
      id: 'opening4',
      name: 'מטיאס',
      price: 36,
      category: 'Starters'
    },
    {
      id: 'opening5',
      name: 'סגנאקי',
      description: 'קוביית קוביה על גבינת פטה ויוגורט ברוטב דבש',
      price: 36,
      category: 'Starters'
    }
  ];
const salads = [{
      id: 'salad1',
      name: 'טבולה הדרים',
      description: 'פטרוזיליה, קינואה, בורגול, חמוציות, גזר, רימון, קשיו, פילה הדרים',
      price: 59,
      category: 'Salads'
    },
    {
      id: 'salad2',
      name: 'קיסר',
      description: 'לבבות חסה, אגוזי מלך, קרוטונים, בצל סגול',
      price: 59,
      category: 'Salads'
    },
    {
      id: 'salad3',
      name: 'גביעי פרמזן',
      price: 59,
      category: 'Salads'
    },
    {
      id: 'salad4',
      name: 'ירוק עולה',
      description: 'חסות רכות, קולורבי, תפוח עץ סמית, אגוזי מלך, גבינה כחולה',
      price: 59,
      category: 'Salads', image:"/images/menu/appetizers/green.jpg"
    },
    {
      id: 'salad5',
      name: 'עגבניות שרי על גבינת פטה',
      price: 59,
      category: 'Salads', image:"/images/menu/appetizers/tomato.jpg"
    },
    {
      id: 'salad6',
      name: 'קצוץ עם טחינה',
      price: 55,
      category: 'Salads', image:"/images/menu/salads/chopped.jpg"
    },
    {
      id: 'salad7',
      name: 'ניסואז',
      description: 'עלים ירוקים, שעועית חלוטה, ביצה רכה, ארטישוק, תפוח אדמה צרוב, טונה צרובה',
      price: 79,
      category: 'Salads'
    }];
const firsts = [{
      id: 'first1',
      name: 'אויסטר',
      price: 34,
      category: 'Appetizers'
    },
    {
      id: 'first2',
      name: 'קרפצ׳יו הצל הים בלאדי',
      description: 'קלוי, טחינה גולמית, סילאן, סלט עגבניות, גבינה ופסוליה',
      price: 57,
      category: 'Appetizers'
    },
    {
      id: 'first3',
      name: 'שווארמה ים פיקניה',
      description: 'מתובלת, ממולא דג לבן, קרם חציל שחור, קרם גזר, סלט שקדים',
      price: 59,
      category: 'Appetizers'
    },
    {
      id: 'first4',
      name: 'תמנון לפקדה סטייל',
      description: 'זרוע תמנון, שמן זית, צ׳ילי, שום, פטה',
      price: 79,
      category: 'Appetizers'
    },
    {
      id: 'first5',
      name: 'טרטר סלמון טרי',
      description: 'יוזו קושו, שמן שומשום, סויה, בצל ירוק',
      price: 69,
      category: 'Appetizers'
    },
    {
      id: 'first6',
      name: 'טרטר טונה אדומה חיה',
      description: 'ירקות, צ׳ילי, כוסברה, שמן שומשום, סויה',
      price: 79,
      category: 'Appetizers'
    },
    {
      id: 'first7',
      name: 'טטאקי דג לבן',
      description: 'וינגרט לימון כבוש, שמן שומשום, צ׳ילי, אננס',
      price: 69,
      category: 'Appetizers'
    },
    {
      id: 'first8',
      name: 'סביצ׳ה בר ים פסיפלורה',
      description: 'בצל סגול, כוסברה, קונפי שום, שמן זית, לימון',
      price: 69,
      category: 'Appetizers'
    },
    {
      id: 'first9',
      name: 'קוקי סאן ז׳אק צרובות',
      description: 'חמאה חומה, מחית תירס, שמן צ׳ילי',
      price: 79,
      category: 'Appetizers', image:"/images/menu/appetizers/cookie.jpg"
    },
    {
      id: 'first10',
      name: 'שיפודי שרימפס',
      description: 'קרם ארטישוק, חציל שחור, קרם גזר, ענבים, סלסת פלפלונים',
      price: 72,
      category: 'Appetizers'
    },
    {
      id: 'first11',
      name: 'שרימפס טמפורה',
      price: 72,
      category: 'Appetizers'
    },
    {
      id: 'first12',
      name: 'סיגר מרוקאי על סיגר טלה',
      price: 64,
      category: 'Appetizers'
    },
    {
      id: 'first13',
      special: true,
      name: 'קלמרי סגול על הפלאנצ׳ה',
      description: 'ממולא עכברי רגלול, קינואה, גרעינים, לבנה מעושנת',
      price: 69,
      category: 'Appetizers', image:"/images/menu/appetizers/calamari-purple.jpg"
    }];
const mains = [{
      id: 'main1',
      name: 'מרק פירות ים קלמרי',
      price: 98,
      category: 'Main Courses'
    },
    {
      id: 'main2',
      name: 'פסטה פירות ים',
      price: 98,
      category: 'Main Courses'
    },
    {
      id: 'main3',
      name: 'מולים בריקוטה שורש',
      price: 110,
      category: 'Main Courses'
    },
    {
      id: 'main4',
      name: 'מעורב טין קריספי שרימפס וקלאמרי',
      price: 98,
      category: 'Main Courses'
    },
    {
      id: 'main5',
      name: 'קריספי קלמרי עם טוגנים',
      price: 89,
      category: 'Main Courses'
    },
    {
      id: 'main6',
      name: 'שרימפס ברוטב שמן זית, שום וצ׳ילי',
      price: 98,
      category: 'Main Courses', image:"/images/menu/mains/shrimps-olio.jpg"
    },
    {
      id: 'main7',
      name: 'שרימפס חמאתי יין',
      price: 98,
      category: 'Main Courses'
    },
    {
  id: 'main8a',
  name: 'ג׳מבו שרימפס (חצי קילו)',
  price: 130,
  category: 'Main Courses'
},
{
  id: 'main8b',
  name: 'ג׳מבו שרימפס (קילו)',
  price: 220,
  category: 'Main Courses'
},
    {
      id: 'main9',
      name: 'סרטני חוף בחמאה ויין',
      price: 139,
      category: 'Main Courses', image:"/images/menu/mains/crabs.jpg"
    },
    {
      id: 'main10',
      name: 'סרטנים שדי טיול',
      description: 'מוגשים לאדון',
      price: 139,
      category: 'Main Courses'
    },
    {
      id: 'main11',
      name: 'גלאיה של טינים מיקס פירות ים',
      price: 125,
      category: 'Main Courses'
    },
    {
      id: 'main12',
      name: 'לובסטר בחמאת יין לבן',
      price: 280,
      category: 'Main Courses'
    },
    {
      id: 'main13',
      name: 'פילה סלמון על מצע פירה',
      price: 98,
      category: 'Main Courses', image:"/images/menu/mains/salmon.jpg"
    },
    {
      id: 'main14',
      name: 'קבב דגים דג לבן קצוץ עם טחינה פיקנטית',
      price: 115,
      category: 'Main Courses'
    },
    {
      id: 'main15',
      name: 'פילה לברק עם ירקות ירוקים',
      price: 134,
      category: 'Main Courses', image:"/images/menu/mains/lavrak-yarok.jpg"
    },
    {
      id: 'main16',
      name: 'דניס שלם עם ירקות אנטיפסטי',
      price: 134,
      category: 'Main Courses'
    },
    {
      id: 'main17',
      name: 'ברבוניה',
      special: true,
      price: 130,
      category: 'Main Courses'
    },
    {
      id: 'main18',
      name: 'דובר סול',
      price: 220,
      category: 'Main Courses'
    },
    {
      id: 'main19',
      name: 'פילה לבן מדרום הרד',
      price: 134,
      category: 'Main Courses'
    },
    {
      id: 'main20',
      name: 'מושט ירושלמי בעמק מטוגן אסייתי',
      price: 110,
      category: 'Main Courses'
    },
    {
      id: 'main21',
      name: 'פיש בורגר',
      price: 79,
      category: 'Main Courses'
    },
    {
      id: 'main22',
      name: 'אנטריקוט (ללא עצם) 300 גרם',
      price: 159,
      category: 'Main Courses'
    },
    {
      id: 'main23',
      name: 'סטייק פרגית',
      price: 79,
      category: 'Main Courses'
    },
    {
      id: 'main24',
      name: 'שניצל',
      price: 79,
      category: 'Main Courses'
    },
    {
      id: 'main25',
      name: 'פסטה ילדים',
      price: 49,
      category: 'Main Courses'
    },
    {
      id: 'main26',
      name: 'פאייה פירות ים',
      description: 'בהזמנה מראש',
      price: 390,
      category: 'Main Courses'
    }];
const nigiri = [{
      id: 'nigiri1',
      name: 'סלמון',
      price: 40,
      category: 'Nigiri', image:"/images/menu/sushi/nigiri-salmon.jpg"
    },
    {
      id: 'nigiri2',
      name: 'טונה',
      price: 50,
      category: 'Nigiri',image:"/images/menu/sushi/nigiri-tuna.jpg"
    },
    {
      id: 'nigiri3',
      name: 'האמאצ׳י',
      price: 50,
      category: 'Nigiri',image:"/images/menu/sushi/nigiri-hamachi.jpg"
    },
    {
      id: 'nigiri4',
      name: 'אונאגי',
            special: true,
      price: 55,
      category: 'Nigiri',image:"/images/menu/sushi/nigiri-unagi.jpg"
    }];
const sashimi = [{
      id: 'sashimi1',
      name: 'סלמון',
      price: 45,
      category: 'Sashimi', image:"/images/menu/sushi/sashimi-salmon.jpg"
    },
    {
      id: 'sashimi2',
      name: 'טונה',
      price: 58,
      category: 'Sashimi', image:"/images/menu/sushi/sashimi-tuna.jpg"
    },
    {
      id: 'sashimi3',
      name: 'האמאצ׳י',
      price: 58,
      category: 'Sashimi', image:"/images/menu/sushi/sashimi-hamachi.jpg"
    }];
const maki = [
    { id: 'maki3', name: 'אפוי סלמון', price: 41, category: 'Maki Sushi' },
    { id: 'maki4', name: 'אבוקדו', price: 27, category: 'Maki Sushi' },
    { id: 'maki5', name: 'מלפפון', price: 25, category: 'Maki Sushi' },
    {
      id: 'maki-salmon',
      name: 'מאקי סלמון',
      description: 'סלמון מאקי סלמון',
      price: 39,
      category: 'Maki Sushi', image:"/images/menu/sushi/maki-salmon.jpg"
    },
    {
      id: 'maki-tuna',
      name: 'מאקי טונה',
      description: 'מאקי טונה',
      price: 46,
      category: 'Maki Sushi'
    }];
const cocktails = [    {
      id: 'cocktail-mojito',
      name: 'מוחיטו טין',
      description: 'רום, מיץ לימון טרי, נענע ומייפל',
      price: 48,
      category: 'Cocktails'
    },
    {
      id: 'cocktail-espresso-martini',
      name: 'אספרסו מרטיני',
      description: 'וודקה, בייליס ואספרסו',
      price: 52,
      category: 'Cocktails'
    }];
const bubblyWine = [{
      id: 'bubbly1',
      name: 'קאווה, חצי יבש, קסטינו ברצלונה, ספרד',
      price: { glass: 39, bottle: 119 },
      category: 'Sparkling Wine'
    },
    {
      id: 'bubbly2',
      name: 'פרוסקו אקסטרה דריי, איטליה',
      price: { glass: 37, bottle: 129 },
      category: 'Sparkling Wine'
    },
    {
      id: 'bubbly3',
      name: 'שמפניה, מואט & שנדון, אמפריאל, צרפת',
      price: { bottle: 450 },
      category: 'Sparkling Wine'
    },
    {
      id: 'bubbly4',
      name: 'שמפניה רוזה, מואט & שנדון, אמפריאל, צרפת',
      price: { bottle: 600 },
      category: 'Sparkling Wine'
    }];
const roseWine = [{
      id: 'rose1',
      name: 'גמאי זה הרמסקלן, קראמטי, ישראל',
      price: { glass: 44, bottle: 189 },
      category: 'Rosé Wine'
    },
    {
      id: 'rose2',
      name: 'טראמאטי, קמפניה סאן מרזאנו, איטליה',
      price: { bottle: 149 },
      category: 'Rosé Wine'
    },
    {
      id: 'rose3',
      name: 'בלנדים, שיר רוזה, ישראל',
      price: { bottle: 149 },
      category: 'Rosé Wine'
    }];
const whiteWine = [{
      id: 'white1',
      name: 'פיאנו פינו גריג’יו, איטליה',
      price: { glass: 42, bottle: 139 },
      category: 'White Wine'
    },
    {
      id: 'white2',
      name: 'קוויי קווה, גוורצטרמינר, צרפת',
      price: { glass: 42, bottle: 139 },
      category: 'White Wine'
    },
    {
      id: 'white3',
      name: 'סוביניון בלאן, גילה הרמה, גן יעקב',
      price: { glass: 46, bottle: 159 },
      category: 'White Wine'
    },
    {
      id: 'white4',
      name: 'סוביניון בלאן, ירדן, יקבי רמת הגולן',
      price: { glass: 49, bottle: 179 },
      category: 'White Wine'
    },
    {
      id: 'white5',
      name: 'סוביניון בלאן, גמלא, ישראל',
      price: { glass: 46, bottle: 189 },
      category: 'White Wine'
    },
    {
      id: 'white6',
      name: 'שרדונה, כנען, יקבי רמת הגולן',
      price: { glass: 52, bottle: 189 },
      category: 'White Wine'
    },
    {
      id: 'white7',
      name: 'שרדונה, קלו דה גת, ישראל',
      price: { glass: 44, bottle: 155 },
      category: 'White Wine'
    },
    {
      id: 'white8',
      name: 'סנסר, טארדיסיון, צרפת',
            special: true,
      price: { bottle: 249 },
      category: 'White Wine'
    }];
const redWine = [{
      id: 'red1',
      name: 'ואלפוליצ’לה סופריורה, איטליה',
      price: { glass: 44, bottle: 169 },
      category: 'Red Wine'
    },
    {
      id: 'red2',
      name: 'מלבק קאטנה, ארגנטינה',
      price: { glass: 44, bottle: 169 },
      category: 'Red Wine'
    },
    {
      id: 'red3',
      name: 'קברנה סוביניון, ארגנטינה',
      price: { glass: 49, bottle: 169 },
      category: 'Red Wine'
    },
    {
      id: 'red4',
      name: 'קברנה ריזרב, ירדן, ישראל',
      price: { glass: 52, bottle: 239 },
      category: 'Red Wine'
    },
    {
      id: 'red5',
      name: 'יראון, יקב הרי גליל, ישראל',
      price: { glass: 44, bottle: 169 },
      category: 'Red Wine'
    },
    {
      id: 'red6',
      name: 'עמק האלה, קלו דה גת',
      price: { bottle: 189 },
      category: 'Red Wine'
    },
    {
      id: 'red7',
      name: 'עמק האלה, קלו דה גת (Special)',
      price: { bottle: 289 },
      category: 'Red Wine'
    },
    {
      id: 'red8',
      name: 'סירה, רמת הגולן',
      price: { bottle: 219 },
      category: 'Red Wine'
    },
    {
      id: 'red9',
      name: 'המרלו, ישראל',
      price: { bottle: 219 },
      category: 'Red Wine'
    },
    {
      id: 'red10',
      name: 'יקב מונטפלוצ’יאנו, איטליה',
      price: { bottle: 450 },
      category: 'Red Wine'
    }];
    const specialRolls = [
    { id: 'special1', name: 'Fish Trio Roll', price: 69, category: 'Special Rolls' },
    { id: 'special2', name: 'Tiger Roll', price: 69, category: 'Special Rolls' },
    { id: 'special3', name: 'Martin Photomaki', price: 69, category: 'Special Rolls' },
    { id: 'special4', name: 'Maya Sashimi Roll', price: 69, category: 'Special Rolls', image:"/images/menu/sushi/maya-sashimi.jpg" },
    { id: 'special5', name: 'Sailor Moon Roll', price: 60, category: 'Special Rolls' },
    { id: 'special6', name: 'Silver Moon Roll', price: 66, category: 'Special Rolls' },
    { id: 'special7', name: 'Samurai Roll', price: 66, category: 'Special Rolls' },
    { id: 'special8', name: 'Oasis Roll', price: 66, category: 'Special Rolls' },
    { id: 'special9', name: 'Sakura Roll', price: 72, category: 'Special Rolls' },
    { id: 'special10', name: 'Special Eel Roll', price: 72, category: 'Special Rolls' },
    { id: 'special11', name: 'Eden Roll', price: 73, category: 'Special Rolls' },
    { id: 'special12', name: 'Dynamite Scallop Roll', price: 68, category: 'Special Rolls' },
    { id: 'special13', name: 'Karnina Roll', price: 68, category: 'Special Rolls' }
];
    
    const veganSushi = [
    { id: 'vegan1', name: 'Garden Roll', price: 54, category: 'Vegan Sushi', dietary: ["Vegan"] },
    { id: 'vegan2', name: 'Paradise Roll', price: 54, category: 'Vegan Sushi' , dietary: ["Vegan"] },
    { id: 'vegan3', name: 'Veggie Roll', price: 56, category: 'Vegan Sushi', dietary: ["Vegan"] },
    { id: 'vegan4', name: 'Stella Roll', price: 58, category: 'Vegan Sushi', dietary: ["Vegan"] }
    ];
    const temaki = [
    { id: 'temaki1', name: 'Tempura Shrimps', price: 44, category: 'Temaki' },
    { id: 'temaki2', name: 'Tempura Skin', price: 44, category: 'Temaki' },
    { id: 'temaki3', name: 'Salmon', price: 42, category: 'Temaki' },
    { id: 'temaki4', name: 'Tuna', price: 42, category: 'Temaki' }
    ];
    const insideOutRolls = [
    { id: 'inside1', name: 'סלמון רול', price: 57, category: 'Inside Out Rolls' },
    { id: 'inside2', name: 'סלמון אפוי רול', price: 46, category: 'Inside Out Rolls' },
    { id: 'inside3', name: 'קיסר רול', price: 59, category: 'Inside Out Rolls' },
    { id: 'inside4', name: 'טונה טובה', price: 68, category: 'Inside Out Rolls' },
    { id: 'inside5', name: 'לאס וגאס', price: 59, category: 'Inside Out Rolls' },
    { id: 'inside6', name: 'קריספי טונה', price: 68, category: 'Inside Out Rolls' },
    { id: 'inside7', name: 'פרל רול', price: 59, category: 'Inside Out Rolls' },
    { id: 'inside8', name: 'לולה רול', price: 68, category: 'Inside Out Rolls' },
    { id: 'inside9', name: 'לימון רול', price: 59, category: 'Inside Out Rolls' },
    { id: 'inside10', name: 'קריספי סקין', price: 56, category: 'Inside Out Rolls' },
    { id: 'inside11', name: 'קרייזי סקין', price: 56, category: 'Inside Out Rolls' },
    { id: 'inside12', name: 'קריספי רייס סלמון', price: 64, category: 'Inside Out Rolls' }
  ];






// Final structured data
const menuData = {
  openings,
  salads,
  firsts,
  mains,
  nigiri,
  sashimi,
  maki,
  cocktails,
  bubblyWine,
  roseWine,
  whiteWine,
  redWine,
  veganSushi,
  specialRolls,
  temaki,
  insideOutRolls,

  // New combined views
  lunch: [
    ...openings,
    ...salads,
    ...firsts,
    ...mains
  ].map((item) => ({
    ...item,
    price: typeof item.price === 'number' ? Math.round(item.price * 0.9) : item.price,
    originalPrice: item.price
  })),

  dinner: [
    ...openings,
    ...salads,
    ...firsts,
    ...mains,
  ],

  sushi: [
    ...nigiri,
    ...sashimi,
    ...maki,
    ...veganSushi,
    ...specialRolls,
    ...temaki,
    ...insideOutRolls,
  ]
};

export default menuData;