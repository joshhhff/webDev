function NavBar() {
  return (
    <nav className="navbar background">
      <ul className="nav-list">
        <div className="logo">
          <img src="src/assets/GoLiveExpertsLogo.jpg" />
        </div>
        <li>
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#tutorials">Tutorials</a>
        </li>
        <li>
          <a href="#jobs">Jobs</a>
        </li>
        <li>
          <a href="#student">Student</a>
        </li>
      </ul>

      <div className="rightNav">
        <input type="text" name="search" id="search" />
        <button className="btn btn-sm">Search</button>
      </div>
    </nav>
  );
}

export default NavBar;
