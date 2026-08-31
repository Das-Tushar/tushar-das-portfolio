import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="section-wrapper"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={childVariants} style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2 className="section-title">About Me</h2>
      </motion.div>
      <div className="about-grid">
        {/* Left Column */}
        <div className="about-left">
          <div className="about-narrative">
            <motion.div variants={childVariants}>
              <p className="narrative-paragraph">
                I am a Lead Frontend Engineer and B.Tech CSE student at LPU (Class of 2029), driven by a passion for building exceptional digital experiences. My core focus lies in crafting scalable full-stack web applications and actively practicing Data Structures and Algorithms in C++. Beyond the browser, I am deeply exploring the realms of cybersecurity and AI tools to build resilient, forward-thinking solutions. I am also a strong advocate for open-source resources, constantly seeking to collaborate on community-driven platforms.
              </p>
            </motion.div>

            <motion.div variants={childVariants}>
              <p className="narrative-paragraph" style={{ marginTop: '1.5rem' }}>
                I believe that software should be robust, secure, and effortlessly intuitive. When I am not designing user interfaces or optimizing backend logic, you can find me tinkering with hardware, analyzing algorithms, and pushing the boundaries of what is possible on the web.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <div className="education-timeline" style={{ width: '100%' }}>
            <motion.div variants={childVariants}>
              <div className="edu-card">
                <h4 className="edu-title">Lovely Professional University (LPU)</h4>
                <p className="edu-subtitle">B.Tech CSE | Graduating 2029</p>
                <div className="edu-highlight">Current CGPA: 8.51</div>
              </div>
            </motion.div>
            <motion.div variants={childVariants}>
              <div className="edu-card">
                <h4 className="edu-title">Xavier School Gamharia</h4>
                <p className="edu-subtitle">12th Grade (ICSE)</p>
                <div className="edu-highlight">84.2%</div>
              </div>
            </motion.div>
            <motion.div variants={childVariants}>
              <div className="edu-card">
                <h4 className="edu-title">Xavier School Gamharia</h4>
                <p className="edu-subtitle">10th Grade (ICSE)</p>
                <div className="edu-highlight">86.4%</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;