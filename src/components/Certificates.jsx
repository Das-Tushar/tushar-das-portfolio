import React from 'react';
import FadeAndReveal from './FadeAndReveal';
import './Sections.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image: '/cert-neo-programming.jpg',
      organization: 'neo colab',
      title: 'Computer Programming'
    },
    {
      id: 2,
      image: '/cert-ibm-cybersecurity.jpg',
      organization: 'IBM SkillsBuild',
      title: 'Getting Started with Cybersecurity'
    },
    {
      id: 3,
      image: '/cert-aws-cloud.png',
      organization: 'AWS Educate',
      title: 'Cloud Computing 101'
    },
    {
      id: 4,
      image: '/cert-linkedin-leadership.jpg',
      organization: 'LinkedIn Learning',
      title: 'Master Your Leadership Effectiveness Skills'
    },
    {
      id: 5,
      image: '/cert-saylor-ml.jpg',
      organization: 'Saylor Academy',
      title: 'CS207: Fundamentals of Machine Learning'
    }
  ];

  return (
    <section id="certificates" className="sticky-section sticky-layer" style={{ position: 'relative', backgroundColor: 'var(--color-panel)', height: '100dvh', width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <h2 className="section-title">Certificates</h2>
        </div>
        
        <FadeAndReveal>
          <div className="certificates-gallery" style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 0 2rem 0' }}>
            
            {certificates.map((cert) => (
              <div key={cert.id} className="project-card certificate-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '224px', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', background: '#1a1a24', color: 'var(--color-dark-grey)' }}>
                    Image Placeholder
                  </div>
                </div>
                <div className="project-content" style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ color: 'var(--color-lavender)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Issuing Organization: {cert.organization}
                  </p>
                  <h3 className="project-title" style={{ fontSize: '1.3rem', lineHeight: '1.4', marginBottom: 0 }}>
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
            
          </div>
        </FadeAndReveal>
      </div>
    </section>
  );
};

export default Certificates;
