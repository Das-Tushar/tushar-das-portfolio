import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Mail, Phone, GraduationCap, Briefcase, Code, Award, ExternalLink, Cpu } from 'lucide-react';
import './CVSummaryModal.css';

const CVSummaryModal = ({ isOpen, onClose }) => {
  // Handle ESC key press and scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="cv-modal-backdrop"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <motion.div
            className="cv-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 25 }}
            transition={{ type: 'spring', damping: 26, stiffness: 360 }}
          >
            {/* Modal Header Bar */}
            <div className="cv-modal-header">
              <div className="cv-modal-title-wrap">
                <h2 id="cv-modal-title" className="cv-header-name">Tushar Das</h2>
              </div>
              
              {/* Top-Right Action Controls */}
              <div className="cv-modal-actions">
                <motion.a
                  href="/Tushar_Das_CV.pdf"
                  download="Tushar_Das_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-action-btn cv-btn-download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Download full PDF CV"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </motion.a>

                <motion.button
                  type="button"
                  onClick={onClose}
                  className="cv-action-btn cv-btn-close"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="cv-modal-body">
              {/* Contact / Links Banner */}
              <div className="cv-contact-banner">
                <a href="mailto:tushardas4696@gmail.com" className="cv-contact-chip">
                  <Mail size={14} />
                  <span>tushardas4696@gmail.com</span>
                </a>
                <a href="tel:7480074696" className="cv-contact-chip">
                  <Phone size={14} />
                  <span>+91 7480074696</span>
                </a>
                <a href="https://github.com/Das-Tushar" target="_blank" rel="noopener noreferrer" className="cv-contact-chip">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>github.com/Das-Tushar</span>
                </a>
                <a href="https://linkedin.com/in/tushar-das-834227380" target="_blank" rel="noopener noreferrer" className="cv-contact-chip">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                  </svg>
                  <span>linkedin.com/in/tushar-das</span>
                </a>
              </div>

              {/* Skills Summary Section */}
              <div className="cv-section">
                <div className="cv-section-heading">
                  <Code size={18} className="cv-icon-accent" />
                  <h3>Skills Summary</h3>
                </div>
                <div className="cv-skills-grid">
                  <div className="cv-skill-item">
                    <span className="cv-skill-label">Languages:</span>
                    <div className="cv-pills">
                      {['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'].map(skill => (
                        <span key={skill} className="cv-pill">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cv-skill-item">
                    <span className="cv-skill-label">Tools / Platforms:</span>
                    <div className="cv-pills">
                      {['VS Code', 'Git', 'GitHub', 'Vercel'].map(skill => (
                        <span key={skill} className="cv-pill">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cv-skill-item">
                    <span className="cv-skill-label">Backend / Databases:</span>
                    <div className="cv-pills">
                      {['MySQL', 'PostgreSQL'].map(skill => (
                        <span key={skill} className="cv-pill">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cv-skill-item">
                    <span className="cv-skill-label">Soft Skills:</span>
                    <div className="cv-pills">
                      {['Team Collaboration', 'Problem-Solving', 'Adaptability', 'Communication', 'Critical Thinking', 'Leadership'].map(skill => (
                        <span key={skill} className="cv-pill cv-pill-soft">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="cv-section">
                <div className="cv-section-heading">
                  <Briefcase size={18} className="cv-icon-accent" />
                  <h3>Featured Projects</h3>
                </div>

                <div className="cv-card">
                  <div className="cv-card-header">
                    <div>
                      <h4 className="cv-item-title">CS Nexus</h4>
                      <span className="cv-item-tech">React | Git | GitHub | Vercel</span>
                    </div>
                    <div className="cv-card-meta">
                      <span className="cv-date">Jan 2026 - Feb 2026</span>
                      <a href="https://cs-nexus.vercel.app" target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                        <ExternalLink size={13} /> Live
                      </a>
                    </div>
                  </div>
                  <ul className="cv-bullets">
                    <li>Engineered an interactive, open-source learning platform for computer science utilizing React, establishing a community-driven knowledge repository for accessible education.</li>
                    <li>Designed a modular and responsive frontend architecture with optimized component rendering, enhancing codebase maintainability and ensuring seamless user navigation across complex technical content.</li>
                    <li>Implemented a continuous deployment pipeline integrating Git, GitHub, and Vercel, enabling automated live builds, rapid iteration, and high availability for end-users.</li>
                  </ul>
                </div>

                <div className="cv-card">
                  <div className="cv-card-header">
                    <div>
                      <h4 className="cv-item-title">A decentralized interconnected solar home system</h4>
                      <span className="cv-item-tech">Arduino | Sensors | Microcontrollers</span>
                    </div>
                    <div className="cv-card-meta">
                      <span className="cv-date">Sep 2025 - Dec 2025</span>
                      <a href="https://drive.google.com/file/d/1ZUeQabeTF5Qc2lIwsOz6OjwdtdCyoStX/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                        <ExternalLink size={13} /> Resources
                      </a>
                    </div>
                  </div>
                  <ul className="cv-bullets">
                    <li>Engineered a decentralized solar grid using Arduino and sensors for localized, off-grid energy distribution.</li>
                    <li>Designed a responsive microcontroller architecture to optimize sensor data processing and power management.</li>
                    <li>Implemented an automated monitoring loop for real-time voltage adjustments and rapid fault detection.</li>
                  </ul>
                </div>
              </div>

              {/* Training Section */}
              <div className="cv-section">
                <div className="cv-section-heading">
                  <Cpu size={18} className="cv-icon-accent" />
                  <h3>Training & Certifications</h3>
                </div>

                <div className="cv-card">
                  <div className="cv-card-header">
                    <div>
                      <h4 className="cv-item-title">Computer Programming in C — iamneo</h4>
                      <span className="cv-item-tech">C Programming & Problem Solving</span>
                    </div>
                    <span className="cv-date">Jan 2025 - May 2025</span>
                  </div>
                  <ul className="cv-bullets">
                    <li>Developed core proficiency in procedural programming, algorithmic problem solving, memory management, and structured software design in C.</li>
                  </ul>
                </div>

                {/* Additional Certificates */}
                <div className="cv-cert-grid">
                  <div className="cv-cert-chip">
                    <Award size={16} className="cv-icon-accent" />
                    <div>
                      <strong>Cybersecurity</strong> — IBM SkillsBuild
                      <span className="cv-cert-date">Mar 2024</span>
                    </div>
                  </div>
                  <div className="cv-cert-chip">
                    <Award size={16} className="cv-icon-accent" />
                    <div>
                      <strong>Cloud Computing 101</strong> — AWS Educate
                      <span className="cv-cert-date">Dec 2025</span>
                    </div>
                  </div>
                  <div className="cv-cert-chip">
                    <Award size={16} className="cv-icon-accent" />
                    <div>
                      <strong>Machine Learning</strong> — Saylor Academy
                      <span className="cv-cert-date">Sep 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="cv-section">
                <div className="cv-section-heading">
                  <GraduationCap size={18} className="cv-icon-accent" />
                  <h3>Education</h3>
                </div>

                <div className="cv-timeline">
                  <div className="cv-timeline-item">
                    <div className="cv-timeline-dot"></div>
                    <div className="cv-timeline-content">
                      <div className="cv-card-header">
                        <div>
                          <h4 className="cv-item-title">Lovely Professional University</h4>
                          <p className="cv-sub">Bachelor of Technology — Computer Science and Engineering</p>
                        </div>
                        <div className="cv-card-meta">
                          <span className="cv-date">Aug 2025 – Aug 2029</span>
                          <span className="cv-grade-badge">CGPA: 8.5</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cv-timeline-item">
                    <div className="cv-timeline-dot"></div>
                    <div className="cv-timeline-content">
                      <div className="cv-card-header">
                        <div>
                          <h4 className="cv-item-title">Xavier School Gamharia</h4>
                          <p className="cv-sub">Intermediate (ICSE / ISC)</p>
                        </div>
                        <div className="cv-card-meta">
                          <span className="cv-date">Apr 2023 – Mar 2025</span>
                          <span className="cv-grade-badge">84%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cv-timeline-item">
                    <div className="cv-timeline-dot"></div>
                    <div className="cv-timeline-content">
                      <div className="cv-card-header">
                        <div>
                          <h4 className="cv-item-title">Xavier School Gamharia</h4>
                          <p className="cv-sub">Matriculation (ICSE)</p>
                        </div>
                        <div className="cv-card-meta">
                          <span className="cv-date">Apr 2013 – Mar 2023</span>
                          <span className="cv-grade-badge">86%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CVSummaryModal;
