import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/component-css/NavBar.css';


function NavBar() {

  	const location = window.location.href;
  
  	let motionPropsLogo;
  	let motionPropsLinks;

    if (location.endsWith('/')) {
        console.log('on home page');
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
    } else {
        console.log('not services page')
    }

  return (
    <div className="navbar-container">
      <motion.nav className="navbar" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 1}}>
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
      </motion.nav>
    </div>
  );
}

export default NavBar;
