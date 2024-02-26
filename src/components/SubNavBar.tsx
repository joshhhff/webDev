import { NavLink } from 'react-router-dom';
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

  return (
    <div className="subnavbar-container">
      <nav className="sub-navbar">
        <ul className="sub-navlist">
          {titles.map(function(title, i){
            return (
              <li>
              <NavLink to={tabLinks[i]} className="active">{title}</NavLink>
            </li>
            );
          })}
        </ul>
    </nav>
  </div>
  );
} 

export default SubNavBar;