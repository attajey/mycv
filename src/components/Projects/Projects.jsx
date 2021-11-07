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
            <NavLink to="/projects/archi-cv-sample">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/Arch CV.jpg"
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
            <NavLink to="/projects/my-cv">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/my CV.gif"
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
            <NavLink to="/projects/profile-intern-task">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/Profile.png"
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
            <NavLink to="/projects/mother-nature">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/mother nature.png"
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
            <NavLink to="/projects/pet-nurse">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/pet nurse.png"
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
            <NavLink to="/projects/archi-cv-sample">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/Arch CV.jpg"
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
            <NavLink to="/projects/my-cv">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/my CV.gif"
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
            <NavLink to="/projects/profile-intern-task">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/Profile.png"
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
            <NavLink to="/projects/mother-nature">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/mother nature.png"
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
            <NavLink to="/projects/pet-nurse">
              <div className="img-middle-div text-center">
                <img
                  className="img-projects-present"
                  src="./images/Projects/pet nurse.png"
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
            src="./images/Projects/icons/other shit.png"
            alt=""
          />

          <h2>Other Shit</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <NavLink to="/projects/fun/drawings">
              <img
                className="img-projects-present"
                src="./images/Projects/Just For Fun/Drawings/Drawing.jpg"
                alt="Drawings"
              />
              <div className="middle">
                <h4>BG gen</h4>
                <h5>Click For Details</h5>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <NavLink to="/projects/fun/sketches">
              <img
                className="img-projects-present"
                src="./images/Projects/Just For Fun/Sketches/Sketch.jpg"
                alt="Sketches"
              />
              <div className="middle">
                <h4>Robo friends</h4>
                <h5>Click For Details</h5>
              </div>
            </NavLink>
          </div>

          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <NavLink to="/projects/fun/software-practice">
              <img
                className="img-projects-present"
                src="./images/Projects/Just For Fun/Software Practice/SOFTWARE 1.jpg"
                alt="Sketches"
              />
              <div className="middle">
                <h4>info form </h4>
                <h5>Click For Details</h5>
              </div>
            </NavLink>
          </div>
          <hr className="mt-3" />
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
