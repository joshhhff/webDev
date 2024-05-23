import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import '../css/component-css/SubNavBar.css';

interface SubNavBarProps {
  numOfTabs: number;
  tabTitles: string;
  links: string;
}

function SubNavBar({numOfTabs, tabTitles, links}: SubNavBarProps) {

  let titles = [];
  let tabLinks: string[] = [];
  if (numOfTabs > 1) {
    titles = tabTitles.split(',');
    tabLinks = links.split(',');
  } else {
    titles.push(tabTitles);
    tabLinks.push(links);
  }

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="subnavbar-container">
      <nav className="sub-navbar">
        <div className="sub-navlist" ref={navRef} onMouseOver={increaseOpacity} onMouseLeave={decreaseOpacity}>
          {titles.map(function(title, i){
            return (
              <li>
              <NavLink to={tabLinks[i]} className={({ isActive }) => isActive ? 'active' : ''}>{title}</NavLink>
            </li>
            );
          })}
        </div>
    </nav>
  </div>
  );
} 

export default SubNavBar;