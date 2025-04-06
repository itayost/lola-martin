// src/components/about/ChefSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/legacy/image";
import Button from '../ui/Button';
import { chefContent } from '../../data/aboutData';

const ChefSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-primary z-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/about/seafood-pattern.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={fadeIn}
            className="rounded-lg overflow-hidden shadow-elegant"
          >
            <div className="relative h-96">
              <Image
                src={chefContent.image}
                alt={chefContent.imageAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4 text-text">{chefContent.title}</h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            
            {chefContent.paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="mb-6 text-lg text-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            
            <Button href="/reserve" variant="outline">הזמן שולחן</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefSection;