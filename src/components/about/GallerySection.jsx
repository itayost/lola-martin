// src/components/about/GallerySection.jsx
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from "next/legacy/image";
import Section from '../ui/Section';
import FloatingDecorations from '../ui/FloatingDecorations';
import { galleryContent, gallery } from '../../data/aboutData';

const GallerySection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeImage, setActiveImage] = useState(null);
  const overlayRef = useRef(null);

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

  const imageHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <Section id="gallery" className="relative z-10 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {Array.isArray(gallery) && gallery.map((item, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-elegant cursor-pointer"
            whileHover="hover"
            variants={fadeIn}
            onClick={() => setActiveImage(item)}
          >
            <motion.div variants={imageHoverVariants}>
              <div className="relative aspect-[4/3] w-full bg-background/50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

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