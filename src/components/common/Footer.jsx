import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-center text-white pt-4">
      <section>
        <div className="row">
          <div className="col-12 col-lg-5 pb-3">
            <h5 className="text-uppercase pb-3">Social Media</h5>
            <a
              className="btn btn-outline-light btn-floating m-1 social-btn"
              href="mailto: jirofty76@gmail.com"
              target="__blank"
              role="button"
            >
              <i className="fa fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1 social-btn"
              href="https://www.instagram.com/jiiimiiij/"
              target="__blank"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1 social-btn"
              href="https://www.linkedin.com/in/atta-jirofty/"
              target="__blank"
              role="button"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1 social-btn"
              href="https://t.me/atta_ji"
              target="__blank"
              role="button"
            >
              <i className="fa fa-telegram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1 social-btn"
              href="https://github.com/attajey"
              target="__blank"
              role="button"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="col-12 col-lg-2 pt-3">
            <img
              className="gif-footer"
              src="images/dina.gif"
              alt="Footer Gif"
            />
          </div>
          <div className="col-12 col-lg-5 pt-3">
            <h5 className="text-uppercase pb-3 ">Quick Access</h5>
            <ul className="list-unstyled pb-3 ">
              <li className="p-2">
                <NavLink to="/" className="footer-quick-link">
                  Home
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/projects" className="footer-quick-link">
                  Projects
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/about" className="footer-quick-link">
                  About Me
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/contact" className="footer-quick-link">
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />

      <section className="row text-center">
        <div className="col-12">
          <a
            className="text-info"
            href="https://github.com/attajey"
            target="__blank"
          >
            <p className="btn btn-dark">
              <i className="fa fa-copyright fa-flip-horizontal"></i>
              &nbsp;COPYLEFT &nbsp;2021 &nbsp;ATTA JIROFTY
            </p>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
