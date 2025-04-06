import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Section from '../ui/Section';
import { teamContent, teamMembers } from '../../data/aboutData';

const TeamSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <Section className="py-20 bg-card text-text">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl font-bold mb-4 text-gold tracking-tight"
        >
          {teamContent.title}
        </motion.h2>
        <motion.div
          variants={fadeIn}
          className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full"
        />
        <motion.p
          variants={fadeIn}
          className="max-w-2xl mx-auto text-lg text-muted"
        >
          {teamContent.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {teamMembers.map((member) => (
<motion.div
  key={member.id}
  variants={fadeIn}
  className="relative group overflow-hidden rounded-2xl border border-border bg-background shadow-subtle hover:shadow-elegant transition-all duration-300"
>
  {/* Image section */}
  <div className="relative h-72 w-full">
    <Image
      src={member.image}
      alt={member.name}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* Content */}
  <div className="p-6 text-right relative z-10 bg-background group-hover:-translate-y-2 transition-all duration-500">
    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
      {member.name}
    </h3>
    <p className="text-gold flex items-center justify-end gap-2 mb-3 font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 fill-gold"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10..." />
      </svg>
      {member.position}
    </p>
    <p className="text-muted text-sm leading-relaxed">
      {member.bio}
    </p>
  </div>
</motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default TeamSection;