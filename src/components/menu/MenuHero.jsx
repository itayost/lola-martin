import HeroSection from '../shared/HeroSection';

const MenuHero = () => {
  return (
    <HeroSection
      title="תפריט"
      subtitle="חוויה קולינרית של טעמים ים תיכוניים המשלבים מסורת וחדשנות"
      imageSrc="/images/menu/menu-hero.jpg"
      imageAlt="תפריט - לולה מרטין"
      height="h-full"
      minHeight={400}
      overlayColor="bg-background/60"
    />
  );
};

export default MenuHero;