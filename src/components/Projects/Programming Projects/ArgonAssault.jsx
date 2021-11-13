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
            <h1>Argon Assault</h1>
            <video className="project-video" controls>
              <source
                src="../../images/Projects/Programming Projects/Argon Assault.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is my second unity project.
              <br />
              <br />
              After
              <NavLink to="/projects/unity/project-boost" target="__blank">
                Project Boost
              </NavLink>
              I made Argon Assault, which is a complete 3D game.
              <br />
              <br />
              There is only one level in this game just to learn the process for
              making a 3D world terrain, game physics and automated moving
              objects.
              <br />
              <br />
              I'm still learning a lot about how Unity works and how I can make
              it even better.
              <br />
              <br />
              For future work, I want to add more levels to the game and design
              some new enemies. As you can see its not a piece of art, its a
              piece of something else! <br />
              I also want to add some features, such as fuel, bonus points and
              some other cool stuff, to the game.
              <br />
              <br />I will constantly update my github repo. You can check it
              out and see the changes in my commits. I will be honored if you
              could find a bug or issue and tell me about it.
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Argon-Assault"
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
