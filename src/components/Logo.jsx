import React from 'react';

const Logo = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Fallback SVG in case image fails to load
  const renderFallbackLogo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M 10 80 L 10 20 L 30 50 L 50 20 L 70 50 L 90 20 L 90 80"
        fill="none"
        stroke="#0A1F44"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 20 70 L 35 40 L 50 70 L 65 40 L 80 70"
        fill="none"
        stroke="#16A34A"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={`relative ${sizeClasses[size] || sizeClasses.md}`}>
      <img 
        src="/logo.png" 
        alt="MW265 Logo" 
        className={`${sizeClasses[size] || sizeClasses.md} object-contain`}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'block';
        }}
      />
      <div style={{ display: 'none' }}>
        {renderFallbackLogo()}
      </div>
    </div>
  );
};

export default Logo;