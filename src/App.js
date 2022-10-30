import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Work from './components/Works.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
