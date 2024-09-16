import React, { useState } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import Content from './Content';
import SideBar from './SideBar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <SideBar isVisible={isSidebarVisible} onClose={toggleSidebar} />
            <div
                className="content-wrapper"
                style={{
                    marginLeft: isSidebarVisible ? '250px' : '0',
                    transition: 'margin-left 0.3s ease-in-out',
                }}
            >
                <Header toggleSidebar={toggleSidebar} />
                <Content>
                    {children}
                </Content>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;