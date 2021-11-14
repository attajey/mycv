import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyCv = () => {
  document.title = "Todo App";

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
            <h1>Todo App</h1>
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
              This is a simple React app to practice some of the necessary
              features of this cool framework.
              <br />
              It's very similar to
              <NavLink className="text-success" to="person-manager">
                {" "}
                Person Manager{" "}
              </NavLink>
              project.
              <br />
              <br />
              You can add or delete your tasks and also change them in
              real-time.
              <br />
              <br />I also used Toastify to display some cool notifications when
              you add or delete a task.
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/todo-app"
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
