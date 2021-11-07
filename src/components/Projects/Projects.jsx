import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Projects = () => {
  document.title = "Projects";
  return (
    <Fragment>
      <div className="container-fluid text-center py-5">
        <div className="row">
          <img
            className="icon-projects"
            src="./images/Projects/icons/front end.png"
            alt=""
          />
          <h2>Front-end Projects</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/archi-cv-sample">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/react.png"
                  alt="Architecture CV Sample"
                />
                <div className="middle">
                  <h4>Architecture CV Sample</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/my-cv">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/react.png"
                  alt="My CV"
                />
                <div className="middle">
                  <h4>My CV</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/html-css-js/profile-intern-task">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/html-css-js.jpg"
                  alt="My CV"
                />
                <div className="middle">
                  <h4>Profile Intern Project</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/bootstrap/mother-nature">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/boostrap.png"
                  alt="Mother Nature"
                />
                <div className="middle">
                  <h4>Mother nature</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/wordpress/pet-nurse">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/wordpress.png"
                  alt="Pet Nurse"
                />
                <div className="middle">
                  <h4>Pet Nurse</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <img
            className="icon-projects"
            src="./images/Projects/icons/programming.png"
            alt=""
          />
          <h2>Programming Projects</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/unity/realm-rush">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/unity.png"
                  alt="Unity Project"
                />
                <div className="middle">
                  <h4>Realm Rush</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/unity/argon-assault">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/unity.png"
                  alt="Unity Project"
                />
                <div className="middle">
                  <h4>Argon Assault</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/unity/project-boost">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/unity.png"
                  alt="Unity Project"
                />
                <div className="middle">
                  <h4>Project Boost</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/cplus/tetris-game">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/c plus.jpg"
                  alt="Tetris Game"
                />
                <div className="middle">
                  <h4>Tetris</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/cplus/accounting-software">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/c plus.jpg"
                  alt="Accounting Software"
                />
                <div className="middle">
                  <h4>Accounting Software</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/cplus/arduino/parking-sensor">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/Arduino.png"
                  alt="Parking Sensor"
                />
                <div className="middle">
                  <h4>Parking Sensor</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <img
            className="icon-projects"
            src="./images/Projects/icons/other shit.png"
            alt=""
          />

          <h2>Other Shit</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/todo-app">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/react.png"
                  alt="Todo App"
                />
                <div className="middle">
                  <h4>Todo App</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/person-manager">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/react.png"
                  alt="Person Manager"
                />
                <div className="middle">
                  <h4>Person Manager</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/robo-friends">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/react.png"
                  alt="My CV"
                />
                <div className="middle">
                  <h4>Robo Friends</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/html-css-js/bg-generator">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/html-css-js.jpg"
                  alt="BG Generator"
                />
                <div className="middle">
                  <h4>Background Generator</h4>
                  <h5>Click For Details</h5>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
