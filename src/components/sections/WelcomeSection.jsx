import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create more dynamic scroll transformations
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  // Decorative element variants
  const decorElements = [
    { 
      x: '10%', 
      y: '20%', 
      color: 'bg-gold/20', 
      size: 'w-24 h-24', 
      blur: 'blur-xl',
      movement: { x: [-10, 10], y: [-5, 5] }
    },
    { 
      x: '80%', 
      y: '70%', 
      color: 'bg-accent/10', 
      size: 'w-16 h-16', 
      blur: 'blur-lg',
      movement: { x: [5, -5], y: [5, -5] }
    }
  ];

  return (
    <Section 
      ref={sectionRef}
      className="relative bg-card text-text py-28 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      {decorElements.map((elem, index) => (
        <motion.div
          key={index}
          className={`absolute z-0 rounded-full ${elem.color} ${elem.size} ${elem.blur}`}
          style={{ 
            left: elem.x, 
            top: elem.y,
            transform: 'translate(-50%, -50%)' 
          }}
          animate={{
            x: elem.movement.x,
            y: elem.movement.y,
            rotate: [0, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20 bg-[url('/images/restaurant-bg.jpg')]" />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Interactive Hover Effect for Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 300
          }}
          className="text-4xl font-bold text-gold mb-6 cursor-pointer"
        >
          ברוכים הבאים ללולה מרטין
        </motion.h2>

        {/* Paragraphs with Staggered Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            className="text-lightMuted text-lg leading-loose mb-6"
          >
            לולה מרטין שוכנת בלב הרצליה פיתוח, בתוך מבנה ייחודי המשמר את הקסם הארכיטקטוני של המאה הקודמת עם נגיעות מודרניות.
            המסעדה מוקפת חצר פנימית פורחת, דלתות עץ ישנות ותחושת חמימות של בית – בית של טעמים, ריחות וזיכרונות.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            className="text-lightMuted text-lg leading-loose mb-8"
          >
            המטבח שלנו משלב מסורת עם חדשנות קולינרית, בהשראת המטבח הים-תיכוני המקומי. כל מנה מספרת סיפור – של חומרי גלם עונתיים,
            של שורשים, של טעמים עמוקים שמחברים בין עדות, תרבויות ורגעים בלתי נשכחים.
          </motion.p>
        </motion.div>

        {/* Button with Interactive Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            href="/menu"
            className="group relative overflow-hidden"
          >
            <motion.span
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="block"
            >
              הצצה לתפריט
            </motion.span>
            
            {/* Hover effect */}
            <motion.span
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gold/20 z-[-1] transform -translate-x-full group-hover:translate-x-0"
            />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WelcomeSection;