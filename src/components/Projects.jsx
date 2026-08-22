import React from 'react';
import { BookOpen } from 'lucide-react';
import FadeAndReveal from './FadeAndReveal';
import './Sections.css';

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper sticky-section sticky-layer" style={{ paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2 className="section-title">Projects</h2>
      </div>
      
      <FadeAndReveal>
        <div className="projects-gallery" style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '1rem 0 2rem 0' }}>
          
          {/* CS Nexus Card */}
          <div className="project-card">
            <div className="project-image" style={{ background: 'linear-gradient(45deg, #111, #102a45)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={64} color="rgba(255,255,255,0.2)" />
            </div>
            <div className="project-content" style={{ padding: '1.5rem' }}>
              <h3 className="project-title" style={{ fontSize: '1.5rem' }}>CS Nexus</h3>
              <p className="project-tags">React | Git | GitHub</p>
              <p style={{ color: 'var(--color-dark-grey)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                An interactive, open-source computer science educational hub.
              </p>
              <div className="project-actions">
                <a href="https://cs-nexus.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-project btn-live">Live Demo</a>
                <a href="https://github.com/Das-Tushar/cs-nexus.git" target="_blank" rel="noopener noreferrer" className="btn-project btn-github">GitHub Repo</a>
              </div>
            </div>
          </div>
          
          {/* Explore More Card */}
          <div className="project-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="project-content" style={{ textAlign: 'center', padding: '3rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="var(--color-lavender)" style={{ margin: '0 auto 1.5rem auto' }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <h3 className="project-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Explore More Projects</h3>
              <p style={{ color: 'var(--color-dark-grey)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Check out my GitHub for more open-source contributions, web applications, and scripts.
              </p>
              <a href="https://github.com/Das-Tushar?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-project btn-github" style={{ display: 'inline-block', padding: '0.8rem 2rem' }}>
                View GitHub Repositories
              </a>
            </div>
          </div>

        </div>
      </FadeAndReveal>
    </section>
  );
};

export default Projects;
