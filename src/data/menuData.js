const openings = [
    {
      id: 'opening1',
      name: 'לחם הבית',
      description: 'שמן זית, בלסמי וזיתים',
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
      name: 'איקרא',
      description: 'סלט ביצי דגים, בצל ירוק קצוץ, בצל לבן',
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
      name: 'סגאנקי',
      description: 'קוביית גבינת פטה מטוגנת ברוטב דבש',
      price: 36,
      category: 'Starters'
    }
  ];
const salads = [{
      id: 'salad1',
      name: 'טבולה הדרים',
      description: 'פטרוזיליה קצוצה, קינואה, בורגול, רימון, פילה של פלחי הדרים, אגוזי קשיו. מתובל במיץ לימון, שמן זית, מלח ופלפל, טבעוני.',
      price: 59,
      category: 'Salads',
      dietary: ["Vegan"]
    },
    {
      id: 'salad2',
      name: 'סלט קיסר',
      description: 'לבבות חסה, בצל סגול, אגוזי מלך וקרוטונים, גבינת פרמז\'ן הסלט מוגש ברוטב קיסר המכיל ביצים, אנשובי, גבינת פרמז\'ן, שמן, בזיליקום וחרדל נעשה אצלנו באופן ביתי.',
      price: 59,
      category: 'Salads'
    },
    {
      id: 'salad4',
      name: 'סלט ירוק עולה',
      description: 'מבחר עלי חסה, עלי תרד, בצל ירוק (לא ניתן להשמיט מרכיבים מהתערובת עלים) תפוחי עץ ירוקים, וקולורבי, אגוזי מלך וגבינה כחולה, רוטב ויניגרט הדרים ושמפניה.',
      price: 59,
      category: 'Salads', 
      image:"/images/menu/appetizers/green.jpg"
    },
    {
      id: 'salad5',
      name: 'סלט עגבניות שרי',
      description: 'מגוון סוגי עגבניות שרי, קוביה של גבינת פטה מחלב בקר, עלי בר טריים, בצל סגול וצנונית. מטובל בשמן זית מלח ופלפל.',
      price: 59,
      category: 'Salads', 
      image:"/images/menu/appetizers/tomato.jpg"
    },
    {
      id: 'salad6',
      name: 'סלט קצוץ עם טחינה',
      description: 'עגבניה, מלפפון, בצל ופטרוזיליה קצוצים עם טחינה בצד.',
      price: 55,
      category: 'Salads', 
      image:"/images/menu/salads/chopped.jpg"
    },
    {
      id: 'salad7',
      name: 'סלט ניסואז',
      description: 'ילו פין טונה טריה צרובה, שעועית ירוקה, תפוח אדמה, מלפפון, בצל סגול, עגבניות שרי, ביצה רכה ואיולי צ\'יפוטלה',
      price: 79,
      category: 'Salads'
    }];
const firsts = [{
      id: 'first1',
      name: 'אויסטר ג\'ילרדו',
      description: 'חומץ בן יין ובצל אדום',
      price: 34,
      category: 'Appetizers'
    },
    {
      id: 'first2',
      name: 'קרפצ\'יו חציל',
      description: 'חציל קלוי על אש גלויה, תערובת גבינות של פטה ולאבנה, סלסה עגבניות, טחינה גולמית, חמוציות, סילאן שבבי חלווה',
      price: 57,
      category: 'Appetizers'
    },
    {
      id: 'first3',
      name: 'עטאייף דג',
      description: 'דג לבן, עשבי תיבול, קרם חציל שחור, קרם גזר, טחינת שקדים ויוגורט',
      price: 59,
      category: 'Appetizers'
    },
    {
      id: 'first4',
      name: 'תמנון לפקדה',
      description: 'זרוע תמנון מבושל בבישול איטי בטמפרטורה נמוכה עם שמן זית, צ\'ילי, שום על מצע קציפת פטה. פיקנטי.',
      price: 79,
      category: 'Appetizers'
    },
    {
      id: 'first5',
      name: 'טרטר סלמון',
      description: 'ברוטב יוזטו קושו, שמן שומשום, סויה, בצל ירוק וביצי סלמון',
      price: 69,
      category: 'Appetizers'
    },
    {
      id: 'first6',
      name: 'טרטר טונה אדומה',
      description: 'טונה אדומה, ויניגרייט צ\'ילי, שמן שומשום, שמן בזיל, בצל ירוק, פניני בלסמי (מכיל רוטב סויה)',
      price: 79,
      category: 'Appetizers'
    },
    {
      id: 'first7',
      name: 'סשימי דג לבן',
      description: 'נתחי דג לבן, ויניגרייט לימון כבוש וסלט אננס, פאפאיה וכוסברה',
      price: 69,
      category: 'Appetizers'
    },
    {
      id: 'first8',
      name: 'סביצ\'ה בר ים',
      description: 'קוביות מוסר ים טרי חתוכות לקוביות קטנות, בצל, כוסברה, צ\'ילי, קוביות של קולורבי ומלפפון קרנצ\'י, שמן בזיליקום וקריספי שאלוט',
      price: 69,
      category: 'Appetizers'
    },
    {
      id: 'first9',
      name: 'קוקי סא\'ן ג\'ק',
      description: 'סקאלופ, 3-4 יחידות במנה לפי הגודל, על רוטב שמנת, פרמזן ופטריות כמהין',
      price: 79,
      category: 'Appetizers', 
      image:"/images/menu/appetizers/cookie.jpg"
    },
    {
      id: 'first10',
      name: 'שיפוד שרימפס',
      description: 'צלוי על הפלנצ\'ה, 4 שיפודי יקטורי של שרימפס במרינדה, מוגש על קרם ארטישוק ירושלמי, קרם גזר, סלטון עשבי תיבול',
      price: 79,
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
      name: 'סיגר מראקש',
      description: 'עלי סיגר מרוקאים במילוי בשר טלה מפורק על טחינה עם עמבה וסלטון עגבניות פיקטני ושמן אריסה',
      price: 64,
      category: 'Appetizers'
    },
    {
      id: 'first13',
      special: true,
      name: 'קלמרי פלאנצ\'ה',
      description: 'קלמרי במילוי עשבי תיבול. כוסברה, פטרוזיליה, בצל מקורמל, שמן זית, מוגש על לאבנה מעושנת וסלט קטן של עדשים שחורות ובורגול פיקנטי',
      price: 69,
      category: 'Appetizers', 
      image:"/images/menu/appetizers/calamari-purple.jpg"
    }];

const seafood = [
    {
      id: 'seafood1',
      name: 'מרק פירות ים',
      description: 'קלמרי, שרימפס, מולים על בסיס עגבניות',
      price: 98,
      category: 'Seafood'
    },
    {
      id: 'seafood2',
      name: 'פסטה פירות ים',
      description: 'פסטה לינגוויני עם שרימפס, קלמרי ומולים ברוטב רוזה',
      price: 98,
      category: 'Seafood'
    },
    {
      id: 'seafood3',
      name: 'מול מרינייר',
      description: 'רוטה יין לבן וירקות שורש',
      price: 110,
      category: 'Seafood',
      image:"/images/menu/mains/mulim.jpg"
    },
    {
      id: 'seafood4',
      name: 'מעורב טין',
      description: 'שרימפס, קלמרי מטוגנים בשמן',
      price: 98,
      category: 'Seafood'
    },
    {
      id: 'seafood5',
      name: 'קריספי קלמרי',
      description: 'טבעות קלמרי מטוגן בשמן עמוק',
      price: 89,
      category: 'Seafood'
    },
    {
      id: 'seafood6',
      name: 'שרימפס שמן זית ושום',
      price: 98,
      category: 'Seafood', 
      image:"/images/menu/mains/shrimps-olio.jpg"
    },
    {
      id: 'seafood7',
      name: 'שרימפס שום, חמאה ויין',
      price: 98,
      category: 'Seafood'
    },
    {
      id: 'seafood8a',
      name: 'ג׳מבו שרימפס (חצי קילו)',
      price: 130,
      category: 'Seafood'
    },
    {
      id: 'seafood8b',
      name: 'ג׳מבו שרימפס (קילו)',
      price: 220,
      category: 'Seafood'
    },
    {
      id: 'seafood9',
      name: 'סרטנים כחולים',
      description: 'ברוטב שום, חמאה, יין לבן',
      price: 145,
      category: 'Seafood', 
      image:"/images/menu/mains/crabs.jpg"
    },
    {
      id: 'seafood10',
      name: 'סרטנים כחולים - "שקדי סטייל"',
      description: 'סרטנים כחולים ללא הזרועות מטוגנים בטיגון עמוק',
      price: 145,
      category: 'Seafood'
    },
    {
      id: 'seafood11',
      name: 'הגאלייה של ניסים',
      description: 'פירות ים, חמאת הדרים ומרווה',
      price: 125,
      category: 'Seafood'
    },
    {
      id: 'seafood12',
      name: 'לובסטר טרי',
      description: 'חלוט ברוטב חמאה שום ויין לבן',
      price: 280,
      category: 'Seafood'
    }
];

const mains = [
    {
      id: 'main1',
      name: 'פילה סלמון על מצע פירה עם רוטב חרדל שמנת',
      price: 98,
      category: 'Main Courses', 
      image:"/images/menu/mains/salmon.jpg"
    },
    {
      id: 'main2',
      name: 'קבב דגים',
      description: 'דג לבן קצוץ על האש רוטב טחינה ויוגורט פיקנטי, זיתי טאסוס גבינת פטה, תפוח אדמה, שרי ובצל מקורמל',
      price: 115,
      category: 'Main Courses'
    },
    {
      id: 'main3',
      name: 'פילה לברק שלם על ירקות ירוקים מהכרמל',
      description: 'הפילה נעשה על הפלנצ\'ה ומוגש על רוטב חמאת עגבניות ועם זוקיני, שעועית ירוקה, ברוקולי ותרד מוקפצים ברוטב לימוני',
      price: 129,
      category: 'Main Courses', 
      image:"/images/menu/mains/lavrak-yarok.jpg"
    },
    {
      id: 'main4',
      name: 'דניס שלם בתנור',
      description: 'עם ירקות אנטיפסטי',
      price: 134,
      category: 'Main Courses'
    },
    {
      id: 'main5',
      name: 'לברק שלם בתנור או בגריל',
      description: 'עם ירקות אנטיפסטי',
      price: 134,
      category: 'Main Courses',
      image:"/images/menu/mains/lavrak-tanur.jpg"
    },
    {
      id: 'main6',
      name: 'לברק מטוגן',
      description: 'מוגש עם תפוחי אדמה בתנור',
      price: 134,
      category: 'Main Courses'
    },
    {
      id: 'main7',
      name: 'ברבוניה',
      special: true,
      price: 130,
      category: 'Main Courses'
    },
    {
      id: 'main8',
      name: 'דובר סול בשום חמאה ויין',
      description: 'המחיר משתנה על פי גודל המנה',
      price: 220,
      category: 'Main Courses'
    },
    {
      id: 'main9',
      name: 'פילה לברק מדורה',
      description: 'מוגש עם תרד עלי גפן שום צ\'ילי לימון כבוש',
      price: 134,
      category: 'Main Courses'
    },
    {
      id: 'main10',
      name: 'לוקוס לפי משקל',
      description: '39 ש"ח ל-100 גרם',
      price: 39,
      category: 'Main Courses'
    },
    {
      id: 'main11',
      name: 'מושט לויתן',
      description: 'מטוגן עם רוטב אסיאתי מעל וירקות ירוקים',
      price: 110,
      category: 'Main Courses'
    },
    {
      id: 'main12',
      name: 'פיש בורגר',
      price: 79,
      category: 'Main Courses'
    },
    {
      id: 'main13',
      name: 'דניס מטוגן',
      price: 134,
      category: 'Main Courses'
    }
];

const meatPoultry = [
    {
      id: 'meat1',
      name: 'אנטריקוט',
      price: 159,
      category: 'Meat and Poultry'
    },
    {
      id: 'meat2',
      name: 'סטייק פרגית',
      description: 'מוגש עם תפוח אדמה בתנור או פירה',
      price: 79,
      category: 'Meat and Poultry'
    },
    {
      id: 'meat3',
      name: 'שניצל',
      description: 'מוגש עם תפוח אדמה בתנור, צ\'יפס או פירה',
      price: 79,
      category: 'Meat and Poultry'
    }
];

const desserts = [
    {
      id: 'dessert1',
      name: 'עוגת שוקולד נמסיס',
      description: 'עוגת שוקולד חמה וביתית נימוחה מאוד, עשירה ומלאה בשוקולד. ללא קמח',
      price: 48,
      category: 'Desserts'
    },
    {
      id: 'dessert2',
      name: 'קרם ברולה',
      price: 48,
      category: 'Desserts'
    },
    {
      id: 'dessert3',
      name: 'מלבי',
      description: 'מוגש עם רוטב דובדבני אמרנה ושברי פיסטוקים',
      price: 44,
      category: 'Desserts'
    },
    {
      id: 'dessert4',
      name: 'קראק פאי',
      description: 'פאי קרנצ\'י ונימוח של גרנולה, טופי, קרמל ווניל',
      price: 46,
      category: 'Desserts'
    },
    {
      id: 'dessert5',
      name: 'טירמיסו',
      price: 48,
      category: 'Desserts'
    }
];

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
      name: 'פיאנו פינו גריג\'יו, איטליה',
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
      name: 'ואלפוליצ\'לה סופריורה, איטליה',
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
      name: 'יקב מונטפלוצ\'יאנו, איטליה',
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
  seafood,
  meatPoultry,
  desserts,
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
    ...mains,
    ...seafood,
    ...meatPoultry,
    ...desserts
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
    ...seafood,
    ...meatPoultry,
    ...desserts
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