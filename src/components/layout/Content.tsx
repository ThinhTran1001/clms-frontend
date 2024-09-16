// src/components/layout/Content.tsx
import React from 'react';

interface ContentProps {
    children: React.ReactNode,
    style?: { transition: string; marginLeft: string }
}

const Content: React.FC<ContentProps> = ({children, style}) => {
    return (
        <main className="flex-grow-1">
            {children}
        </main>
    );
};

export default Content;
