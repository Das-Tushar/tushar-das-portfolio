import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SocialIcons from './SocialIcons';
import CVSummaryModal from './CVSummaryModal';
import './Hero.css';

const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

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
    <>
      <section id="home" className="hero">
        <motion.div 
          className="hero-background-glow"
          style={{ scale: bgScale, y: bgY }}
        />
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="greeting" variants={itemVariants}>
            Hi, I'm <span className="highlight-name">Tushar Das</span>
          </motion.h1>
          <motion.h2 className="title" variants={itemVariants}>
            B.Tech CSE Student | Cybersecurity Enthusiast
          </motion.h2>
          <motion.p className="description" variants={itemVariants}>
            I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.
          </motion.p>
          
          <motion.div className="btn-container" variants={itemVariants}>
            <motion.button 
              type="button"
              onClick={() => setIsCVModalOpen(true)}
              className="btn-cv"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View & Download CV
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="icons-container">
            <SocialIcons />
          </motion.div>
        </motion.div>
        <div className="hero-image-container">
          <div className="glow-backdrop"></div>
          <motion.img 
            src="/pfp.png" 
            alt="Profile Portrait" 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
              scale: { duration: 0.8, delay: 0.4, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>
      </section>

      {/* Interactive CV Summary Popup Modal */}
      <CVSummaryModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
};

export default Hero;
