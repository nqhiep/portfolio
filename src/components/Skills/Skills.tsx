import { Data } from "./Data";
import "./Skills.scss";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__box">
            <div className="skills__group">
              {Data.map(({ name, level }, id) => {
                return (
                  <div key={id} className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills__name">{name}</h3>
                      <span className="skills__level">{level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
