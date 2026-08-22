import React from 'react';
import { Terminal, Shield, Code, Server } from 'lucide-react';
import FadeAndReveal from './FadeAndReveal';
import './Sections.css';

const Skills = () => {
  return (
    <section id="skills" className="section-wrapper sticky-section sticky-layer">
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2 className="section-title">Skills</h2>
      </div>
      
      <div className="bento-grid">
        {/* Row 1, Col 1: Core Programming */}
        <FadeAndReveal>
          <div className="bento-card">
            <h3 className="bento-title"><Code className="bento-icon" /> Core Programming Languages</h3>
            <p style={{ color: 'var(--color-dark-grey)', marginBottom: '1.5rem' }}>
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
          </div>
        </FadeAndReveal>
        
        {/* Row 1, Col 2: Cybersecurity */}
        <FadeAndReveal>
          <div className="bento-card">
            <h3 className="bento-title"><Shield className="bento-icon" /> Cybersecurity & Network</h3>
            <p style={{ color: 'var(--color-dark-grey)', marginBottom: '1.5rem' }}>
              Cybersecurity principles and practices for building and maintaining resilient systems.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">Network Security</div>
              <div className="floating-pill">Pen Testing</div>
              <div className="floating-pill">Cryptography</div>
              <div className="floating-pill">OWASP Top 10</div>
              <div className="floating-pill">Secure Coding</div>
            </div>
          </div>
        </FadeAndReveal>
        
        {/* Row 2, Col 1: IoT & Hardware */}
        <FadeAndReveal>
          <div className="bento-card">
            <h3 className="bento-title"><Server className="bento-icon" /> IoT & Hardware</h3>
            <p style={{ color: 'var(--color-dark-grey)', marginBottom: '1.5rem' }}>
              Building embedded systems and interfacing with hardware for real-world applications.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">Arduino</div>
              <div className="floating-pill">ESP32</div>
              <div className="floating-pill">Raspberry Pi</div>
              <div className="floating-pill">Linux</div>
              <div className="floating-pill">Sensors</div>
            </div>
          </div>
        </FadeAndReveal>

        {/* Row 2, Col 2: Tools & Developer Workflow */}
        <FadeAndReveal>
          <div className="bento-card">
            <h3 className="bento-title"><Terminal className="bento-icon" /> Tools & Workflow</h3>
            <p style={{ color: 'var(--color-dark-grey)', marginBottom: '1.5rem' }}>
              The essential tools and platforms I use to build, test, and deploy applications.
            </p>
            <div className="floating-icons">
              <div className="floating-pill">Git</div>
              <div className="floating-pill">GitHub</div>
              <div className="floating-pill">VS Code</div>
              <div className="floating-pill">Vercel</div>
              <div className="floating-pill">CI/CD Pipelines</div>
            </div>
          </div>
        </FadeAndReveal>
      </div>
    </section>
  );
};

export default Skills;
