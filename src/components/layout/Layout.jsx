// src/components/layout/Layout.jsx
import { ContactPageProvider } from '../../context/ContactPageContext';
import { RestaurantInfoProvider } from '../shared/RestaurantInfo';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <RestaurantInfoProvider>
      <ContactPageProvider>
        <div className="flex flex-col min-h-screen bg-background text-text">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </ContactPageProvider>
    </RestaurantInfoProvider>
  );
};

export default Layout;