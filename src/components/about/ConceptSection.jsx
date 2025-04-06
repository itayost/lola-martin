// src/components/about/ConceptSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../ui/Section';
import { conceptContent, conceptFeatures } from '../../data/aboutData';

const ConceptSection = () => {
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
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-text">
            {conceptContent.title}
          </motion.h2>
          <motion.div variants={fadeIn} className="w-24 h-1 bg-accent mx-auto mb-6"></motion.div>
          <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-lg text-muted">
            {conceptContent.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {conceptFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-accentLight/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-text">
                {feature.title}
              </h3>
              <p className="text-center text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default ConceptSection;