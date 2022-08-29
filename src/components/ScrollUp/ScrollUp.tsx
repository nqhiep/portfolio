import "./ScrollUp.scss";

export const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrolllUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrolllUp?.classList.add("show-scroll");
    } else {
      scrolllUp?.classList.remove("show-scroll");
    }
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};
