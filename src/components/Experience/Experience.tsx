import "./Experience.scss";

export const Experiences = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Education and Experience</span>

      <div className="experience__container container">
        <div className="experience__tabs">
          <div className="experience__active">
            <i className="uil uil-graduation-cap experience__icon"></i>
            Education
          </div>
        </div>

        <div className="experience__sections">
          <div className="experience__content-active">
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Intern</h3>
                <span className="experience__subtitle">
                  Symphony Creative Solutions
                </span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 02/2022 - 06/2022
                </div>
              </div>

              <div>
                <span className="experience__rouder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
            <div className="experience__data">
              <div></div>

              <div>
                <span className="experience__rouder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">
                  Bachelor of Software Engineering
                </h3>
                <span className="experience__subtitle">
                  University Of Science
                </span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
