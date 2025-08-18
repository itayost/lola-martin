import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import { useRestaurantInfo } from '../shared/RestaurantInfo';

// Type definitions
interface ImageData {
  src: string;
  alt: string;
  isSquare?: boolean;
}

interface StorySection {
  id: string;
  title: string;
  content: string;
  images: ImageData[];
  layout: 'text-first' | 'image-first' | 'gallery';
  quote?: {
    text: string;
    author: string;
  };
}

const AboutStory = () => {
  const info = useRestaurantInfo();
  
  // Story sections with integrated images
  const storySections: StorySection[] = [
    {
      id: 'intro',
      title: 'ברוכים הבאים ללולה מרטין',
      content: `בלב הרצליה פיתוח שוכנת מסעדת לולה מרטין בהובלת המסעדן אפי אללוף. 
      לולה מרטין היא מקדש לדגים ופירות ים הכולל בר-מסעדה עם מנות מגוונות אשר תקנה לכם חוויית דגים ייחודית ואותנטית.`,
      images: [
        { src: '/images/gallery/restaurant-1.jpg', alt: 'חלל המסעדה' },
        { src: '/images/gallery/restaurant-2.jpg', alt: 'הבר המרכזי' }
      ],
      layout: 'text-first'
    },
    {
      id: 'chef',
      title: 'השף והחזון',
      content: `אפי אללוף המייסד, הבעלים ומי שאחראי על הצד הקולינרי (ג׳קו מאכלי ים) מביא אליכם להרצליה 
      מסורת מפוארת של ידע, אהבה לדגים ופירות ים לצד חדשנות בעולם הקולינרי בארץ.`,
      images: [
        { src: '/images/about/efi-alalouf.jpg', alt: 'אפי אללוף', isSquare: true },
        { src: '/images/gallery/food-1.jpg', alt: 'מנת שרימפס' }
      ],
      layout: 'image-first',
      quote: {
        text: "המסורת של מאכלי ים נפגשת עם החדשנות הקולינרית",
        author: "אפי אללוף, המייסד"
      }
    },
    {
      id: 'menu',
      title: 'התפריט שלנו',
      content: `בלולה מרטין תמצאו תפריט עשיר ומגוון שמביא את מגוון פירות הים לקדמת הבמה, 
      קוקי סאן ז׳אק, אוייסטרים, שרימפס, תפריט סושי ייחודי ועוד לצד מנות דגים מגוונות, 
      דגים נעים וספיישלים מהדגה הימית הטרייה.`,
      images: [
        { src: '/images/gallery/food-2.jpg', alt: 'סביצ׳ה דג לבן' },
        { src: '/images/gallery/food-3.jpg', alt: 'מנות ים' },
        { src: '/images/gallery/table-2.jpg', alt: 'קריספי רייס' }
      ],
      layout: 'gallery'
    },
    {
      id: 'atmosphere',
      title: 'האווירה והעיצוב',
      content: `לולה מרטין מעוצבת כולה מתוך אהבה לים, בצבעים של מעמקי האוקיינוס, 
      על קירות המסעדה תוכלו לראות תמונות ענק של ייצורי ים. במרכז המסעדה בר ישיבה אינטימי ומפנק 
      בו תוכלו לקבל יחס אישי וממנו ייצאו קוקטיילים מושקעים ואיכותיים, מגוון של אלכוהול והרבה הרבה יין.`,
      images: [
        { src: '/images/gallery/restaurant-3.jpg', alt: 'עיצוב המסעדה' },
        { src: '/images/gallery/restaurant-4.jpg', alt: 'סלט עגבניות שרי' }
      ],
      layout: 'text-first'
    },
    {
      id: 'team',
      title: 'הצוות שלנו',
      content: `במסעדה תפגשו צוות משפחתי ומקצועי אשר יקבל אתכם עם חיוך רחב, 
      ויוכל להתאים לכם את החוויה המושלמת.`,
      images: [
        { src: '/images/gallery/restaurant-5.jpg', alt: 'מנות ים חמות' },
        { src: '/images/gallery/table-1.jpg', alt: 'מגוון מנות טעימות במיוחד' }
      ],
      layout: 'image-first'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {storySections.map((section, index) => (
          <m.div
            key={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20 last:mb-0"
          >
            {/* Text First Layout */}
            {section.layout === 'text-first' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted leading-relaxed mb-6">
                    {section.content}
                  </p>
                  {section.quote && (
                    <blockquote className="border-r-4 border-gold pr-4 mt-6">
                      <p className="text-xl italic text-white mb-2">&ldquo;{section.quote.text}&rdquo;</p>
                      <cite className="text-sm text-gold">— {section.quote.author}</cite>
                    </blockquote>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {section.images.map((img, imgIndex) => (
                    <m.div
                      key={imgIndex}
                      className={`relative overflow-hidden rounded-lg group ${
                        // For chef section, keep both images as equal squares
                        section.id === 'chef' 
                          ? 'aspect-square' 
                          : imgIndex === 0 
                            ? 'col-span-2 aspect-[16/10]' 
                            : 'aspect-square'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </m.div>
                  ))}
                </div>
              </div>
            )}

            {/* Image First Layout */}
            {section.layout === 'image-first' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                  {section.images.map((img, imgIndex) => (
                    <m.div
                      key={imgIndex}
                      className={`relative overflow-hidden rounded-lg group ${
                        // For chef section, keep both images as equal squares
                        section.id === 'chef' 
                          ? 'aspect-square' 
                          : imgIndex === 0 
                            ? 'col-span-2 aspect-[16/10]' 
                            : 'aspect-square'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </m.div>
                  ))}
                </div>
                <div className="order-1 lg:order-2 text-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted leading-relaxed mb-6">
                    {section.content}
                  </p>
                  {section.quote && (
                    <blockquote className="border-r-4 border-gold pr-4 mt-6">
                      <p className="text-xl italic text-white mb-2">&ldquo;{section.quote.text}&rdquo;</p>
                      <cite className="text-sm text-gold">— {section.quote.author}</cite>
                    </blockquote>
                  )}
                </div>
              </div>
            )}

            {/* Gallery Layout */}
            {section.layout === 'gallery' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
                    {section.content}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.images.map((img, imgIndex) => (
                    <m.div
                      key={imgIndex}
                      className="relative aspect-square overflow-hidden rounded-lg group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{img.alt}</p>
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            )}
          </m.div>
        ))}

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-border/30"
        >
          <h3 className="text-2xl font-bold text-gold mb-4">
            הצטרפו אלינו לחוויה בלתי נשכחת
          </h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            אנו מזמינים אתכם להיות חלק מהסיפור שלנו ולחוות את המסעדה שלנו במלוא הדרה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={info.reservations.url}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              הזמן שולחן
            </Button>
            <Button
              href="/menu"
              variant="secondary"
              size="lg"
            >
              צפה בתפריט
            </Button>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default AboutStory;