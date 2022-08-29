import { Data } from "./Data";
import "./Projects.scss";

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I did</span>

      <div className="projects__container container grid">
        {Data.map(({ name, link }, id) => {
          return (
            <div key={id} className="projects__content">
              <div>
                <i className="uil uil-web-grid projects__icon"></i>
                <h3 className="projects__title">{name}</h3>
              </div>

              <a
                target="_blank"
                href={link}
                className="projects__button"
                rel="noreferrer"
              >
                View More
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
