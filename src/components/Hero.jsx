import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="greeting" variants={itemVariants}>Hi, I am</motion.p>
        <motion.h1 className="name" variants={itemVariants}>Tushar Das</motion.h1>
        <motion.p className="title" variants={itemVariants}>B.Tech CSE Student / Full-Stack Developer</motion.p>
        <motion.div variants={itemVariants} className="icons-container">
          <SocialIcons />
        </motion.div>
      </motion.div>
      <div className="hero-image-container">
        <motion.img 
          src="/hero-image.png" 
          alt="Tushar Das" 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default Hero;
