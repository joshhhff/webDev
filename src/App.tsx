import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import ServicesTrainingAndMentoring from './pages/ServicesTrainingAndMentoring';
import ServicesImplementations from './pages/Services-Implementations';

import Footer from './components/Footer';

function App() {

  return (
    <>
        <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<NavLink to="/" className={isActive =>"active" + (!isActive ? " unselected" : "")}>HOME</NavLink>} />
            <Route path="/services" element={<NavLink to="/services" className={isActive =>"active" + (!isActive ? " unselected" : "")}>SERVICES</NavLink>} />
            <Route path="/services/implementations" element={<ServicesImplementations />} />
            <Route path="/services/trainingandmentoring" element={<ServicesTrainingAndMentoring />} />
            <Route path="/aboutus" element={<NavLink to="/aboutus" className={isActive =>"active" + (!isActive ? " unselected" : "")}>ABOUT US</NavLink>} />
            <Route path="/jointheteam" element={<NavLink to="/jointheteam" className={isActive =>"active" + (!isActive ? " unselected" : "")}>JOIN THE TEAM</NavLink>}></Route>
            <Route path="/contactus" element={<NavLink to="/contactus" className={isActive =>"active" + (!isActive ? " unselected" : "")}>CONTACT US</NavLink>}></Route>
        </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
