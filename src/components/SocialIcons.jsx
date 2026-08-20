import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import './SocialIcons.css';

const SocialIcons = () => {
  const floatVariant = (delay) => ({
    animate: {
      y: [0, -8, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  return (
    <div className="social-icons">
      <motion.a 
        href="#"
        className="social-icon"
        variants={floatVariant(0)}
        animate="animate"
        whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
      >
        <Mail size={22} strokeWidth={2.5} />
      </motion.a>
      <motion.a 
        href="#"
        className="social-icon"
        variants={floatVariant(0.4)}
        animate="animate"
        whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
      >
        <Github size={22} strokeWidth={2.5} />
      </motion.a>
      <motion.a 
        href="#"
        className="social-icon"
        variants={floatVariant(0.8)}
        animate="animate"
        whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
      >
        <Linkedin size={22} strokeWidth={2.5} />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
