
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PageNavigation = ({ pages = [] }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  
  // Find the index of the current page
  const currentIndex = pages.findIndex(page => page.path === currentPath);
  
  // Calculate previous and next page
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  if (!prevPage && !nextPage) return null;

  return (
    <div className="flex justify-between items-center py-6">
      {/* Previous Page */}
      <div className="flex-1 text-right">
        {prevPage && (
          <Link href={prevPage.path}>
            <a className="text-accent hover:text-gold transition-colors flex items-center justify-end">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 rtl:rotate-180"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span>{prevPage.label}</span>
            </a>
          </Link>
        )}
      </div>

      {/* Page Indicators (optional) */}
      <div className="hidden md:flex space-x-2 justify-center flex-1">
        {pages.map((page, index) => (
          <Link key={page.path} href={page.path}>
            <a>
              <span 
                className={`block w-2 h-2 rounded-full transition-colors ${
                  page.path === currentPath 
                    ? 'bg-gold' 
                    : 'bg-border hover:bg-accent'
                }`}
                aria-label={page.label}
              />
            </a>
          </Link>
        ))}
      </div>

      {/* Next Page */}
      <div className="flex-1">
        {nextPage && (
          <Link href={nextPage.path}>
            <a className="text-accent hover:text-gold transition-colors flex items-center">
              <span>{nextPage.label}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 rtl:rotate-180"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;