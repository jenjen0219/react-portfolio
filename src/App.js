import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Project from './components/project';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>


          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/about" element={<AboutMe />} />

        </Routes>




      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
