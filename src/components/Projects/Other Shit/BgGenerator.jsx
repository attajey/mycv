import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyCv = () => {
  document.title = "BG Generator";

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
            <h1>Background Generator</h1>
            <img
              className="img-project-indiv"
              src="../../images/Projects/Other Shits/bg-generator.png"
              alt="Architecture CV Sample"
            />
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is just a simple practice on how to use CSS gradient
              property.
              <br />
              <br />
              It was somehow cool, so I put it here...
            </p>
            <a
              className="link-project-indiv"
              href="https://attajey.github.io/background-generator/"
              target="__blank"
            >
              <button className="btn btn-dark">find live demo here</button>
            </a>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/background-generator"
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
