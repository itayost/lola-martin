// src/pages/privacy.jsx
import React from 'react';
import Head from 'next/head';
import { m } from 'framer-motion';
import { useRestaurantInfo } from '../components/shared/RestaurantInfo';

const PrivacyPage = () => {
  const info = useRestaurantInfo();

  const sections = [
    {
      title: "מבוא",
      content: `מדיניות פרטיות זו ("המדיניות") נועדה להסביר כיצד ${info.name} ("החברה", "אנחנו", "שלנו") אוספת, משתמשת, שומרת ומשתפת מידע אישי במסגרת השימוש באתר, בשירותים ובמוצרים שלנו.`
    },
    {
      title: "מידע שנאסף",
      content: "בעת השימוש באתר או בשירותים שלנו, ייתכן שנאסוף את המידע הבא: מידע שמוזן על ידי המשתמש בטפסים, לרבות שם, טלפון, כתובת דוא״ל ופרטי הזמנה; מידע טכני, כגון כתובת IP, סוג מכשיר, מערכת הפעלה, דפדפן, ופעולות שבוצעו באתר; קבצי קוקיז וטכנולוגיות מעקב דומות לצורך ניתוח, אבטחה ושיפור חוויית המשתמש."
    },
    {
      title: "מטרות השימוש במידע",
      content: "המידע האישי שנאסף משמש את החברה לצרכים הבאים: מתן השירותים שהוזמנו; יצירת קשר עם המשתמשים לצרכים תפעוליים או שיווקיים; שיפור השירותים, חוויית המשתמש ותכני האתר; שמירה על אבטחת המידע ומניעת פעולות הונאה."
    },
    {
      title: "שיתוף מידע עם צדדים שלישיים",
      content: "החברה לא תמכור או תעביר מידע אישי לצדדים שלישיים למטרות שיווקיות ללא הסכמת המשתמש. עם זאת, ייתכן ונשתף מידע עם ספקים חיצוניים לצורך אספקת השירותים (כגון מערכת הזמנות, ספקי אחסון, דיוור, אבטחת מידע וכדומה), בכפוף להסכמי סודיות."
    },
    {
      title: "שמירה ואבטחת מידע",
      content: "החברה נוקטת באמצעים סבירים לאבטחת המידע האישי מפני גישה בלתי מורשית, שימוש לרעה או חשיפה. עם זאת, אין ביכולתנו להבטיח אבטחה מוחלטת של המידע, ולא נישא באחריות לכל נזק שייגרם כתוצאה מפריצה או גישה בלתי מורשית למערכות."
    },
    {
      title: "עוגיות (Cookies)",
      content: "האתר שלנו עשוי להשתמש בעוגיות וטכנולוגיות מעקב דומות לצורך ניתוח תעבורה, אבטחה ושיפור חוויית המשתמש. עוגיות הן קבצים קטנים שנשמרים במכשיר שלכם. ניתן לשנות את הגדרות הדפדפן כדי לסרב לקבלת עוגיות, אך הדבר עלול להשפיע על חוויית השימוש באתר."
    },
    {
      title: "זכויות המשתמש",
      content: "למשתמש קיימת הזכות: לבקש לעיין, לתקן או למחוק את המידע האישי שנשמר עליו; להתנגד לעיבוד מידע מסוים; למשוך הסכמה, ככל שהעיבוד מבוסס על הסכמה. לבירורים ובקשות ניתן לפנות אלינו באמצעי הקשר המפורטים מטה."
    },
    {
      title: "שינויים במדיניות",
      content: "החברה שומרת לעצמה את הזכות לעדכן מדיניות זו מעת לעת. במקרה של שינוי מהותי, תפורסם הודעה באתר. המשך השימוש באתר לאחר עדכון המדיניות מהווה הסכמה לשינויים."
    },
    {
      title: "יצירת קשר",
      content: `לשאלות או בירורים לגבי מדיניות פרטיות זו, ניתן לפנות אלינו:\n\n${info.name}\nכתובת: ${info.contact.address.full}\nטלפון: ${info.contact.phone}\nדוא״ל: ${info.contact.email}`
    }
  ];

  return (
    <>
      <Head>
        <title>מדיניות פרטיות | {info.name}</title>
        <meta name="description" content={`מדיניות הפרטיות של ${info.name} - כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.`} />
      </Head>

      <main className="relative bg-background text-text min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-primaryDark to-background">
          <div className="container mx-auto px-4">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                מדיניות פרטיות
              </h1>
              <p className="text-muted text-lg">
                עודכן לאחרונה: ינואר 2025
              </p>
            </m.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <m.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg"
                >
                  <h2 className="text-xl font-bold text-accent mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPage;
