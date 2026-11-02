import React from 'react';

const Logo = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  const height = sizeClasses[size] || sizeClasses.md;

  // Fallback SVG in case image fails to load
  const renderFallbackLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full aspect-square" role="img" aria-label="SpenFel Digital Systems">
      <circle cx="50" cy="50" r="48" fill="#0A1F44" />
      <path
        d="M 68 34 C 64 28 57 25 50 25 C 40 25 33 31 33 39 C 33 48 42 50 51 52 C 60 54 67 57 67 66 C 67 74 59 79 49 79 C 41 79 34 76 30 70"
        fill="none"
        stroke="#16A34A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 62 52 L 78 52 M 70 44 L 78 52 L 70 60"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={`relative shrink-0 ${height}`}>
      <img 
        src="/logo.png" 
        alt="SpenFel Digital Systems logo" 
        className={`${height} w-auto rounded-lg object-contain`}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'block';
        }}
      />
      <div style={{ display: 'none' }} className="h-full">
        {renderFallbackLogo()}
      </div>
    </div>
  );
};

export default Logo;
