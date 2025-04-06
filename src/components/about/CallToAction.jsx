import { CalendarCheck2, Utensils } from 'lucide-react';
import Button from '../ui/Button';
import { ctaContent } from '../../data/aboutData';

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-background text-white text-center overflow-hidden">
      {/* רקע עם טקסטורה עדינה */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns/waves.svg')] bg-repeat z-0" /> */}

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow">
          {ctaContent.title}
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/90">
          {ctaContent.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            href="/reserve"
          >
            <CalendarCheck2 size={20} />
            הזמן שולחן
          </Button>
          <Button
            href="/menu"
            variant="outline"
          >
            <Utensils size={20} />
            צפה בתפריט
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;