import React from "react";
import { SvgScroll } from "../../assets/svg";

export const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <SvgScroll />
        <div className="home__scroll-name">Scroll Down</div>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};
