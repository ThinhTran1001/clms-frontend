import React from 'react';

interface SideBarProps {
    isVisible: boolean;
    onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isVisible, onClose }) => {
    return (
        <div
            className={`sidebar ${isVisible ? 'visible' : ''}`}
            style={{
                width: isVisible ? '250px' : '0',
                height: '100%',
                position: 'fixed',
                top: '0',
                left: '0',
                backgroundColor: '#B5CFB7',
                overflowX: 'hidden',
                transition: '0.5s',
                padding: isVisible ? '10px' : '0',
            }}
        >
        </div>
    );
};

export default SideBar;