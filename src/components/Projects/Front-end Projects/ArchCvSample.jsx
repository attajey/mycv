import React, { Fragment } from "react";

const ArchCvSample = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <h1>Architecture CV Sample</h1>
            <i className="fa fa-backward fa-2x back-button"></i>
            <img
              className="img-project-indiv"
              src="../../images/Projects/Front-end Projects/arch-cv-sample.png"
              alt="Architecture CV Sample"
            />
          </div>
          <div className="col-12 pb-5">
            <h2>About This Project</h2>
            <p className="p-project-indiv">
              This is my first React base website.
              <br />
              <br />I did my best to implement all the standard methods for
              making a React App, but I'm still working on it to make a pure,
              standard, state of the art React project.
              <br />
              <br />
              I'm still learning a lot about how React works and how I can make
              it even better.
              <br />
              <br />
              When I first started this project, it was a pure html,css,js
              project
              <a
                className="link-project-indiv"
                href="https://github.com/attajey/Architecture-CV-Sample"
                target="__blank"
              >
                (find source code here)
              </a>
              but after I learned more about React, I decided to start from
              skratch and make a duplicate project by using React and better css
              styling. My css code lines where half the before after I
              reconsidered all of it.
              <br />
              <br />
              For future work, I want to completely separate the components from
              each other. Right now for example, if you want to make a change in
              image galleries that is used in different pages, you should change
              it in each component one by one, which is absolutely now following
              the DRY philosephy. Other future changes are similar to this one.
              <br />
              <br />I will constantly update my github repo. You can check it
              out and see the changes in my commits. I will be honored if you
              could find a bug or issue and tell me about it.
            </p>
            <a
              className="link-project-indiv"
              href="http://kimiakarimi.com/"
              target="__blank"
            >
              <button className="btn btn-dark">find live demo here</button>
            </a>
            <a
              className="link-project-indiv"
              href="https://github.com/attajey/Arch-CV-React"
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

export default ArchCvSample;
