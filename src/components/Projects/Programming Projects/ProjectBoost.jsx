import React, { Fragment } from "react";

const MyCv = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <h1>Project Boost</h1>
            <video className="img-project-indiv" controls>
              <source
                src="../../images/Projects/Programming Projects/Project Boost.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is my first unity project.
              <br />
              <br />
              Project Boost is a simple,"somehow" 3D, game which I created as my
              first unity project to learn some essential tools and features of
              Unity engine and C# programming language.
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
              redesign the game. As you can see its not a piece of art, its a
              piece of something else! <br />
              I also want to add some features, such as fuel, bonus points and
              flying enemies, to the game.
              <br />
              <br />I will constantly update my github repo. You can check it
              out and see the changes in my commits. I will be honored if you
              could find a bug or issue and tell me about it.
            </p>

            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Project-Boost"
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
