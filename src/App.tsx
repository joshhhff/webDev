import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServicesTrainingAndMentoring from './pages/ServicesTrainingAndMentoring';
import ServicesImplementations from './pages/Services-Implementations';
import AboutUs from './pages/AboutUs';
import JoinTheTeam from './pages/JoinTheTeam';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {

  const location = useLocation();
  console.log('current url location:', location);

  return (
    <>
        <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/implementations" element={<ServicesImplementations />} />
            <Route path="/services/trainingandmentoring" element={<ServicesTrainingAndMentoring />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/jointheteam" element={<JoinTheTeam />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
