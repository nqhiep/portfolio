import React from "react";
import "./Home.scss";

export const Social = () => {
  return (
    <div>
      <div className="home__social">
        <a href="/" target="_blank" className="home__social-icon">
          <i className="uil uil-instagram"></i>
        </a>
        <a href="/" target="_blank" className="home__social-icon">
          <i className="uil uil-dribbble"></i>
        </a>
        <a href="/" target="_blank" className="home__social-icon">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </div>
  );
};
