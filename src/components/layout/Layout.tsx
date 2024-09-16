// src/components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import {Footer} from './Footer';
import Content from './Content';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;
