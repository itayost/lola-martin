import HalfPillRow from '../ui/HalfPillRow';

const StorySection = () => {
  return (
    <div className="">
      <HalfPillRow
        image="/images/gallery/food-4.jpg"
        title="מסע קולינרי"
        text="הסיפור שלנו מספר על דרך עם רגעים בלתי נשכחים, צבעים חיים וחוויות ייחודיות. אנו מזמינים אתכם לגלות על חוויה מיוחדת.
        תנו לתמונות לדבר בעד עצמן."
        link={{ href: "/about", label: "גלו עוד" }}
        reverse={false}
      />

      <HalfPillRow
        image="/images/gallery/restaurant-3.jpg"
        title="מה בתפריט"
        text="בלולה מרטין מוצג תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, קוקי סאן זאק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות."
        link={{ href: "/menu", label: "תפריט המסעדה" }}
        reverse={true}
      />

      <HalfPillRow
        image="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1050&q=80"
        title="יצירת קשר ואירועים"
        text="מסעדת לולה מרטין מזמינה אתכם ליצור עמנו קשר. באפשרותכם להזמין מקום. איתנו תוכלו לחגוג את האירוע שלכם."
        link={{ href: "/contact", label: "צור קשר" }}
        reverse={false}
      />
    </div>
  );
};
export default StorySection;