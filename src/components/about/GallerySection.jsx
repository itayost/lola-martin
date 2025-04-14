// src/components/about/GallerySection.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/legacy/image';
import Section from '../ui/Section';
import { galleryContent, gallery } from '../../data/aboutData';

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <Section className="py-24 bg-background text-text">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
          {galleryContent.title}
        </motion.h2>
        <motion.p variants={fadeIn} className="text-muted text-lg max-w-xl mx-auto">
          {galleryContent.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0"
      >
        {Array.isArray(gallery) && gallery.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium text-shadow-sm">
                {item.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default GallerySection;