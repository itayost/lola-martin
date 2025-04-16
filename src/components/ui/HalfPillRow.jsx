// Updated HalfPillRow.jsx with proper Image handling for mobile
import { m } from 'framer-motion';
import Image from 'next/image';
import AnimatedElement from '../shared/AnimatedElement';
import { useAnimationContext } from '../../pages/_app';

const HalfPillRow = ({ image, title, text, link, reverse = false }) => {
  const { animationsReady } = useAnimationContext();

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
    <m.section
      className="grid grid-cols-1 md:grid-cols-2 items-center bg-card overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {/* Text Column */}
      <AnimatedElement
        animation={reverse ? 'fadeInRight' : 'fadeInLeft'}
        className={`p-8 md:p-12 lg:p-16 text-right order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">{title}</h2>
        <p className="text-lightMuted text-lg leading-relaxed mb-6">{text}</p>
        <a
          href={link.href}
          className="inline-block px-6 py-2 bg-gold text-background rounded-lg font-medium hover:bg-goldDark transition-colors duration-300"
        >
          {link.label}
        </a>
      </AnimatedElement>

      {/* Image Column */}
      <AnimatedElement
        animation="zoomIn"
        className={`relative h-[400px] md:h-[600px] lg:h-[700px] order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
            style={imageStyles}
            priority
          />
          <div className="absolute inset-0 mix-blend-multiply" />
        </div>
      </AnimatedElement>
    </m.section>
  );
};

export default HalfPillRow;
