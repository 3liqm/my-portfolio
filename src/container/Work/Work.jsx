import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  //state variables
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  //work data
  const myData = [
    {
      title: "E-commerce Website ",
      description:
        "Responsive men's, women's and children's clothing store. Created by React js and css",
      tags: ["React JS"],
      img: images.shop,
      projectLink: "http://shop-ecommerce.surge.sh",
      codeLink: "https://github.com/3liqm/shop-ecommerce.git",
    },
    {
      title: "E-commerce Website",
      description:
        "Responsive online store with recalled products from API. Created by React js and Tailwind css",
      tags: ["React JS"],
      img: images.shop2,
      projectLink: "http://shop-react.surge.sh",
      codeLink: "https://github.com/3liqm/react-shop.git",
    },
    {
      title: "Online Shop Website",
      description:
        "Responsive online shop with recalled products from API. Created by Next js and css",
      tags: ["Next JS"],
      img: images.shop3,
      projectLink: "https://next-js-shop-xi.vercel.app/",
      codeLink: "https://github.com/3liqm/next-js-shop.git",
    },
    {
      title: "Orebi Shop Website",
      description:
        "Responsive online shop with recalled products from API. Created by React js and css",
      tags: ["React JS"],
      img: images.shop4,
      projectLink: "https://orebi-ecommerce-two.vercel.app/",
      codeLink: "https://github.com/3liqm/Orebi-Ecommerce",
    },
  ];

  useState(() => {
    setFilterWork(myData);
  }, []);
// fellter data 
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(myData);
      } else {
        setFilterWork(myData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
     {/*----work content----- */}
     {/*----title----- */}
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
     {/*----work fillter content----- */}
      <div className="app__work-filter">
        {["React JS", "Next JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
         {/*----work filtter results content----- */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.img} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                 {/*----works website----- */}
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {/*----works github----- */}
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
                {/*----work cart desc----- */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
