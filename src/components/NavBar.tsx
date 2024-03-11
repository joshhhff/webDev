import { NavLink } from 'react-router-dom'; 
import { GoDownload, GoMail } from 'react-icons/go';
import { RiLinkedinBoxFill } from 'react-icons/ri';
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
        console.log('not home page')
    }
	
    return (
		<div className="navbar"> 
			<motion.div className="nav-icons" {...motionPropsLogo}>
				<div className="nav-icon-container"><a href="./CV.pdf"><GoDownload className="nav-icon"/></a></div>
				<div className="nav-icon-container"><a href="mailto: joshfordd2004@gmail.com"><GoMail className="nav-icon" /></a></div>
				<div className="nav-icon-container"><a href="https://uk.linkedin.com/in/josh-ford-1112a925b?trk=people-guest_people_search-card"><RiLinkedinBoxFill className="nav-icon" /></a></div>
			</motion.div>
			<input type="checkbox" id="nav_check" hidden />
			<motion.nav {...motionPropsLinks}>
				<ul>
					<li>
						<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
					</li>
					<li>
						<NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
					</li>
					<li>
						<NavLink to="/contactme" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink>
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