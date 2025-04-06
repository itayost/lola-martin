// src/components/sections/ScrollingSplitSections.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

const SplitSection = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  buttonText, 
  buttonLink, 
  imageOnRight = false,
  index
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div 
      ref={ref}
      className="py-20 odd:bg-card even:bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {!imageOnRight ? (
            <>
              {/* Image - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className={`relative rounded-lg overflow-hidden ${index % 2 === 0 ? 'image-shadow-right' : ''}`}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={500}
                    className=" w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Text Content - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 text-right"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">{title}</h2>
                <div className="w-16 h-1 bg-accent mb-6 mr-0 ml-auto"></div>
                
                <p className="mb-6 text-lg text-muted leading-relaxed">
                  {description}
                </p>
                
                {buttonText && (
                  <Button href={buttonLink} className="mt-4">
                    {buttonText}
                  </Button>
                )}
              </motion.div>
            </>
          ) : (
            <>
              {/* Text Content - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="order-1 text-right"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">{title}</h2>
                <div className="w-16 h-1 bg-accent mb-6 mr-0 ml-auto"></div>
                
                <p className="mb-6 text-lg text-muted leading-relaxed">
                  {description}
                </p>
                
                {buttonText && (
                  <Button href={buttonLink} className="mt-4">
                    {buttonText}
                  </Button>
                )}
              </motion.div>
              
              {/* Image - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="order-2"
              >
                <div className={`relative rounded-lg overflow-hidden ${index % 2 === 1 ? 'image-shadow-left' : ''}`}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ScrollingSplitSections = () => {
  const sections = [
    {
      title: "המטבח שלנו",
      description: "במטבח של לולה מרטין, כל מנה היא יצירת אמנות קולינרית. השפים שלנו משלבים טכניקות מסורתיות עם חדשנות מודרנית, תוך שימוש בחומרי גלם איכותיים וטריים שנבחרים בקפידה. התוצאה היא חוויה קולינרית בלתי נשכחת המשלבת טעמים, מרקמים וארומות ייחודיות.",
      imageSrc: "/images/about/chef-portrait.jpg",
      imageAlt: "השף של לולה מרטין",
      buttonText: "הכירו את השף שלנו",
      buttonLink: "/about#chef",
      imageOnRight: false
    },
    {
      title: "חוויית האירוח",
      description: "אנו מאמינים שארוחה טובה היא הרבה יותר מסתם אוכל. ב-לולה מרטין, אנו יוצרים חוויית אירוח שלמה - החל מהאווירה החמימה והמזמינה, דרך השירות האישי והקשוב, ועד לפרטים הקטנים שהופכים כל ביקור לחגיגה קולינרית אמיתית.",
      imageSrc: "/images/gallery/restaurant-1.jpg",
      imageAlt: "חלל המסעדה של לולה מרטין",
      buttonText: "הזמינו שולחן",
      buttonLink: "https://ontopo.com/he/il/page/24219808",
      imageOnRight: true
    },
    {
      title: "המנות שלנו",
      description: "התפריט שלנו מציע מגוון עשיר של מנות המשלבות השפעות ים-תיכוניות עם טוויסט מודרני. ממנות פתיחה מפתות, דרך סלטים רעננים, ועד מנות עיקריות עשירות וקינוחים מפנקים - כל מנה מוכנה בקפידה כדי להעניק לכם חוויה קולינרית שתשאיר אתכם רוצים עוד.",
      imageSrc: "/images/gallery/food-1.jpg",
      imageAlt: "מנות מיוחדות של לולה מרטין",
      buttonText: "לתפריט המלא",
      buttonLink: "/menu",
      imageOnRight: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-background to-card">
      {sections.map((section, index) => (
        <SplitSection
          key={index}
          {...section}
          index={index}
        />
      ))}
    </div>
  );
};

export default ScrollingSplitSections;