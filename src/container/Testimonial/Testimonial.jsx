import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";
import { images } from "../../constants";

// testimonials data
const testimonialsData = [
  {
    imgurl: images.jack,
    feedback: "Good Job , would recommend !",
    name: "jack",
    company: "Google",
  },
  {
    imgurl: images.sara,
    feedback:
      "Thank you for your outstanding work! I appreciate your effort and dedication in delivering such excellent service.",
    name: "sara",
    company: "Apple",
  },
];

// brand data
const brandsData = [
  { id: 1, imgUrl: images.amazon, name: "Amazon" },
  { id: 2, imgUrl: images.adidas, name: "Adidas" },
  { id: 3, imgUrl: images.nb, name: "New Balance" },
  { id: 4, imgUrl: images.spotify, name: "Spotify" },
];

const Testimonial = () => {
  // state variables
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonialsData.length && (
        <>
          {/*--- Title------ */}
          <h2 className="head-text">
            <span> Testimonials </span>
          </h2>
          {/*--- testimonial content------ */}
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonialsData[currentIndex].imgurl}
              alt={testimonialsData[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">
                {testimonialsData[currentIndex].feedback}
              </p>
              <div>
                <h4 className="bold-text">
                  {testimonialsData[currentIndex].name}
                </h4>
                <h5 className="p-text">
                  {testimonialsData[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>
          {/*--- testimonial buttons content------ */}
          <div className="app__testimonial-btns app__flex">
            <div
              className="btn-icon app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonialsData.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="btn-icon app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonialsData.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      {/*--- testimonial brand content------ */}
      <div className="app__testimonial-brands app__flex">
        {brandsData.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id} 
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);