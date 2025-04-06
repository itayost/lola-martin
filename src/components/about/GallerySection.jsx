// src/components/about/GallerySection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Section from '../ui/Section';
import { galleryContent, gallery } from '../../data/aboutData';

const GallerySection = () => {
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
    <Section className="py-20 bg-background">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-text">
          {galleryContent.title}
        </motion.h2>
        <motion.div variants={fadeIn} className="w-24 h-1 bg-accent mx-auto mb-6"></motion.div>
        <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-lg text-muted">
          {galleryContent.description}
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className={`relative overflow-hidden rounded-lg ${
              index === 3 ? "col-span-2 row-span-2" : ""
            } group`}
            style={{ height: index === 3 ? "auto" : "240px" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white font-medium">{item.alt}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default GallerySection;