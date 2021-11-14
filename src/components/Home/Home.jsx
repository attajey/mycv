import React, { Fragment } from "react";
import Typer from "react-animated-typer";
import { NavLink } from "react-router-dom";
const Home = ({ title }) => {
  document.title = "Home";
  return (
    <Fragment>
      <section className="row text-center">
        <div className="col-12 p-0">
          <img
            className="pt-2 gif-menu"
            src="images/skull-lap.gif"
            alt="Architect Gif"
          />
          <h1 className="">Howdy</h1>
          <h3>
            <div className="pt-3 fs-3">
              <Typer dataText={["I'm Atta Jirofty", "Call Me Jimi"]} />
            </div>
          </h3>
          <div className="row justify-content-center">
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <p className="pt-5 px-3 lh-lg fs-5">
                  A highly focused and organized Front-end developer, trying to
                  become a full stack developer and a professional game
                  developer.
                  <br />
                  Acutely interested in coding and programming and love spending
                  all day behind my laptop.
                  <br />
                  Intrigued by building IoT devices and DIYs for fun.
                </p>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <NavLink className="p-1" to="/projects">
                  <button type="button" className="btn btn-dark mb-5">
                    Checkout My Projects
                  </button>
                </NavLink>
                <a
                  className="p-1"
                  href="https://github.com/attajey"
                  target="__blank"
                >
                  <button type="button" className="btn btn-dark mb-5">
                    Checkout My GitHub repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row text-center">
        <div className="col-12 gif-container ">
          {/* <img className="img-fluid" src="images/gif.gif" alt="Architect Gif" /> */}
          {/* <img
            className="img-fluid"
            src="images/test gifs/1.gif"
            alt="Architect Gif"
          /> */}
          {/* <img
            className="img-fluid"
            src="images/test gifs/2.gif"
            alt="Architect Gif"
          /> */}
          {/* <img
            className="img-fluid"
            src="images/test gifs/3.gif"
            alt="Architect Gif"
          /> */}

          <img
            className="img-fluid"
            src="images/test gifs/5.gif"
            alt="Architect Gif"
          />

          {/* 
          <img
            className="img-fluid"
            src="images/giphy.gif"
            alt="Architect Gif"
          /> */}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
