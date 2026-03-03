import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WOLT_URL = 'https://wolt.com/he/isr/tel-aviv/restaurant/lola-martin-herzliya';
const STORAGE_KEY = 'announcement-banner-dismissed';

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  });

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-50 bg-gold-gradient text-black"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col items-center justify-center gap-4 text-center">
            <button
              onClick={handleDismiss}
              className="absolute end-4 top-4 p-1.5 rounded-full hover:bg-black/10 transition-colors"
              aria-label="סגור הודעה"
            >
              <X size={20} />
            </button>
            <span className="text-lg md:text-xl font-bold">
              לאור המצב, החל מיום רביעי 3.3 אנחנו פתוחים למשלוחי סושי בלבד דרך Wolt
            </span>
            <a
              href={WOLT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primaryDark text-white py-2.5 px-6 rounded-lg text-sm md:text-base font-medium hover:bg-background transition-colors"
            >
              להזמנה בוולט
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
