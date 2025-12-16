// src/data/restaurantInfo.js
const restaurantInfo = {
  // Basic Info
  name: "לולה מרטין",
  tagline: "מסעדת שף ים תיכונית",
  established: "2018",
  
  // Contact
  contact: {
    address: {
      street: "שדרות אבא אבן 10",
      city: "הרצליה פיתוח",
      zipCode: "4672521",
      full: "שדרות אבא אבן 10, הרצליה פיתוח."
    },
    phone: "09-7614242",
    fax: "077-8574225",
    email: "efidagdag@gmail.com",
    mapLink: "https://maps.app.goo.gl/zpjgV2Wunb6fZM13A",
    mapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.597066753253!2d34.80624997524138!3d32.16117061520444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d496f9d1f1f37%3A0xd1759d433f99bb81!2sLola%20Martin!5e0!3m2!1sen!2sil!4v1743811289590!5m2!1sen!2sil"
  },
  
  // Hours
  hours: {
    sunday: { open: "12:00", close: "22:00" },
    monday: { open: "12:00", close: "22:00" },
    tuesday: { open: "12:00", close: "22:00" },
    wednesday: { open: "12:00", close: "22:00" },
    thursday: { open: "12:00", close: "22:00" },
    friday: { open: "12:00", close: "23:00" },
    saturday: { open: "12:00", close: "22:00" },
    display: {
      weekdays: "ראשון - חמישי: 12:00 - 22:00",
      friday: "שישי: 12:00 - 23:00",
      saturday: "שבת: 12:00 - 22:00"
    }
  },
  
  // Reservations
  reservations: {
    platform: "Tabit",
    url: "https://tabitisrael.co.il/הזמנת-מקום/create-reservation?step=search&orgId=68c814313f81d11a4c6d55a6&locale=he-IL&source=website&type=future_reservation"
  },
  
  // Parking
  parking: {
    info: "ניתן להחנות בחניון אקרשטיין. למסעדה הסדר מיוחד עם החניון",
    mapLink: "https://maps.app.goo.gl/z4Lg3bnCxEbWF3iK8"
  },
  
  // Payment Methods
  paymentMethods: {
    cards: ["Visa", "Mastercard", "American Express"],
    coupons: ["סיבוס", "תן-ביס", "גודי"],
    info: "כרטיסי סיבוס, תן-ביס, וגודי מתקבלים בכל ימות השבוע"
  },
  
  // Social Media
  social: {
    facebook: {
      url: "https://facebook.com/lolamartinil",
      handle: "@lolamartin"
    },
    instagram: {
      url: "https://instagram.com/lolamartinrest",
      handle: "@lolamartin"
    }
  },
  
  // Menu Categories
  menuCategories: [
    { id: "lunch", label: "תפריט צהריים" },
    { id: "dinner", label: "תפריט ערב" },
    { id: "sushi", label: "סושי" }
  ],
  
  // FAQ
  faq: [
    {
      question: "האם יש צורך בהזמנת מקום מראש?",
      answer: "מומלץ להזמין מקום מראש, במיוחד בסופי שבוע ובשעות העומס. ניתן להזמין דרך האתר שלנו או בטלפון 09-7614242."
    },
    {
      question: "האם ניתן לערוך אירועים פרטיים במסעדה?",
      answer: "בהחלט! אנו מציעים אפשרויות לאירועים פרטיים כגון ימי הולדת, אירועים עסקיים, וחגיגות משפחתיות. צרו איתנו קשר לקבלת פרטים נוספים ותיאום."
    },
    {
      question: "האם יש אפשרות למנות טבעוניות או ללא גלוטן?",
      answer: "כן, בתפריט שלנו יש מגוון מנות המתאימות לטבעונים וצמחונים, וכן מנות ללא גלוטן. נא לציין את הדרישות התזונתיות שלכם בעת ההזמנה."
    },
    {
      question: "האם יש חניה באזור המסעדה?",
      answer: "כן, ישנו חניון ציבורי בסמוך למסעדה. בנוסף, בשעות הערב ובסופי שבוע ניתן למצוא חניה ברחובות הסמוכים."
    },
    {
      question: "האם אתם מציעים משלוחים או איסוף עצמי?",
      answer: "אנחנו עובדים עם שירותי משלוחים כמו תן-ביס. כמו כן, ניתן להזמין טלפונית ולאסוף את ההזמנה ישירות מהמסעדה."
    }
  ],
};

export default restaurantInfo;