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
              </NavLink>
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
                    to="/projects/react/archi-cv-sample"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/front-end-b.png"
                      alt="Front-end Projects"
                    />
                    &#160;Architecture CV Sample
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/projects/react/my-cv">
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/front-end-b.png"
                      alt="Front-end Projects"
                    />
                    &#160;My CV
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/html-css-js/profile-intern-task"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/front-end-b.png"
                      alt="Front-end Projects"
                    />
                    &#160;Profile Intern Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/bootstrap/mother-nature"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/front-end-b.png"
                      alt="Front-end Projects"
                    />
                    &#160;Mother Nature
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/unity/project-boost"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/programming-b.png"
                      alt="Programming Projects"
                    />
                    &#160;Project Boost
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/unity/argon-assault"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/programming-b.png"
                      alt="Programming Projects"
                    />
                    &#160;Argon Assault
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/unity/realm-rush"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/programming-b.png"
                      alt="Programming Projects"
                    />
                    &#160;Realm Rush
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/cplus/tetris-game"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/programming-b.png"
                      alt="Programming Projects"
                    />
                    &#160;Tetris
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/cplus/accounting-software"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/programming-b.png"
                      alt="Programming Projects"
                    />
                    &#160;Accounting Software
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/cplus/arduino/parking-sensor"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/programming-b.png"
                      alt="Programming Projects"
                    />
                    &#160;Parking Sensor
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/react/person-manager"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/other-shit-b.png"
                      alt="Other Shit"
                    />
                    &#160;Person Manager
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/react/robo-friends"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/other-shit-b.png"
                      alt="Other Shit"
                    />
                    &#160;Robo Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/html-css-js/bg-generator"
                  >
                    <img
                      className="icon-menu-projects"
                      src="/images/Projects/icons/other-shit-b.png"
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
              </NavLink>
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
      <hr />
    </nav>
  );
};

export default TopNav;
