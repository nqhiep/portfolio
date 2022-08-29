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
        I am a hardworking and dedicated individual with a great passion for
        becoming a software engineer. I am eager to learn new things to grow and
        further improve my skills.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <SvgSend />
      </a>
    </div>
  );
};
