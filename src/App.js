
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <BrowserRouter>
        <Routes>


          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>




      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
