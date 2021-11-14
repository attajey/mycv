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
            src="./images/Projects/icons/front end 2.png"
            alt="Front-end Projects"
          />
          <h2 className="pb-4">Front-end Projects</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/archi-cv-sample">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/react.png"
                    alt="react icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/bootstrap.png"
                    alt="bootstrap icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/react.png"
                  // src="./images/Projects/arch-cv.png"
                  src="https://robohash.org/react?300x300"
                  alt="Architecture Portfolio"
                />
                <div className="middle">
                  <h5>Architecture Portfolio</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/my-cv">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/react.png"
                    alt="react icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/bootstrap.png"
                    alt="bootstrap icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/react.png"
                  // src="./images/Projects/my-cv.png"
                  src="https://robohash.org/react?300x300"
                  alt="My CV"
                />
                <div className="middle">
                  <h5>My CV</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/html-css-js/profile-intern-task">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/js.png"
                    alt="js icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/html-css-js.png"
                  // src="./images/Projects/profile-task.png"
                  src="https://robohash.org/htmlcssjs?300x300"
                  alt="Profile Intern Task"
                />
                <div className="middle">
                  <h5>Profile Intern Task</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/bootstrap/mother-nature">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/js.png"
                    alt="js icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/bootstrap.png"
                    alt="bootstrap icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/bootstrap.png"
                  // src="./images/Projects/mother-nature.png"
                  src="https://robohash.org/bootstrap?300x300"
                  alt="Mother Nature"
                />
                <div className="middle">
                  <h5>Mother nature</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>

          <hr className="mt-3" />
        </div>

        <div className="row ">
          <img
            className="icon-projects"
            src="./images/Projects/icons/programming 2.png"
            alt="Programming Projects"
          />
          <h2 className="pb-4">Programming Projects</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/unity/realm-rush">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/unity.png"
                    alt="unity icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/csharp.png"
                    alt="csharp icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/unity-csharp.jpeg"
                  src="https://robohash.org/unity?300x300"
                  alt="Unity Project"
                />
                <div className="middle">
                  <h5>Realm Rush</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/unity/argon-assault">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/unity.png"
                    alt="unity icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/csharp.png"
                    alt="csharp icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/unity-csharp.jpeg"
                  // src="./images/Projects/argon-assault.png"
                  src="https://robohash.org/unity?300x300"
                  alt="Unity Project"
                />
                <div className="middle">
                  <h5>Argon Assault</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/unity/project-boost">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/unity.png"
                    alt="unity icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/csharp.png"
                    alt="csharp icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/unity-csharp.jpeg"
                  // src="./images/Projects/project-boost.png"
                  src="https://robohash.org/unity?300x300"
                  alt="Unity Project"
                />
                <div className="middle">
                  <h5>Project Boost</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/cplus/tetris-game">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/cplus.png"
                    alt="cplus icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/cplus.png"
                  src="https://robohash.org/cplus?300x300"
                  alt="Tetris Game"
                />
                <div className="middle">
                  <h5>Tetris</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/cplus/accounting-software">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/cplus.png"
                    alt="cplus icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/cplus.png"
                  src="https://robohash.org/cplus?300x300"
                  alt="Accounting Software"
                />
                <div className="middle">
                  <h5>Accounting Software</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/cplus/arduino/parking-sensor">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/cplus.png"
                    alt="cplus icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/arduino.png"
                    alt="arduino icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/arduino.jpg"
                  src="https://robohash.org/arduino?300x300"
                  alt="Parking Sensor"
                />
                <div className="middle">
                  <h5>Parking Sensor</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <img
            className="icon-projects"
            src="./images/Projects/icons/other shit 2.png"
            alt="Other Shit"
          />

          <h2 className="pb-4">Other Stuff</h2>
        </div>
        <div className="row">
          {/* <div className="col-12 col-sm-6 col-lg-3 projects-items">
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
          </div> */}
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/person-manager">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/react.png"
                    alt="react icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/bootstrap.png"
                    alt="bootstrap icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/react.png"
                  // src="./images/Projects/person-manager.png"
                  src="https://robohash.org/react?300x300"
                  alt="Person Manager"
                />
                <div className="middle">
                  <h5>Person Manager</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/react/robo-friends">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/react.png"
                    alt="react icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/bootstrap.png"
                    alt="bootstrap icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/react.png"
                  // src="./images/Projects/robofriends.png"
                  src="https://robohash.org/react?300x300"
                  alt="My CV"
                />
                <div className="middle">
                  <h5>Robo Friends</h5>
                  <p>Click For Details</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 projects-items">
            <NavLink to="/projects/html-css-js/bg-generator">
              <div className="img-middle-div text-center">
                <span class="badge rounded-pill bg-dark badge-container">
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/html5.png"
                    alt="html5 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/css3.png"
                    alt="css3 icon"
                  />
                  <img
                    className="badge-icon"
                    src="./images/About Me/skills icons/bootstrap.png"
                    alt="bootstrap icon"
                  />
                </span>
                <img
                  className="img-projects-present"
                  // src="./images/Projects/html-css-js.png"
                  // src="./images/Projects/bg-generator.png"
                  src="https://robohash.org/htmlcssjs?300x300"
                  alt="BG Generator"
                />
                <div className="middle">
                  <h5>Background Generator</h5>
                  <p>Click For Details</p>
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
