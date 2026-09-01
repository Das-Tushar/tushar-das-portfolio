import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || '9ed5b38c-c681-45ea-817b-0335e60b38b2',
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <motion.section
      id="contact"
      className="section-wrapper"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={childVariants} style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      <div className="contact-grid">
        {/* Left Column: Contact Info */}
        <div className="contact-left">
          <motion.div variants={childVariants}>
            <p style={{ color: 'var(--color-dark-grey)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              I'm always open to discussing full-stack development roles, open-source collaborations, or cybersecurity opportunities. Let's build something extraordinary together.
            </p>
          </motion.div>

          <div className="contact-methods">
            <motion.div variants={childVariants}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tushardas130107@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="contact-method-info">
                  <h4>Email</h4>
                  <p>tushardas130107@gmail.com</p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={childVariants}>
              <a href="https://github.com/Das-Tushar" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                <div className="contact-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-method-info">
                  <h4>GitHub</h4>
                  <p>Das-Tushar</p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={childVariants}>
              <a href="https://www.linkedin.com/in/tushar-das-834227380" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                <div className="contact-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="contact-method-info">
                  <h4>LinkedIn</h4>
                  <p>Let's Connect</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Web3Forms */}
        <div className="contact-right">
          <motion.div variants={childVariants}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Soma Das"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="somadas@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Hello, I'd like to talk about..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="btn-submit" 
                disabled={status === 'submitting' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Error! Try Again'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;