import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyCv = () => {
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
            <h1>Person Manager</h1>
            {/* <video className="project-video" controls>
              <source
                src="../../images/Projects/Programming Projects/Argon Assault.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is a simple React app to practice some of neseccery features
              of this cool framework.
              <br />
              its very similar to
              <NavLink to="todo-app">Todo App </NavLink>
              project.
              <br />
              <br />
              You can add or delete a person and also change its name real-time.
              <br />
              <br />I also used Toastify to display some cool notifications when
              you add or delete a person.
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/person-manager"
              target="__blank"
            >
              <button className="btn btn-dark">find source code here</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyCv;
