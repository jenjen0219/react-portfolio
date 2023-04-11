import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigations';
import Header from './components/Headers';
import Home from './components/pages/Homes';
import AboutMe from './components/pages/AboutMes';
import Portfolio from './components/pages/Portfolios';
import Resume from './components/pages/Resumes';
import Contact from './components/pages/ContactMes';
import Footer from './components/Footers';

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
