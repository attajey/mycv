import React, { Fragment } from "react";

const ProfileInternTask = () => {
  return (
    <Fragment>
      <div className="container">
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
              My task was to implement this website by only using Flexbox, to
              make it responsive for all resolutions. I did my best to do that.
              <br />
              <br />
              No Bootstrap or other frameworks were used in this project.
              <br />
              <br />
              It was a great practice to understand Flexbox and its capabilities
              thourouly.
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
              <button className="btn btn-dark">find live demo here</button>
            </a>
            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Profile"
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
