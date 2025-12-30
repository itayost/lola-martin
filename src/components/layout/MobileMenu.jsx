import React from 'react';
import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import { X, Home, Info, BookOpen, MessageCircle, Calendar, Phone, MapPin } from 'lucide-react';
import { useRestaurantInfo } from '../shared/RestaurantInfo';

const MobileMenu = ({ isOpen, onClose }) => {
  const info = useRestaurantInfo();
  const menuItems = [
    { href: '/', label: 'בית', icon: Home, delay: 0.1 },
    { href: '/about', label: 'אודות', icon: Info, delay: 0.2 },
    { href: '/menu', label: 'תפריט', icon: BookOpen, delay: 0.3 },
    { href: '/contact', label: 'צור קשר', icon: MessageCircle, delay: 0.4 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]" 
            onClick={onClose}
          ></m.div>
          
          <m.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-card shadow-elegant rounded-l-xl overflow-auto z-[80] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="text-xl font-bold text-gold">לולה מרטין</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-border/30 transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="p-6 flex-1">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={onClose} 
                      className="flex items-center py-3 px-4 text-white hover:text-gold hover:bg-primaryDark/50 rounded-lg transition-colors"
                    >
                      <item.icon className="ml-3 h-5 w-5 text-gold" />
                      {item.label}
                    </Link>
                  </m.li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-auto p-6 bg-primaryDark/30 border-t border-border">
              <div className="space-y-5 mb-6">
                <div className="flex items-center text-muted">
                  <Phone className="h-5 w-5 ml-3 text-gold" />
                  <a href="tel:09-7614242" className="hover:text-gold transition-colors">
                    09-7614242
                  </a>
                </div>
                
                <div className="flex items-center text-muted">
                  <MapPin className="h-5 w-5 ml-3 text-gold" />
                  <p>רחוב אבא אבן 10, הרצליה פיתוח</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <a
                  href={info.reservations.url}
                  className="flex items-center justify-center w-full py-3 px-4 bg-gold text-black rounded-lg font-medium hover:bg-goldDark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <Calendar className="ml-2 h-5 w-5" />
                  הזמן שולחן
                </a>
                <a
                  href={info.giftCard.url}
                  className="flex items-center justify-center w-full py-3 px-4 border border-gold text-gold rounded-lg font-medium hover:bg-gold hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  גיפט קארד
                </a>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;