import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <h1 className="footer__title">Hiep</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/nqhiep/"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/nqhiep"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Nguyen Quang Hiep. All rights reservered
        </span>
      </div>
    </footer>
  );
};
