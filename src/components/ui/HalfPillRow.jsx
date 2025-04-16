import { motion } from 'framer-motion';

const HalfPillRow = ({ image, title, text, link, reverse = false }) => {
  const imageStyles = reverse
    ? {
        clipPath: 'inset(20% 0 20% 0 round 0 200px 200px 0)',
        WebkitClipPath: 'inset(20% 0 20% 0 round 0 200px 200px 0)',
      }
    : {
        clipPath: 'inset(20% 0 20% 0 round 200px 0 0 200px)',
        WebkitClipPath: 'inset(20% 0 20% 0 round 200px 0 0 200px)',
      };

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-2 items-center bg-card overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
        },
      }}
    >
      {/* Text Column - Always first/top on mobile */}
      <motion.div
        className={`p-8 md:p-12 lg:p-16 text-right order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}
        variants={{
          hidden: { opacity: 0, x: reverse ? 100 : -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">{title}</h2>
        <p className="text-lightMuted text-lg leading-relaxed mb-6">{text}</p>
        <a
          href={link.href}
          className="inline-block px-6 py-2 bg-gold text-background rounded-lg font-medium hover:bg-goldDark transition-colors duration-300"
        >
          {link.label}
        </a>
      </motion.div>

      {/* Image Column - Always second/bottom on mobile */}
      <motion.div
        className={`relative h-[400px] md:h-[600px] lg:h-[700px] order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}
        variants={{
          hidden: { opacity: 0, scale: 1.05 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...imageStyles,
          }}
        >
          <div className="absolute inset-0 bg-background/20 mix-blend-multiply"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HalfPillRow;