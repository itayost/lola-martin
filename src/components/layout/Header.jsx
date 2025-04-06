import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { useRouter } from 'next/router';
import { useRestaurantInfo } from '../shared/RestaurantInfo';
import MobileMenu from './MobileMenu';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const headerRef = useRef(null);
  const router = useRouter();
  const info = useRestaurantInfo();

  // Navigation items
  const navItems = [
    { href: '/', label: 'בית' },
    { href: '/about', label: 'אודות' },
    { href: '/menu', label: 'תפריט' },
    { href: '/contact', label: 'צור קשר' },
  ];

  // Helper to unlock scroll and close menu
  const resetScrollLock = () => {
    document.body.style.overflow = '';
    setMobileMenuOpen(false);
  };

  // Watch route changes to close mobile menu and unlock scroll
  useEffect(() => {
    setActivePath(router.pathname);
    resetScrollLock(); // ✅ fix: always unlock scroll
  }, [router.pathname]);

  // Handle resize and scroll
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        resetScrollLock(); // ✅ fix: reset on resize
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  const isActive = (path) => {
    if (path === '/') return activePath === path;
    return activePath === path || activePath.startsWith(`${path}/`);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 dir-rtl main-header ${
          isScrolled
            ? 'py-2 bg-primaryDark/95 backdrop-blur-xl shadow-xl rounded-no'
            : 'fixed top-5 left-5 right-5 py-4 bg-primaryDark/95 backdrop-blur-xl shadow-xl rounded-full'
        }`}
        animate={{
          backgroundColor: isScrolled ? 'rgba(3, 52, 95, 0.95)' : 'rgba(3, 52, 95, 0.5)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <div className="container mx-auto px-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-between h-12">
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              className="flex-shrink-0 ml-8 h-full flex items-center"
            >
              <Link href="/" className="block relative w-40 h-full">
                <Image
                  src="/images/icons/LolaMartinLogo.svg"
                  alt={`${info.name} לוגו`}
                  layout="fill"
                  objectFit="contain"
                  className="invert brightness-110"
                  priority
                />
              </Link>
            </motion.div>

            <nav className="flex flex-1 justify-center h-full">
              <ul className="flex items-center h-full">
                {navItems.map((item) => (
                  <li key={item.href} className="mx-5 h-full flex items-center">
                    <Link
                      href={item.href}
                      className={`relative py-2 font-medium text-base h-full flex items-center transition-colors duration-300 group ${
                        isActive(item.href) ? 'text-accent' : 'text-white hover:text-accent'
                      }`}
                    >
                      {item.label}
                      <motion.span
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                          scaleX: isActive(item.href) ? 1 : 0,
                          opacity: isActive(item.href) ? 1 : 0,
                        }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                      />
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href={info.reservations.url}
                variant="primary"
                size="sm"
                className="shadow-lg hover:shadow-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                הזמן שולחן
              </Button>
            </motion.div>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center justify-between h-10">
            <motion.div animate={{ scale: isScrolled ? 0.9 : 1 }} className="h-full flex items-center">
              <Link href="/" className="block relative w-32 h-full">
                <Image
                  src="/images/icons/LolaMartinLogo.svg"
                  alt={`${info.name} לוגו`}
                  layout="fill"
                  objectFit="contain"
                  className="invert brightness-110"
                  priority
                />
              </Link>
            </motion.div>

            <motion.button
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full focus:outline-none transition-colors duration-300 h-10 w-10 flex items-center justify-center ${
                mobileMenuOpen ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: mobileMenuOpen ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: mobileMenuOpen ? 45 : -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={resetScrollLock} />
      </>
  );
};

export default Header;