// src/components/about/GallerySection.jsx
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/legacy/image';
import Section from '../ui/Section';
import dynamic from 'next/dynamic';
import { galleryContent, gallery } from '../../data/aboutData';

const FloatingDecorations = dynamic(() => import('../ui/FloatingDecorations'), { ssr: false });

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(null);
  const overlayRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  return (
    <Section className="py-20 bg-background relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-text">
          {galleryContent.title}
        </motion.h2>
        <motion.div variants={fadeIn} className="w-24 h-1 bg-accent mx-auto mb-6"></motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Array.isArray(gallery) && gallery.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className={`relative overflow-hidden rounded-lg ${index === 3 ? 'col-span-2 row-span-2' : ''} group`}
            style={{ height: index === 3 ? 'auto' : '240px' }}
            onClick={() => setActiveImage(item)}
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

      {typeof window !== 'undefined' && (
        <FloatingDecorations variant="mixed" count={16} opacity={0.25} maxSize="16px" />
      )}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-xl shadow-elegant">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default GallerySection;
