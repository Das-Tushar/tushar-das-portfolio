import React from 'react';
import { motion } from 'framer-motion';

const MaskWipeReveal = ({ children, zIndex }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{ position: 'sticky', top: 0, height: '100dvh', width: '100%', zIndex, scrollSnapAlign: 'start', backgroundColor: 'transparent' }}
    >
      <motion.div
        variants={{
          hidden: { clipPath: 'circle(0% at 50% 100%)' },
          visible: { clipPath: 'circle(150% at 50% 50%)' }
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: '100%', width: '100%', overflow: 'hidden', willChange: 'clip-path' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MaskWipeReveal;
