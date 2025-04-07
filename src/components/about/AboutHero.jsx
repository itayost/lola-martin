import HeroSection from '../shared/HeroSection';

const AboutHero = () => {
  return (
    <HeroSection
      title="אודות"
      subtitle="הסיפור שלנו והחזון מאחורי לולה מרטין"
      imageSrc="/images/about/restaurant-hero.jpg"
      imageAlt="לולה מרטין - מסעדה"
      height="40vh"
      minHeight={400}
      overlayColor="bg-background/60"
    />
  );
};

export default AboutHero;