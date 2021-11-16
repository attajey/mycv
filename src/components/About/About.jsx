import React, { Fragment } from "react";
import Typer from "react-animated-typer";

const About = () => {
  document.title = "About Me";
  return (
    <Fragment>
      <div className="col-12 text-center p-5">
        <h1>About Me</h1>
      </div>
      <div className="col-12 text-center">
        <img
          className="profile-pic"
          src="./images/My Profile Picture.jpg"
          alt="My Profile"
        />
        <div className="p-4">
          <Typer dataText={[" C'est moi ! "]} />
        </div>
        <a href="./images/About me/Atta's CV.pdf" target="__blank">
          <button className="btn btn-dark fa fa-download fa-1x">
            &#160;&#160;Download My CV
          </button>
        </a>
      </div>
      <div className="row pt-5">
        <div className="col-12 px-5 fs-5">
          <div className="custom-media media pb-5">
            <i className="fa fa-graduation-cap fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Educations</h3>
              <p className="fs-6">2016-2020</p>
              <div className="d-flex flex-row">
                <i className="fa fa-dot-circle-o pt-1"></i>
                <h5 className="fw-bold ps-2">B.Sc. in Computer Engineering</h5>
              </div>
              <p className="fs-6 ps-4">&#160;2016-2020</p>
              <div className="d-flex flex-row ps-4">
                <i className="fa fa-circle pt-1"></i>
                <p className="ps-2">
                  Yazd University Faculty of Computer Engineering
                </p>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-briefcase fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Work Experiences</h3>
              <p className="fs-6">2016-2021</p>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">Teacher Assistant</h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Sep 2018 - Jun 2020</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Computer Systems Architecture T.A.</p>
                  </div>
                  <p className="ps-5">
                    Assisted my professor, Dr. Matin Khah, for four semesters
                    regarding designing and grading projects and assignments for
                    the Computer System Architecture (CSA) course.
                  </p>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">
                      Member of Computer Eng Association
                    </h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Sep 2017 - May 2019</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">
                      Original Member of CEA - Yazd University
                    </p>
                  </div>
                  <p className="ps-5">
                    Responsible for holding all seminars, festivals, and science
                    trips for C.Eng. students.
                  </p>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">Hardware R&D</h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Jun 2019 - Sep 2019</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">
                      Summer Internship at Zharfpouyan Company{" "}
                    </p>
                  </div>
                  <p className="ps-5">
                    Research on hardware requirements and protocols for
                    IoT-based companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-wrench fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Skills</h3>
              <div className="row pt-3 px-3">
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/html5.png"
                      alt="html5 icon"
                    />
                    HTML 5
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/css3.png"
                      alt="css3 icon"
                    />
                    CSS 3
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/js.png"
                      alt="js icon"
                    />
                    JavaScript
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/bootstrap.png"
                      alt="bootstrap icon"
                    />
                    Bootstrap
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "95%" }}
                    >
                      95%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/react.png"
                      alt="html5 icon"
                    />
                    React
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/git.png"
                      alt="git icon"
                    />
                    Git
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/csharp.png"
                      alt="csharp icon"
                    />
                    C#
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/unity.png"
                      alt="unity icon"
                    />
                    Unity
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/arduino.png"
                      alt="arduino icon"
                    />
                    Arduino
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/wordpress.png"
                      alt="wordpress icon"
                    />
                    Wordpress
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/electronics.png"
                      alt="electronics icon"
                    />
                    Electronics
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span className="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/linux.png"
                      alt="linux icon"
                    />
                    Linux
                  </span>
                  <div className="progress bg-dark">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-star fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Certificates</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">IELTS</h5>
                  </div>
                  <p className="fs-6 ps-4">
                    &#160;Issued Nov 2019 - Expires Nov 2021
                  </p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">IRSAFAM Institute</p>
                  </div>
                  <p className="ps-5">
                    Holder of IELTS degree - overall band score of 7
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="./images/About me/IELTS.pdf"
                  >
                    See credential
                  </a>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">
                      Cellphone Repair Technician
                    </h5>
                  </div>
                  <p className="fs-6 ps-4">
                    &#160;Issued Feb 2021 - Expires Feb 2026
                  </p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Technical And Vocational Department</p>
                  </div>
                  <p className="ps-5">
                    Attained a 130 hour course at Iran Technical-Vocational
                    Training Organization (ITVTO).
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="__blank"
                    href="./images/About me/cellphone repair tech.jpeg"
                  >
                    See credential
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5">
            <i className="fa fa-book fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Publications</h3>
              <p className="fs-6">2018-2020</p>
              <div className="d-flex flex-row">
                <i className="fa fa-dot-circle-o pt-1"></i>
                <h5 className="fw-bold ps-2">Radio Bit Magazine</h5>
              </div>
              <p className="fs-6 ps-4">&#160;Apr 2018</p>
              <div className="d-flex flex-row ps-4">
                <i className="fa fa-circle pt-1"></i>
                <p className="ps-2">Editor in Chief and Editorial Board</p>
              </div>
              <p className="ps-5">
                A magazine for C.Eng. students of Yazd University to read all
                about Technology, News, Interviews with professors, Festivals,
                and Educational topics.
              </p>
              <a
                className="ps-5 text-info"
                target="__blank"
                href="./images/About me/Radio Bit Magazine.pdf"
              >
                See publication
              </a>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-language fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Languages</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">Persian</h5>
                  </div>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Native or bilingual proficiency</p>
                  </div>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">English</h5>
                  </div>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Professional working proficiency</p>
                  </div>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">French</h5>
                  </div>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Elementary proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-gamepad fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Hobbies</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Coding For Fun !</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Playing Guitar And Writing Lyrics</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Reading Books (Modern Novels, High Fantacy, History)
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Watching Documentaries (History, Science, Art)
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Playing Video Games</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Swimming Alone</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Hating And Killing Bugs (Computer-wise)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
