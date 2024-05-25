import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import "./Footer.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  //state variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
       {/* ----Title-----*/}
      <h2 className="head-text">
        Take a coffee & <span> chat with me </span>
      </h2>
      {/* ----content-----*/}
      <div className="app__footer-cards">
        {/* ----contact email and whats app-----*/}
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:mr3limalik@gmail.com" className="p-text">
            Write Email{" "}
          </a>
          <IoIosArrowRoundForward size={24} color="white" />
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+964 07816234365" className="p-text">
            Call Me{" "}
          </a>
          <IoIosArrowRoundForward size={24} color="white" />
        </div>
      </div>
      {/* ----informations inputs-----*/}
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
