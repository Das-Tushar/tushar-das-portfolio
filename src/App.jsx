import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <main className="main-container">
      <NetworkBackground />
      <Navbar />
      <div className="portfolio-container">
        <div className="content-wrapper">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
