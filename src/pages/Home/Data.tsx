import React from "react";
import { SvgHand } from "../../assets/svg";
import { SvgSend } from "../../assets/svg/SvgSend";
import "./Home.scss";

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Nguyễn Quang Hiệp
        <SvgHand />
      </h1>
      <h3 className="home__subtitle">Software Enginerring</h3>
      <p className="home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        aspernatur quos dolorem ipsum voluptas? Deserunt sapiente facere
        impedit, qui necessitatibus in rerum voluptate ullam quasi, assumenda
        ipsum eligendi ipsa beatae?
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <SvgSend />
      </a>
    </div>
  );
};
