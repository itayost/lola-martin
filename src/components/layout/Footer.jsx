import Link from 'next/link';
import RestaurantInfo, { useRestaurantInfo } from '../shared/RestaurantInfo';

const Footer = () => {
  const info = useRestaurantInfo();
  
  const quickLinks = [
    { href: "/about", label: "אודות" },
    { href: "/menu", label: "תפריט" },
    { href: info.reservations.url, label: "הזמנת שולחן" },
    { href: "/contact", label: "צור קשר" },
    { href: "/privacy", label: "מדיניות פרטיות" }
  ];

  return (
    <footer className="bg-card text-text py-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="bg-stripe-gradient w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent border-b border-border pb-2">
              צור קשר
            </h3>
            <RestaurantInfo type="contact" />
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent border-b border-border pb-2">
              שעות פתיחה
            </h3>
            <RestaurantInfo type="hours" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent border-b border-border pb-2">
              קישורים מהירים
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="
                      text-muted 
                      hover:text-accent 
                      transition-colors 
                      flex items-center 
                      justify-start 
                      group
                    "
                  >
                    <span className="mr-2 group-hover:translate-x-2 transition-transform">
                      {link.label}
                    </span>
                    <span className="
                      w-2 h-2 border-t-2 border-r-2 
                      border-muted group-hover:border-accent 
                      transform rotate-45 
                      opacity-0 group-hover:opacity-100 
                      transition-all
                    "></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social and Copyright Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <RestaurantInfo type="social" className="mb-4 md:mb-0" />

          {/* Copyright */}
          <p className="text-sm text-muted text-center md:text-right">
            © {new Date().getFullYear()}
            <a
              href="https://www.itayost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors mx-1"
            >
              ItayOst
            </a>
            . כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;