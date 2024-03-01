import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/component-css/NavBar.css';

interface NavBarProps {
  animate: boolean,
}

function NavBar({animate}: NavBarProps) {

  let motionPropsLogo;
  let motionPropsLinks;
  if (animate) {
    motionPropsLogo = {
      initial: { opacity: 0, translateX: -100 },
      animate: { opacity: 1, translateX: 0 },
      transition: { duration: 1} 
    };

    motionPropsLinks = {
      initial: { opacity: 0, translateX: +100 },
      animate: { opacity: 1, translateX: 0 },
      transition: { duration: 1} 
    };
  }

  return (
    <motion.div className="navbar-container" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 1}}>
      <nav className="navbar">
          <motion.div className="logo" {...motionPropsLogo}>
            <img src="./GoLiveExpertsLogo.jpg" />
          </motion.div>

        <motion.div {...motionPropsLinks}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/jointheteam" className={({ isActive }) => isActive ? 'active' : ''}>JOIN THE TEAM</NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT US</NavLink>
            </li>
          </ul>
          </motion.div>
      </nav>
    </motion.div>
  );
}

export default NavBar;
