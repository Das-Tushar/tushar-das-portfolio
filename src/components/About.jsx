import React from 'react';
import FadeAndReveal from './FadeAndReveal';
import './Sections.css';

const About = () => {
  return (
    <section id="about" className="sticky-section sticky-layer" style={{ position: 'relative', backgroundColor: 'var(--color-panel)', backgroundImage: 'radial-gradient(circle at center, rgba(138,43,226,0.05) 0%, var(--color-panel) 70%)', height: '100dvh', width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left">
            <div className="about-narrative">
              <FadeAndReveal>
                <p className="narrative-paragraph">
                  I am a Lead Frontend Engineer and B.Tech CSE student at LPU (Class of 2029), driven by a passion for building exceptional digital experiences. My core focus lies in crafting scalable full-stack web applications and actively practicing Data Structures and Algorithms in C++. Beyond the browser, I am deeply exploring the realms of cybersecurity and AI tools to build resilient, forward-thinking solutions. I am also a strong advocate for open-source resources, constantly seeking to collaborate on community-driven platforms.
                </p>
              </FadeAndReveal>
              
              <FadeAndReveal>
                <p className="narrative-paragraph" style={{ marginTop: '1.5rem' }}>
                  I believe that software should be robust, secure, and effortlessly intuitive. When I am not designing user interfaces or optimizing backend logic, you can find me tinkering with hardware, analyzing algorithms, and pushing the boundaries of what is possible on the web.
                </p>
              </FadeAndReveal>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <div className="education-timeline" style={{ width: '100%' }}>
              <FadeAndReveal>
                <div className="edu-card">
                  <h4 className="edu-title">Lovely Professional University (LPU)</h4>
                  <p className="edu-subtitle">B.Tech CSE | Graduating 2029</p>
                  <div className="edu-highlight">Current CGPA: 8.51</div>
                </div>
              </FadeAndReveal>
              <FadeAndReveal>
                <div className="edu-card">
                  <h4 className="edu-title">Xavier School Gamharia</h4>
                  <p className="edu-subtitle">12th Grade (ICSE)</p>
                  <div className="edu-highlight">84.2%</div>
                </div>
              </FadeAndReveal>
              <FadeAndReveal>
                <div className="edu-card">
                  <h4 className="edu-title">Xavier School Gamharia</h4>
                  <p className="edu-subtitle">10th Grade (ICSE)</p>
                  <div className="edu-highlight">86.4%</div>
                </div>
              </FadeAndReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;