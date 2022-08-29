import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SvgSend } from "../../assets/svg/SvgSend";
import "./Contact.scss";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current == null) return;

    emailjs
      .sendForm(
        "service_talf2mr",
        "template_jmdfbvf",
        form.current,
        "T_vJG1RVimzwJrwUv"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                nguyenquanghiep1209@gmail.com
              </span>
              <a
                href="mailto:nguyenquanghiep1209@gmail.com"
                className="contactbutton"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxs-phone contact__card-icon"></i>

              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">033.3875.982</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your Project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write your message..."
              />
            </div>

            <button className="button button--flex">
              Send Message
              <SvgSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
