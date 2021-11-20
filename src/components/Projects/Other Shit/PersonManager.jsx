import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyCv = () => {
  document.title = "Person Manager";

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
            <img
              className="img-project-indiv"
              src="../../images/Projects/Other Shits/person-manager.png"
              alt="Architecture CV Sample"
            />
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is a simple React app to practice some of the necessary
              features of this cool framework.
              {/* <br />
              It's very similar to
              <NavLink className="text-success" to="todo-app">
                {" "}
                Todo App{" "}
              </NavLink>
              project. */}
              <br />
              <br />
              You can add or delete a person and also change its name in
              real-time.
              <br />
              <br />I also used Toastify to display some cool notifications when
              you add or delete a person.
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/person-manager"
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

export default MyCv;
