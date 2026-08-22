import React from 'react';
import { motion } from 'framer-motion';

const FadeAndReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAndReveal;
