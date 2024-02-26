import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from 'reveal-on-scroll-react';
import '../css/component-css/NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ScrollReveal.div animation="slide-in-left" className="logo">
          <img src="./GoLiveExpertsLogo.jpg" alt="Logo" />
        </ScrollReveal.div>

        <AnimatePresence>
          <ScrollReveal.div animation="slide-in-right">
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="nav-list"
            >
              <li>
                <NavLink to="/" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active">
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" activeClassName="active">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/jointheteam" activeClassName="active">
                  JOIN THE TEAM
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactus" activeClassName="active">
                  CONTACT US
                </NavLink>
              </li>
            </motion.ul>
          </ScrollReveal.div>
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default NavBar;
