// src/components/contact/ContactQuickLinks.jsx
import { Calendar, Phone, MapPin, Utensils } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ContactQuickLinks = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const quickLinks = [
    {
      icon: Phone,
      label: 'התקשר אלינו',
      description: 'צוות השירות שלנו זמין לענות על שאלות',
      action: {
        text: 'התקשר עכשיו',
        href: 'tel:09-7614242',
      },
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20',
      borderColor: 'border-primary/20'
    },
    {
      icon: Utensils,
      label: 'הזמן שולחן',
      description: 'הבטח את מקומך במסעדה',
      action: {
        text: 'הזמן עכשיו',
        href: 'https://ontopo.com/he/il/page/24219808',
        isExternal: true
      },
      color: 'text-gold',
      bgColor: 'bg-gold/10',
      hoverColor: 'hover:bg-gold/20',
      borderColor: 'border-gold/20'
    },
    {
      icon: Calendar,
      label: 'אירועים פרטיים',
      description: 'חגיגות, כנסים או אירועים עסקיים',
      action: {
        text: 'בקש פרטים',
        href: '/events',
      },
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      hoverColor: 'hover:bg-accent/20',
      borderColor: 'border-accent/20'
    },
    {
      icon: MapPin,
      label: 'מיקום',
      description: 'הגעה נוחה ממרכז הרצליה פיתוח',
      action: {
        text: 'הוראות הגעה',
        href: 'https://maps.app.goo.gl/zpjgV2Wunb6fZM13A',
        isExternal: true
      },
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20',
      borderColor: 'border-primary/20'
    }
  ];

  // Card content component 
  const CardContent = ({ link }) => (
    <>
      <div className={`${link.color} mb-3 rounded-full p-2 inline-block ${link.bgColor} bg-opacity-50 transition-transform duration-300 group-hover:scale-110`}>
        <link.icon className="h-6 w-6" aria-hidden="true" />
      </div>
      
      <h3 className="font-semibold text-base mb-2 text-text">{link.label}</h3>
      <p className="text-muted text-sm mb-3 line-clamp-2">{link.description}</p>
      
      <div className={`${link.color} font-medium flex items-center transition-colors text-sm absolute bottom-4`}>
        <span className="group-hover:underline">{link.action.text}</span>
        {link.action.isExternal ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </>
  );

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <section className="py-6" aria-labelledby="quick-links-heading">
        <h2 id="quick-links-heading" className="text-xl font-bold mb-5 border-r-4 border-gold pr-4 flex items-center text-text">
          קישורים מהירים
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => {
            // Common class names for both link types
            const cardClasses = `block rounded-lg p-4 ${link.bgColor} hover:${link.hoverColor.replace('hover:', '')} transition-all duration-300 border ${link.borderColor} shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer group relative`;
            
            return link.action.isExternal ? (
              // External link (regular anchor)
              <a 
                key={index}
                href={link.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
                aria-label={`${link.action.text} - ${link.label}`}
              >
                <CardContent link={link} />
              </a>
            ) : (
              // Internal link (Next.js Link)
              <Link
                key={index}
                href={link.action.href}
                className={cardClasses}
                aria-label={`${link.action.text} - ${link.label}`}
              >
                <CardContent link={link} />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-6" aria-labelledby="location-map-heading">
        <h2 id="location-map-heading" className="text-xl font-bold mb-5 border-r-4 border-gold pr-4 flex items-center text-text">
          המיקום שלנו
        </h2>
        
        <div className="rounded-lg overflow-hidden border border-border shadow-md transition-transform duration-500 hover:scale-[1.02]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.5856247977687!2d34.8438!3d32.1660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEwJzIxLjYiTiAzNMKwNTAnMzguMSJF!5e0!3m2!1sen!2sil!4v1712421516118!5m2!1sen!2sil" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="מפת מיקום המסעדה"
            aria-label="מפת גוגל המציגה את מיקום המסעדה"
          ></iframe>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-primary">כתובת</h3>
            <p className="text-sm text-muted">רחוב אבא אבן 10, הרצליה פיתוח, 4672521</p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-primary">שעות פעילות</h3>
            <p className="text-sm text-muted">ראשון-חמישי: 12:00-23:00</p>
            <p className="text-sm text-muted">שישי-שבת: 12:00-00:00</p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-primary">חניה</h3>
            <p className="text-sm text-muted">חניון ציבורי זמין בבניין וחניה ברחוב ללא תשלום</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactQuickLinks;