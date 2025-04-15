import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Section = forwardRef(({ 
  children, 
  className = '', 
  fullWidth = false,
  id,
  ...props 
}, ref) => {
  return (
    <motion.section 
      ref={ref}
      id={id}
      className={`
        py-16 
        bg-card text-text 
        dark:bg-background dark:text-white 
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4">
          {children}
        </div>
      )}
    </motion.section>
  );
});

Section.displayName = 'Section';
export default Section;