// src/components/layout/Content.tsx
import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="flex-grow-1">
      {children}
    </main>
  );
};

export default Content;
