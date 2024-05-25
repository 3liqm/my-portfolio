import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div>
    {/*----header content ----- */}
    <div className="app__header app__flex ">
      {/*----header content left----- */}
      <div className="flex-left">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Ali</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Web Front End Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.next, images.javascript, images.react].map(
            (circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            )
          )}
        </motion.div>
      </div>
      {/*----header content right----- */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
    </div>
    {/*----social midea disappeard in 500px----- */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="app__header-social">
        {" "}
        <div>
          {" "}
          <a href="https://instagram.com/3liqm">
            <BsInstagram />{" "}
          </a>{" "}
        </div>{" "}
        <div>
          {" "}
          <a href=" https://www.linkedin.com/in/3liqm">
            <FaLinkedinIn />{" "}
          </a>{" "}
        </div>{" "}
        <div>
          {" "}
          <a href="https://github.com/3liqm">
            <FaGithub />{" "}
          </a>{" "}
        </div>{" "}
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
