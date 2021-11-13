import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Atta J
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item p-2">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/"
                exact
                activeStyle={{ color: "#63a4c9" }}
              >
                <i className="fa fa-home p-2"></i>
                Home
              </NavLink>{" "}
            </li>
            <li className="nav-item dropdown p-2">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/projects"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-laptop p-2"></i>
                Projects
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/projects" exact>
                    All Projects
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/youth-cultural-center"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/front end.png"
                      alt="Front-end Projects"
                    />
                    &#160;Architecture CV Sample
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/residential-complex"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/front end.png"
                      alt="Front-end Projects"
                    />
                    &#160;My CV
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/front end.png"
                      alt="Front-end Projects"
                    />
                    &#160;Profile Intern Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/front end.png"
                      alt="Front-end Projects"
                    />
                    &#160;Mother Nature
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/front end.png"
                      alt="Front-end Projects"
                    />
                    &#160;Pet Nurse
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/research/balkhast-house"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/programming.png"
                      alt="Programming Projects"
                    />
                    &#160;Realm Rush
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/research/five-renovation-projects"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/programming.png"
                      alt="Programming Projects"
                    />
                    &#160;Project Boost
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/research/sustainable-rural-development"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/programming.png"
                      alt="Programming Projects"
                    />
                    &#160;Tetris
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/programming.png"
                      alt="Programming Projects"
                    />
                    &#160;Accounting Software
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/programming.png"
                      alt="Programming Projects"
                    />
                    &#160;Parking Sensor
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/fun/drawings"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/other shit.png"
                      alt="Other Shit"
                    />
                    &#160;Todo App
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/fun/sketches"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/other shit.png"
                      alt="Other Shit"
                    />
                    &#160;Person Manager
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/fun/software-practice"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/other shit.png"
                      alt="Other Shit"
                    />
                    &#160;Robo Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <img
                      className="icon-menu-projects"
                      src="./images/Projects/icons/other shit.png"
                      alt="Other Shit"
                    />
                    &#160;Background Generator
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className="nav-link"
                to="/about"
                exact
                activeStyle={{ color: "#63a4c9" }}
              >
                <i className="fa fa-info p-2"></i>
                About Me
              </NavLink>{" "}
            </li>
            <li className="nav-item p-2">
              <NavLink
                className="nav-link"
                to="/contact"
                exact
                activeStyle={{ color: "#63a4c9" }}
              >
                <i className="fa fa-phone p-2"></i>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
