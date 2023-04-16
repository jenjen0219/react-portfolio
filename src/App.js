import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/ContactMe';
import Footer from './components/Footer';
import Style from './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div className="mainBackground" >
      <BrowserRouter>
        <Header />
        <Banner />
        <Container  >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
