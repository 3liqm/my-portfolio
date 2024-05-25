import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const profileItems = [
  {
    image: images.about02,
    title: "Frontend Development",
    description:
      "A frontend developer fueled by a passion for crafting functional websites.",
  },
  {
    image: images.about01,
    title: "Web Development",
    description:
      "An adept developer well-versed in all contemporary technologies.",
  },
  {
    image: images.about04,
    title: "Web Enhancement",
    description: "Enhancing and improving the user experience across the web.",
  },
  {
    image: images.about03,
    title: "Modern UI/UX Website",
    description: "Precision in the design and implementation of all websites.",
  },
];

function About() {
  return (
    <>
      {/* ----Title-----*/}
      <h2 className="head-text" style={{ marginTop: 50 }}>
        Excellent <span> apps</span> <br /> means{" "}
        <span>excellent business</span>{" "}
      </h2>
      {/* ----content-----*/}
      <div className="app__profiles">
        {profileItems.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={item.image} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
