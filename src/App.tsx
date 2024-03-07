import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Experience';
import ServicesTrainingAndMentoring from './pages/ServicesTrainingAndMentoring';
import ServicesImplementations from './pages/Services-Implementations';
import AboutUs from './pages/ContactMe';

function App() {

  
  return (
    <>
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Services />} />
            <Route path="/experience/education" element={<ServicesImplementations />} />
            <Route path="/experience/industry" element={<ServicesTrainingAndMentoring />} />
            <Route path="/contactme" element={<AboutUs />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
