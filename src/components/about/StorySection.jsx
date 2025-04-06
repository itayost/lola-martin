import HalfPillRow from '../ui/HalfPillRow';

const StorySection = () => {
  return (
    <div className="">
      <HalfPillRow
        image="/images/gallery/food-4.jpg"
        title="מסע של טעם ונראות"
        text="תנו לתמונות לספר את הסיפור שלנו – דרך רגעים בלתי נשכחים, צבעים חיים, וחוויות ייחודיות במסעדה של לולה מרטין."
        link={{ href: "/gallery", label: "גלו עוד" }}
        reverse={false}
      />

      <HalfPillRow
        image="/images/gallery/restaurant-3.jpg"
        title="שולחנות ואווירה"
        text="האווירה שלנו מעוצבת בקפידה, עם מרחבים ייחודיים לאירועים, פינות ישיבה אינטימיות ואור טבעי בשפע."
        link={{ href: "/about", label: "אודות המסעדה" }}
        reverse={true}
      />

      <HalfPillRow
        image="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1050&q=80"
        title="צוות לולה מרטין"
        text="הצוות שלנו – מהשפים ועד המלצרים – נמצא כאן כדי להפוך כל ביקור לחוויה יוקרתית ובלתי נשכחת."
        link={{ href: "/contact", label: "צור קשר" }}
        reverse={false}
      />
    </div>
  );
};
export default StorySection;