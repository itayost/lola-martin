import { Sparkles, Phone, Users } from 'lucide-react';
import AnimatedElement from '../shared/AnimatedElement';
import Button from '../ui/Button';

const BoutiqueEvents = () => {
  return (
    <section className="relative bg-card border-t border-b border-gold/20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/20" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <AnimatedElement animation="fadeInUp" className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-gold" />
              <div className="absolute inset-0 blur-xl bg-gold/30 animate-pulse" />
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            חוויית לולה מרטין בבית שלכם
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-lightMuted mb-8 max-w-2xl mx-auto">
            נביא את החוויה הקולינרית המושלמת ישירות אליכם -
            אירועי בוטיק עד 100 איש עם תפריט אישי ושירות מקצועי
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-gold rounded-full mb-2" />
              <span className="text-white/80">תפריט מותאם אישית</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-gold rounded-full mb-2" />
              <span className="text-white/80">הגשה ועריכה מקצועית</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-gold rounded-full mb-2" />
              <span className="text-white/80">שירות VIP</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <p className="text-lg text-white/90 font-medium">
              לפרטים והזמנות
            </p>

            {/* Phone Button */}
            <Button
              href="tel:+972502175277"
              variant="primary"
              size="lg"
              icon={Phone}
              iconPosition="right"
              className="inline-flex items-center gap-3 px-8 py-4"
              animated={true}
            >
              <span className="font-bold text-lg">התקשרו עכשיו</span>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BoutiqueEvents;