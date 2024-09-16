import React from 'react';

interface SideBarProps {
    isVisible: boolean;
    onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isVisible, onClose }) => {
    const sidebarStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: isVisible ? '250px' : '0',
        height: '100%',
        backgroundColor: '#E7E8D8',
        overflowX: 'hidden',
        transition: '0.3s',
        paddingTop: '60px',
    };

    const linkStyle: React.CSSProperties = {
        padding: '8px 8px 8px 32px',
        textDecoration: 'none',
        fontSize: '25px',
        color: '#818181',
        display: 'block',
        transition: '0.3s',
    };

    return (
        <div style={sidebarStyle}>
            <a href="#" onClick={onClose} style={{color: 'white', padding: '10px', fontSize: '36px'}}>
                &times;
            </a>
            <a href="#" style={linkStyle}>Home</a>
            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Services</a>
            <a href="#" style={linkStyle}>Contact</a>
        </div>
    );
};

export default SideBar;