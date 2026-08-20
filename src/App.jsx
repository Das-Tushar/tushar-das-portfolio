import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <div className="portfolio-container">
      <div className="bg-grey-split"></div>
      <div className="content-wrapper">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App;
