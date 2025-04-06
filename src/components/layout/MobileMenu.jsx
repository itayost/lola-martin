import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  X, 
  Home, 
  Info, 
  BookOpen, 
  Calendar, 
  MessageCircle
} from 'lucide-react';
import { useRestaurantInfo } from '../shared/RestaurantInfo';
import RestaurantInfo from '../shared/RestaurantInfo';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const info = useRestaurantInfo();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Add scroll listener to track page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const backdropVariants = {
    hidden: { 
      opacity: 0,
      pointerEvents: 'none'
    },
    visible: { 
      opacity: 1,
      pointerEvents: 'auto',
      transition: { duration: 0.3 } 
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20
      }
    }
  };

  const menuItems = [
    { 
      path: '/', 
      label: 'בית', 
      icon: Home 
    },
    { 
      path: '/about', 
      label: 'אודות', 
      icon: Info 
    },
    { 
      path: '/menu', 
      label: 'תפריט', 
      icon: BookOpen 
    },
    { 
      path: info.reservations.url, 
      label: 'הזמנת שולחן', 
      icon: Calendar,
      external: true 
    },
    { 
      path: '/contact', 
      label: 'צור קשר', 
      icon: MessageCircle 
    }
  ];
  
  // Handle outside click to close
  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop itself, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop - dark overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] overflow-hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleBackdropClick}
          />
          
          {/* Menu panel */}
          <motion.aside
            className={`
              fixed inset-y-0 right-0 w-4/5 max-w-sm z-[80] 
              shadow-elegant flex flex-col 
              transition-all duration-300 
              bg-card text-text
              rounded-l-3xl
              overflow-hidden
            `}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Header */}
            <div className="
              px-6 py-4 
              flex justify-between items-center 
              border-b border-border
            ">
              <span className="text-2xl font-bold text-accent">{info.name}</span>
              <motion.button 
                onClick={onClose}
                className="
                  p-2 
                  text-muted hover:text-accent 
                  focus:outline-none 
                  rounded-full 
                  hover:bg-border 
                  transition-colors
                "
                whileTap={{ scale: 0.9 }}
                aria-label="סגור תפריט"
              >
                <X size={24} strokeWidth={2} />
              </motion.button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 py-4 px-2 overflow-y-auto">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <motion.li 
                    key={item.path} 
                    variants={itemVariants}
                    className="px-2"
                  >
                    {item.external ? (
                      <a
                        href={item.path}
                        className="
                          flex items-center 
                          text-xl py-3 px-4 
                          font-medium text-text 
                          hover:text-accent 
                          hover:bg-border 
                          rounded-xl 
                          transition-all
                          group
                        "
                        onClick={onClose}
                        target="_blank"
                        rel="noopener noreferrer"
                      >