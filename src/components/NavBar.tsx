import { NavLink } from 'react-router-dom';
import { ScrollReveal } from 'reveal-on-scroll-react';
import '../css/component-css/NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
          <ScrollReveal.div animation='slide-in-left' className="logo">
            <img src="./GoLiveExpertsLogo.jpg" />
          </ScrollReveal.div>

        <ScrollReveal.div animation='slide-in-right'>
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
          </ScrollReveal.div>
      </nav>
    </div>
  );
}

export default NavBar;
