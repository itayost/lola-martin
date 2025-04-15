// src/data/siteMetadata.js

const siteMetadata = {
  // Basic site info
  title: "לולה מרטין",
  titleTemplate: "%s | לולה מרטין",
  description: "מסעדת שף ים תיכונית מבית אפי אללוף, המציעה חוויה קולינרית של טעמים ים תיכוניים המשלבים מסורת וחדשנות",
  siteUrl: "https://www.lolamartin.co.il", // Replace with your actual domain
  language: "he-IL",
  locale: "he_IL",
  
  // Default social sharing image (1200x630 recommended)
  image: "/images/og/default.jpg",
  
  // Contact info
  email: "info@lolamartin.co.il",
  phone: "09-7614242",
  address: "שדרות אבא אבן 10, הרצליה פיתוח",
  
  // Social media handles
  social: {
    facebook: "https://facebook.com/lolamartinil",
    facebookHandle: "@lolamartin",
    instagram: "https://instagram.com/lolamartinrest",
    instagramHandle: "@lolamartin",
    twitterHandle: "", // Add if available
    linkedinHandle: "", // Add if available
  },
  
  // Restaurant info
  businessHours: {
    weekdays: "ראשון - חמישי: 12:00 - 22:00",
    friday: "שישי: 12:00 - 23:00",
    saturday: "שבת: 12:00 - 22:00"
  },
  
  // Reservation link
  reservationLink: "https://ontopo.com/he/il/page/24219808",
  
  // Pages metadata
  pages: {
    home: {
      title: "לולה מרטין - מסעדת שף ים תיכונית",
      description: "מסעדה מבית אפי אללוף, המציעה חוויה קולינרית של טעמים ים תיכוניים בישיבה נעימה בהרצליה פיתוח",
      image: "/images/og/default.jpg",
      type: "website"
    },
    about: {
      title: "אודות - לולה מרטין",
      description: "לולה מרטין בהובלת המסעדן אפי אללוף היא מקדש לדגים ופירות ים הכולל בר-מסעדה מעוצב בהשראת הים",
      image: "/images/og/default.jpg",
      type: "website"
    },
    menu: {
      title: "תפריט - לולה מרטין",
      description: "תפריט המסעדה כולל מגוון רחב של פירות ים: קוקי סאן ז'אק, אוייסטרים, וונגולי, שרימפס, לצד מנות דגים מגוונות",
      image: "/images/og/default.jpg",
      type: "website"
    },
    contact: {
      title: "צור קשר - לולה מרטין",
      description: "צרו קשר עם מסעדת לולה מרטין - הזמינו שולחן, שאלו שאלות, או תאמו אירוע פרטי",
      image: "/images/og/contact-og-image.jpg",
      type: "website"
    },
    privacy: {
      title: "מדיניות פרטיות - לולה מרטין",
      description: "מדיניות הפרטיות של מסעדת לולה מרטין לגבי איסוף ושימוש במידע",
      image: "/images/og/default.jpg",
      type: "website"
    }
  },
  
  // SEO settings
  seo: {
    titleSeparator: " | ",
    additionalMetaTags: [
      { name: "author", content: "Lola Martin Restaurant" },
      { name: "theme-color", content: "#0A192F" }
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  },
};

export default siteMetadata;