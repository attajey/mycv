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
            <h1>Robo Friends</h1>
            <img
              className="img-project-indiv"
              src="../../images/Projects/Other Shits/robofriends.png"
              alt="Architecture CV Sample"
            />
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is a simple React practice. I used APIs to retrieve robot
              pictures and IDs.
              <br /> <br />
              There is a search bar that you can search for a specific name, and
              it will filter robots for you to find your true robot friend!
              <br />
              <br />
              After all, we do need a friend...
            </p>
            <a
              className="link-project-indiv"
              href="https://attajey.github.io/robofriends/"
              target="__blank"
            >
              <button className="btn btn-dark">find live demo here</button>
            </a>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/robofriends"
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
