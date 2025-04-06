// src/components/menu/MenuDownload.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown, Mail } from 'lucide-react';
import Button from '../ui/Button';

const MenuDownload = ({ activeTab }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Handle PDF download
  const downloadMenuPDF = () => {
    // In a real implementation, this would download a PDF
    // For now, we'll just alert
    alert(`הורדת קובץ תפריט ${getMenuName(activeTab)} תתאפשר בעתיד`);
  };

  // Get menu name for display
  const getMenuName = (tab) => {
    const menuNames = {
      'lunch': 'צהריים',
      'dinner': 'ערב',
      'sushi': 'סושי'
    };
    return menuNames[tab] || '';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="text-center mt-12 py-8 border-t border-border"
    >
      <h3 className="text-xl font-bold mb-4">הורדת התפריט</h3>
      <p className="text-muted mb-6 max-w-lg mx-auto">
        ניתן להוריד את התפריט המלא בפורמט PDF, או לקבל אותו בדואר אלקטרוני
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          onClick={downloadMenuPDF}
          className="inline-flex items-center"
        >
          <FileDown className="mr-2 h-5 w-5" />
          הורד תפריט {getMenuName(activeTab)} (PDF)
        </Button>
        
        <Button
          href="mailto:info@lolamartin.co.il?subject=בקשת%20תפריט"
          variant="outline"
          className="inline-flex items-center"
        >
          <Mail className="mr-2 h-5 w-5" />
          קבל תפריט במייל
        </Button>
      </div>
    </motion.div>
  );
};

export default MenuDownload;