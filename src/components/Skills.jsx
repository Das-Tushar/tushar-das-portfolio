import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Server } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import './Sections.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section-wrapper"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={childVariants} style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2 className="section-title">Skills</h2>
      </motion.div>

      <div className="bento-grid">
        {/* Row 1, Col 1: Core Programming */}
        <motion.div variants={childVariants}>
          <SpotlightCard className="bento-card">
            <h3 className="bento-title"><Code className="bento-icon" /> Core Programming Languages</h3>
            <p className="bento-desc">
              The foundational languages I use for data structures, backend logic, and scripting.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">C++</div>
              <div className="floating-pill">Java</div>
              <div className="floating-pill">JavaScript</div>
              <div className="floating-pill">Python</div>
              <div className="floating-pill">SQL</div>
              <div className="floating-pill">HTML5 & CSS</div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Row 1, Col 2: Cybersecurity */}
        <motion.div variants={childVariants}>
          <SpotlightCard className="bento-card">
            <h3 className="bento-title"><Shield className="bento-icon" /> Cybersecurity & Network</h3>
            <p className="bento-desc">
              Cybersecurity principles and practices for building and maintaining resilient systems.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">Network Security</div>
              <div className="floating-pill">Pen Testing</div>
              <div className="floating-pill">Cryptography</div>
              <div className="floating-pill">OWASP Top 10</div>
              <div className="floating-pill">Secure Coding</div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Row 2, Col 1: IoT & Hardware */}
        <motion.div variants={childVariants}>
          <SpotlightCard className="bento-card">
            <h3 className="bento-title"><Server className="bento-icon" /> IoT & Hardware</h3>
            <p className="bento-desc">
              Building embedded systems and interfacing with hardware for real-world applications.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">Arduino</div>
              <div className="floating-pill">ESP32</div>
              <div className="floating-pill">Raspberry Pi</div>
              <div className="floating-pill">Linux</div>
              <div className="floating-pill">Sensors</div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Row 2, Col 2: Tools & Developer Workflow */}
        <motion.div variants={childVariants}>
          <SpotlightCard className="bento-card">
            <h3 className="bento-title"><Terminal className="bento-icon" /> Tools & Workflow</h3>
            <p className="bento-desc">
              The essential tools and platforms I use to build, test, and deploy applications.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">Git</div>
              <div className="floating-pill">GitHub</div>
              <div className="floating-pill">VS Code</div>
              <div className="floating-pill">Vercel</div>
              <div className="floating-pill">CI/CD Pipelines</div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
