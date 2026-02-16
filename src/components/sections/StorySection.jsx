import HalfPillRow from '../ui/HalfPillRow';

const StorySection = () => {
  return (
    <div className="">
      <HalfPillRow
        image="/images/gallery/table-3.jpg"
        title="מסע קולינרי"
        text="הסיפור שלנו מספר על דרך עם רגעים בלתי נשכחים, צבעים חיים וחוויות ייחודיות. אנו מזמינים אתכם לגלות על חוויה מיוחדת.
        תנו לתמונות לדבר בעד עצמן."
        link={{ href: "/about", label: "גלו עוד" }}
        reverse={false}
        imagePosition="center 70%"
      />

      <HalfPillRow
        image="/images/gallery/table-2.jpg"
        title="מה בתפריט"
        text="בלולה מרטין תמצאו תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, קוקי סאן ז׳אק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות."
        link={{ href: "/menu", label: "תפריט המסעדה" }}
        reverse={true}
        clipTop={10}
        clipBottom={30}
      />

      <HalfPillRow
        image="/images/gallery/restaurant-1.jpg"
        title="יצירת קשר ואירועים"
        text="מסעדת לולה מרטין מזמינה אתכם ליצור עמנו קשר. באפשרותכם להזמין מקום. איתנו תוכלו לחגוג את האירוע שלכם."
        link={{ href: "/contact", label: "צור קשר" }}
        reverse={false}
      />
    </div>
  );
};
export default StorySection;