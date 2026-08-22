import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MaskWipeReveal from './components/MaskWipeReveal';
import './index.css';

function App() {
  return (
    <main style={{ height: '100dvh', overflowY: 'auto', scrollSnapType: 'y proximity', overflowX: 'hidden', scrollBehavior: 'smooth', overscrollBehavior: 'none', WebkitOverflowScrolling: 'touch' }}>
      <div className="portfolio-container">
        <div className="content-wrapper">
          <Navbar />
          <div style={{ position: 'sticky', top: 0, height: '100dvh', zIndex: 10, overflow: 'hidden', scrollSnapAlign: 'start' }}>
            <Hero />
          </div>
          <MaskWipeReveal zIndex={20}>
            <About />
          </MaskWipeReveal>
          <MaskWipeReveal zIndex={30}>
            <Skills />
          </MaskWipeReveal>
          <MaskWipeReveal zIndex={40}>
            <Projects />
          </MaskWipeReveal>
          <MaskWipeReveal zIndex={50}>
            <Contact />
          </MaskWipeReveal>
        </div>
      </div>
    </main>
  )
}

export default App;
