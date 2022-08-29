import React from "react";
import "./Home.scss";

export const Social = () => {
  return (
    <div>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/nqhiep/"
          target="_blank"
          className="home__social-icon"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <a
          href="https://github.com/nqhiep"
          target="_blank"
          className="home__social-icon"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </div>
  );
};
