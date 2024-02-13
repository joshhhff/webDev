import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
