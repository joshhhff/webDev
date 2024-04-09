import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Experience';
import Industry from './pages/Industry';
import Education from './pages/Education';
import ContactMe from './pages/ContactMe';

function App() {
  
  return (
    <>
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Services />} />
            <Route path="/experience/education" element={<Education />} />
            <Route path="/experience/industry" element={<Industry />} />
            <Route path="/contactme" element={<ContactMe />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
