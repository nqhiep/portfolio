import React, { useState } from "react";
import "./Header.scss";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header?.classList.add("sroll-header");
    } else {
      header?.classList.remove("sroll-header");
    }
  });

  const [toggle, setToggle] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={` ${
                  activeNav === "#home" ? "nav__link active-link" : "nav__link "
                } `}
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={` ${
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link "
                } `}
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className={` ${
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link "
                } `}
                onClick={() => setActiveNav("#projects")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#experience"
                className={` ${
                  activeNav === "#experience"
                    ? "nav__link active-link"
                    : "nav__link "
                } `}
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav__icon"></i> Experience
              </a>
            </li>
            <li
              className={` ${
                activeNav === "#contact"
                  ? "nav__link active-link"
                  : "nav__link "
              } `}
              onClick={() => setActiveNav("#contact")}
            >
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
