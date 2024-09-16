// src/components/layout/Layout.tsx
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
