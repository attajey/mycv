import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyCv = () => {
  document.title = "Parking Sensor";

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
            <h1>Parking Sensor</h1>
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
              This Project Is Under Construction !
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/parking-sensor"
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
