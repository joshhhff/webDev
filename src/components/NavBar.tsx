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
              <NavLink to="/" activeClassName="active">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" activeClassName="active">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/jointheteam" activeClassName="active">JOIN THE TEAM</NavLink>
            </li>
            <li>
              <NavLink to="/contactus" activeClassName="active">CONTACT US</NavLink>
            </li>
          </ul>
          </ScrollReveal.div>
      </nav>
    </div>
  );
}

export default NavBar;
