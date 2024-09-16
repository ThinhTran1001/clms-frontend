import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
  }

const Button: React.FC<ButtonProps> = ({children}) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#B5CFB7",
    }
  return <button className="btn" style={buttonStyle}>{ children }</button>;
};

export default Button;