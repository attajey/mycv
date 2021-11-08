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
        <a href="#" target="__blank">
          <button className="btn btn-dark fa fa-download fa-1x">
            &#160;&#160;Download My Portfolio
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
                    An internship program in Arian Engineering Group, mainly
                    focused on Auto-cad drafting, Residential Design, etc.
                  </p>
                  <a
                    className="text-info"
                    href="An internship program in Arian Engineering Group, mainly focused on Auto-cad drafting, Residential 
                  Design, etc."
                  >
                    Visit Arian Eng. Gp. Page
                  </a>
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
                    Responsible for holding all seminars,festivals and science
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
                    Research on hardware requirements and protocols for IoT
                    based companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-gears fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Skills</h3>
              <div className="row pt-3 px-3">
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/html5.png"
                      alt="html5 icon"
                    />
                    HTML 5
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/css3.png"
                      alt="css3 icon"
                    />
                    CSS 3
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/js.png"
                      alt="js icon"
                    />
                    JavaScript
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/bootstrap.png"
                      alt="bootstrap icon"
                    />
                    Bootstrap
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "95%" }}
                    >
                      95%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/git.png"
                      alt="git icon"
                    />
                    Git
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/csharp.png"
                      alt="csharp icon"
                    />
                    C#
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/unity.png"
                      alt="unity icon"
                    />
                    Unity
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/arduino.png"
                      alt="arduino icon"
                    />
                    Arduino
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/wordpress.png"
                      alt="wordpress icon"
                    />
                    Wordpress
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/electronics.png"
                      alt="electronics icon"
                    />
                    Electronics
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 py-3">
                  <span class="badge rounded-pill bg-dark">
                    <img
                      className="skills-icon"
                      src="./images/About Me/skills icons/linux.png"
                      alt="linux icon"
                    />
                    Linux
                  </span>
                  <div class="progress bg-dark">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
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
                    Holder of IIELTS degree with overall band score of{" "}
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="./images/About me/IELTS.jpg"
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
                      Architecture Group Exhibition
                    </h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Issued Jul 2018</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Setavin Art And Architecture Network</p>
                  </div>
                  <p className="ps-5">
                    Member of the Spatial Organization Strategy Architecture
                    group exhibition{" "}
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="https://setavin.com/Kimia_Karimi"
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
                      Architecture Design Process Workshop
                    </h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Issued Sep 2017</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Setavin Art And Architecture Network</p>
                  </div>
                  <p className="ps-5">
                    Discussed topics in these workshops were design processes,
                    Origami in Architecture, Architectural Competitions, etc.
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="./images/About me/Architectural Workshops.pdf"
                  >
                    See credential
                  </a>
                </div>
              </div>
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
            <i className="fa fa-puzzle-piece fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Hobbies</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Playing Tonbak ( An Iranian goblet drum )
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Watching Documentaries ( History, Art, Science )
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Reading Books ( Architecture, History, Classic Novel )
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">
                      Drawing ( Hand-drawing on paper or canvas )
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Dancing and Gymnastics</p>
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
