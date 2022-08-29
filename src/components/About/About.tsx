import AboutImg from "../../assets/images/about.jpg";
import CV from "../../assets/CV_NGUYEN-QUANG-HIEP.pdf";
import "./About.scss";
import { Info } from "./Info";
import { SvgFile } from "../../assets/svg";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis sequi quia sapiente sit quidem nulla. Quisquam deleniti
            vel asperiores, suscipit et nobis, similique, dolores sint accusamus
            laborum tempora non dolor est voluptates culpa modi! Obcaecati,
            perspiciatis assumenda! Deserunt dolorem consectetur repellendus,
            quis, sit reprehenderit voluptatibus, illum adipisci quam aliquid
            accusamus?
          </p>
          <a href={CV} download="" className="button button--flex">
            Download CV
            <SvgFile />
          </a>
        </div>
      </div>
    </section>
  );
};
