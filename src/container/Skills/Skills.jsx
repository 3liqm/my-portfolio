import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const Skills = () => {
  //state variables
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  //skils data
  const fakeSkillsData = [
    { name: "CSS", bgColor: "#color_code", icon: images.css },
    { name: "HTML", bgColor: "#color_code", icon: images.html },
    { name: "JAVASCRIPT", bgColor: "#color_code", icon: images.javascript },
    { name: "NEXT.JS", bgColor: "#color_code", icon: images.next },
    { name: "REACT.JS", bgColor: "#color_code", icon: images.react },
    { name: "REDUX", bgColor: "#color_code", icon: images.redux },
    { name: "SASS", bgColor: "#color_code", icon: images.sass },
    { name: "API", bgColor: "#color_code", icon: images.api },
    { name: "GIT", bgColor: "#color_code", icon: images.git },
  ];
// experianse data
  const fakeExperiencesData = [
    {
      year: "2018 - 2022",
      works: [
        {
          name: "My Study",
          company: "",
          desc: "University of Al-Qadisiah Faculty of Computer Scince and Information Technology"
        
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "My Work",
          company: "",
          desc: "I am a Front-end Developer specializing in translating ideas and designs into interactive and appealing user interfaces. I use programming languages such as HTML, CSS, and JavaScript to build web pages and enhance the user experience. My work involves ensuring compatibility across various devices and ensuring high performance for applications. My expertise combines creativity in design with technical skills to deliver an excellent user experience.",
        },
      ],
    },
  ];

  useEffect(() => {
    setSkills(fakeSkillsData);
    setExperiences(fakeExperiencesData);
  }, []);

  return (
    <>
    {/*-----Title ----- */}
      <h2 className="head-text">
        Skills & <span> Experiences </span>
      </h2>
    {/*-----skills and experiance content ----- */}
     {/*-----skills  content ----- */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__skills-item-icon app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                {/*-----icons ----- */}
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/*-----experians content ----- */}
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <span id={work.name} className="skills-desc">
                      {work.desc}
                    </span>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
