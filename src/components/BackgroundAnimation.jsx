import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: '#050508',
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    >
      {/* Aurora Orb 1: Deep Royal Violet - Slow Ambient Drift */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '55vw',
          height: '55vw',
          minWidth: '450px',
          minHeight: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120, 50, 220, 0.28) 0%, rgba(60, 20, 140, 0.12) 50%, transparent 75%)',
          filter: 'blur(160px)',
          opacity: 0.85,
          willChange: 'transform'
        }}
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -35, 35, 0],
          scale: [1, 1.06, 0.95, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Aurora Orb 2: Deep Oceanic Teal / Cyan - Subtle Lower Balance */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2%',
          right: '12%',
          width: '50vw',
          height: '50vw',
          minWidth: '400px',
          minHeight: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 160, 200, 0.22) 0%, rgba(10, 60, 120, 0.08) 50%, transparent 75%)',
          filter: 'blur(170px)',
          opacity: 0.85,
          willChange: 'transform'
        }}
        animate={{
          x: [0, -45, 40, 0],
          y: [0, 40, -35, 0],
          scale: [1, 0.94, 1.06, 1]
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Aurora Orb 3: Soft Lavender / Midnight Glow - Center Diffusion */}
      <motion.div
        style={{
          position: 'absolute',
          top: '38%',
          left: '35%',
          width: '45vw',
          height: '45vw',
          minWidth: '350px',
          minHeight: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180, 130, 255, 0.16) 0%, rgba(120, 80, 200, 0.06) 50%, transparent 75%)',
          filter: 'blur(180px)',
          opacity: 0.8,
          willChange: 'transform'
        }}
        animate={{
          x: [0, 35, -35, 0],
          y: [0, 30, -35, 0],
          scale: [0.96, 1.04, 0.94, 0.96]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Layer 2: Radial Cinematic Vignette - Naturally frames center viewport */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(5, 5, 8, 0.75) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Layer 3: Cinematic Film Noise Texture - Eliminates banding & adds tactile matte grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.04,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
