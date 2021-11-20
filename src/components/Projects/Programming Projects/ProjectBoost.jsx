import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyCv = () => {
  document.title = "Projects Boost";

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
          <div className="col-12 text-center py-4">
            <h1>Project Boost</h1>
            <video className="project-video" controls>
              <source
                src="../../images/Projects/Programming Projects/Project Boost.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h5 className="text-muted">Watch Demo</h5>
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is my first unity project.
              <br />
              <br />
              Project Boost is a simple, "somehow" 3D game which I created as my
              first Unity project to learn some essential tools and features of
              this engine and C# programming language.
              <br />
              <br />
              There are only two levels in this game just to learn the process
              for changing scenes in a project.
              <br />
              <br />
              I'm still learning a lot about how Unity works and how I can make
              it even better.
              <br />
              <br />
              For future work, I want to add more levels to the game and
              redesign the game. As you can see it's not a piece of art...
              <br />
              I also want to add some features, such as fuel, bonus points, and
              flying enemies, to the game.
              <br />
              <br />I will constantly update my GitHub repo. You can check it
              out and see the changes in my commits. I will be honored if you
              could find a bug or issue and tell me about it.
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Project-Boost"
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
