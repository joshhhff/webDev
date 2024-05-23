import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; 
import { GoDownload, GoMail } from 'react-icons/go';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import '../css/component-css/NavBar.css';

function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);

  const handleScroll = throttle(() => {
    const nav = navRef.current;
    if (window.scrollY !== 0 && nav) {
      console.log(window.scrollY);
      nav.style.opacity = '50%';
    } else {
      console.log('at top of screen');
      if (nav) {
        nav.style.opacity = '100%';
      }
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = window.location.href;
  let motionPropsLogo;
  let motionPropsLinks;

  if (location.endsWith('/')) {
    motionPropsLogo = {
      initial: { translateX: -100 },
      animate: { translateX: 0 }
    };
    motionPropsLinks = {
      initial: { translateX: +100 },
      animate: { translateX: 0 }
    };
  } else {
    console.log('not home page');
  }

  const increaseOpacity = () => {
    if (window.scrollY !== 0 && navRef.current) {
      navRef.current.style.opacity = '100%';
    }
  };

  const decreaseOpacity = () => {
    if (window.scrollY !== 0 && navRef.current) {
      navRef.current.style.opacity = '50%';
    }
  };

  return (
    <div
      className="navbar"
      ref={navRef}
      onMouseOver={increaseOpacity}
      onMouseLeave={decreaseOpacity}
      style={{ transition: 'opacity 0.3s ease' }}
    >
      <motion.div className="nav-icons" {...motionPropsLogo}>
        <div className="nav-icon-container">
          <a href="./CV.pdf">
            <GoDownload className="nav-icon" />
          </a>
        </div>
        <div className="nav-icon-container">
          <a href="mailto:joshfordd2004@gmail.com">
            <GoMail className="nav-icon" />
          </a>
        </div>
        <div className="nav-icon-container">
          <a
            href="https://uk.linkedin.com/in/josh-ford-1112a925b?trk=people-guest_people_search-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill className="nav-icon" />
          </a>
        </div>
      </motion.div>
      <input type="checkbox" id="nav_check" hidden />
      <motion.nav {...motionPropsLinks}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactme" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </motion.nav>
      <motion.label htmlFor="nav_check" className="hamburger" {...motionPropsLinks}>
        <div></div>
        <div></div>
        <div></div>
      </motion.label>
    </div>
  );
}

export default NavBar;
