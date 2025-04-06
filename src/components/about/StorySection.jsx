import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import Section from '../ui/Section';
import { storyContent } from '../../data/aboutData';

const StorySection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <Section className="py-20 bg-card">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeIn} className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 text-text">{storyContent.title}</h2>
          <div className="w-16 h-1 bg-accent mb-6"></div>
          <p className="mb-4 text-lg font-semibold text-accent">{storyContent.subtitle}</p>

          {storyContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-lg text-muted leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          <Button href="/menu" className="mt-4">
            לתפריט שלנו
          </Button>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden shadow-elegant group"
        >
          <Image
            src={storyContent.image}
            alt={storyContent.imageAlt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default StorySection;