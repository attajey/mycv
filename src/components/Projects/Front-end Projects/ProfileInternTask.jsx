import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ProfileInternTask = () => {
  document.title = "Profile Intern Task";

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <NavLink
              to="/projects"
              className="fa fa-backward fa-2x back-button"
            ></NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center py-3">
            <h1>Profile Intern Task</h1>
            <img
              className="img-project-indiv"
              src="../../images/Projects/Front-end Projects/profile-intern-task.png"
              alt="Architecture CV Sample"
            />
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is my Internship task in Profile Compay.
              <br />
              <br />
              My task was to implement this website only by using Flexbox to
              make a fully responsive design. I did my best to do that...
              <br />
              <br />
              I didn't use Bootstrap or any other frameworks in this project.
              <br />
              <br />
              It was a great practice to understand Flexbox and its capabilities
              thoroughly.
              <br />
              <br />
              <a
                className="link-project-indiv"
                href="https://profile.ir/"
                target="__blank"
              >
                (Click to visit Profile official website)
              </a>
            </p>
            <a
              className="link-project-indiv"
              href="https://attajey.github.io/Profile/"
              target="__blank"
            >
              <button className="btn btn-dark m-2">find live demo here</button>
            </a>
            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Profile"
              target="__blank"
            >
              <button className="btn btn-dark m-2">
                find source code here
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileInternTask;
