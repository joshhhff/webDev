import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="logo">
          <img src="src/assets/GoLiveExpertsLogo.jpg" />
        </div>

      <div>
        <ul className="nav-list">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li>
            <a href="#jointheteam">JOIN THE TEAM</a>
          </li>
          <li>
            <a href="#contactus">CONTACT US</a>
          </li>
        </ul>
        </div>
    </nav>
  );
}

export default NavBar;
