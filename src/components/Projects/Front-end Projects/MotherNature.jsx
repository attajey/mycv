import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ProfileInternTask = () => {
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
            <h1>Mother Nature</h1>
            <img
              className="img-project-indiv"
              src="../../images/Projects/Front-end Projects/mother-nature.png"
              alt="Mother Nature"
            />
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is the first time that I tried to use Bootstrap.
              <br />
              <br />
              I was just introduced to Bootstrap framework and it dazzled me
              that how easy to use this framework is. I realized that I can
              develop a website at a much higher speed.
              <br />
              <br />
              Also, I used <a href="https://animate.style/">Animate.css</a> for
              some animations on this website, and I used
              <a href="https://wowjs.uk/">wow.js</a> to reveal animation only
              when you scroll on a page.
              <br />
              <br />
              This project has its own design bugs, but I didn't update it to
              leave it as a reminder to me that this project was your first one!
              look what you can do now!
              <br />
              <br />
              But there are disadvantages to this framework either. To redefine
              some CSS classes you should use !important, which is a disaster.
              Also, you don't have many options to implement different designs
              for each component. For example, there are only three Navbars that
              are very similar other than their background color.
              <br />
              <br />
            </p>
            <a
              className="link-project-indiv"
              href="https://attajey.github.io/Mother-Nature/"
              target="__blank"
            >
              <button className="btn btn-dark">find live demo here</button>
            </a>
            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Mother-Nature"
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

export default ProfileInternTask;
