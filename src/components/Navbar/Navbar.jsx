import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const Navbar = ({ theme, setTheme }) => {
  //state variable to open and close navbar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle between light and dark theme
  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <nav className="app__navbar">
      {/* ----logo-----*/}
      <div className="app__navbar-logo">
        <h1 className="navbar-logo">Ali</h1>
      </div>
      {/* navbar and responsive navbar */}
      <ul className={`app__navbar-links ${isOpen ? "open" : ""}`}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} onClick={() => setIsOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* Dark Mode Icons */}
      <div className="navbar-icons">
        {/* Dark Mode Icons */}
        <div
          className="toggle-mode"
          onClick={() => {
            toggleMode();
          }}
        >
          {/* switch Dark Mode Icons */}
          {theme === "light" ? (
            <FaMoon size={24} color="black" />
          ) : (
            <IoMdSunny size={26} color="white" />
          )}
        </div>
        {/* open and close navbar Icons */}
        <div className="app__navbar-menu">
          <HiMenuAlt4 color="white" size={20} onClick={() => setIsOpen(true)} />

          {isOpen && (
            <div>
              <HiX color="white" size={10} onClick={() => setIsOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
