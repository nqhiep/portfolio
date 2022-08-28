import React from "react";
import { Backend } from "./Backend";
import { Frontend } from "./Frontend";
import "./Skills.scss";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};