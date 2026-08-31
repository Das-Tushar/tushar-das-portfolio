import React, { useCallback } from 'react';

const SpotlightCard = ({ children, className = '', style = {}, ...props }) => {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    // Reset CSS vars on leave to prevent stale glow position
    e.currentTarget.style.removeProperty('--mouse-x');
    e.currentTarget.style.removeProperty('--mouse-y');
  }, []);

  return (
    <div
      className={`spotlight-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        ...style
      }}
      {...props}
    >
      {/* Proximity Spotlight Glow Layer */}
      <div
        className="spotlight-glow"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          zIndex: 1
        }}
        aria-hidden="true"
      />
      
      {/* Card Content */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
