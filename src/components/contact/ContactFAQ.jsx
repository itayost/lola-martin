// src/components/contact/ContactFAQ.jsx
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "האם יש צורך בהזמנת מקום מראש?",
      answer: "מומלץ להזמין מקום מראש, במיוחד בסופי שבוע ובשעות העומס. ניתן להזמין דרך האתר שלנו או בטלפון 09-7614242."
    },
    {
      question: "האם ניתן לערוך אירועים פרטיים במסעדה?",
      answer: "בהחלט! אנו מציעים אפשרויות לאירועים פרטיים כגון ימי הולדת, אירועים עסקיים, וחגיגות משפחתיות. צרו איתנו קשר לקבלת פרטים נוספים ותיאום."
    },
    {
      question: "האם יש אפשרות למנות טבעוניות או ללא גלוטן?",
      answer: "כן, בתפריט שלנו יש מגוון מנות המתאימות לטבעונים וצמחונים, וכן מנות ללא גלוטן. נא לציין את הדרישות התזונתיות שלכם בעת ההזמנה."
    },
    {
      question: "האם יש חניה באזור המסעדה?",
      answer: "כן, ישנו חניון ציבורי בסמוך למסעדה. בנוסף, בשעות הערב ובסופי שבוע ניתן למצוא חניה ברחובות הסמוכים."
    },
    {
      question: "האם אתם מציעים משלוחים או איסוף עצמי?",
      answer: "אנחנו עובדים עם שירותי משלוחים כמו תן-ביס. כמו כן, ניתן להזמין טלפונית ולאסוף את ההזמנה ישירות מהמסעדה."
    }
  ];

  return (
    <>
      <div className="flex items-center mb-6 border-r-4 border-gold pr-4">
        <HelpCircle className="h-6 w-6 text-gold ml-3" />
        <h2 className="text-xl font-bold text-white">שאלות נפוצות</h2>
      </div>
      
      <div className="divide-y divide-border">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3">
            <button
              className="w-full text-right flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-gold transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
              />
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="py-3 pr-6 text-muted">
                    {faq.answer}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactFAQ;