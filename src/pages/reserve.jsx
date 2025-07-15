// src/pages/reserve.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageMeta from '../components/meta/PageMeta';
import AnimatedElement from '../components/shared/AnimatedElement';
import Button from '../components/ui/Button';
import { Calendar, Clock, Users, ExternalLink } from 'lucide-react';
import { useRestaurantInfo } from '../components/shared/RestaurantInfo';

const ReservePage = () => {
  const router = useRouter();
  const info = useRestaurantInfo();

  // Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(info.reservations.url, '_blank');
    }, 5000);

    return () => clearTimeout(timer);
  }, [info.reservations.url]);

  return (
    <>
      <PageMeta
        pageName="reserve"
        customMeta={{
          title: 'הזמנת שולחן - לולה מרטין',
          description: 'הזמינו שולחן במסעדת לולה מרטין דרך מערכת ההזמנות שלנו',
        }}
      />

      <main className="bg-background text-text min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedElement animation="fadeInUp">
              <Calendar className="w-20 h-20 text-gold mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">הזמנת שולחן</h1>
              <p className="text-xl text-muted mb-8">אנחנו שמחים שבחרתם לחגוג איתנו!</p>
            </AnimatedElement>

            <AnimatedElement animation="fadeInUp" delay={0.2}>
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h2 className="text-2xl font-bold mb-6">למה להזמין מראש?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
                  <div className="flex flex-col items-center">
                    <Users className="w-12 h-12 text-accent mb-3" />
                    <h3 className="font-bold mb-2">מקום מובטח</h3>
                    <p className="text-sm text-muted">הבטיחו את מקומכם במסעדה בזמן המועדף עליכם</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-12 h-12 text-accent mb-3" />
                    <h3 className="font-bold mb-2">ללא המתנה</h3>
                    <p className="text-sm text-muted">היכנסו ישר לשולחן שלכם ללא זמני המתנה</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="w-12 h-12 text-accent mb-3" />
                    <h3 className="font-bold mb-2">גמישות מלאה</h3>
                    <p className="text-sm text-muted">שנו או בטלו את ההזמנה בקלות דרך המערכת</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeInUp" delay={0.4}>
              <div className="bg-primaryDark/20 p-6 rounded-lg border border-accent/20 mb-8">
                <p className="text-lg mb-4">
                  מערכת ההזמנות שלנו מופעלת על ידי {info.reservations.platform}
                </p>
                <p className="text-muted mb-6">
                  אתם תועברו למערכת ההזמנות החיצונית בעוד מספר שניות...
                </p>

                <Button
                  href={info.reservations.url}
                  size="lg"
                  icon={ExternalLink}
                  iconPosition="left"
                  className="mx-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  המשך להזמנת שולחן
                </Button>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeInUp" delay={0.6}>
              <div className="text-muted">
                <p className="mb-2">שעות פעילות:</p>
                <p className="text-sm">{info.hours.display.weekdays}</p>
                <p className="text-sm">{info.hours.display.friday}</p>
                <p className="text-sm">{info.hours.display.saturday}</p>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm">נתקלתם בבעיה? צרו איתנו קשר:</p>
                  <p className="text-gold mt-2">
                    <a href={`tel:${info.contact.phone}`} className="hover:underline">
                      {info.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReservePage;
