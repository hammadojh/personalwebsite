import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="container mx-auto px-4 py-8 flex-grow max-w-[1000px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
