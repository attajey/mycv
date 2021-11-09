import React, { Fragment } from "react";

const ProfileInternTask = () => {
  return (
    <Fragment>
      <div className="container">
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
              I was just introduced to Bootstrap framework and it realy dazeled
              me that how easy to use this framework is. I realized that I can
              develop a website with a much higher speed.
              <br />
              <br />
              This project has its own design bugs, but I didnt updated it to
              leave it as a reminder to me that this project was your first one!
              look what you can do now !
              <br />
              <br />
              But there are disadvantages i this framework eaither. To redefine
              some css classes you should use !important, which is a disaster.
              Also you dont have much options to implement different designs for
              each component. For example there are only three Navbars that are
              very simillar other than their background color.
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
