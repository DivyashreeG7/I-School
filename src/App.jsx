import Nav from './components/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcementbar from './components/AnnouncementBar';
import AnnouncementBanner from './components/AnnouncementBanner';
import About from './components/About';
import Academics from './components/Academics';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <AnnouncementBanner />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Announcementbar />
                <div className="scroll-container flex-1">
                  <section id="home" className="min-h-screen">
                    <Home />
                  </section>
                  <section id="about" className="min-h-screen">
                    <About />
                  </section>
                  <section id="academics" className="min-h-screen">
                    <Academics />
                  </section>
                  <section id="gallery" className="min-h-screen">
                    <Gallery />
                  </section>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
