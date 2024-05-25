import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// Social Media (css in app.scss)
const SocialMedia = () => (
  <div className="app__social">
       {" "}
    <div>
           {" "}
      <a href="https://instagram.com/3liqm">
                <BsInstagram />
             {" "}
      </a>
         {" "}
    </div>
       {" "}
    <div>
           {" "}
      <a href=" https://www.linkedin.com/in/3liqm">
                <FaLinkedinIn />
             {" "}
      </a>
         {" "}
    </div>
       {" "}
    <div>
           {" "}
      <a href="https://github.com/3liqm">
                <FaGithub />
             {" "}
      </a>
         {" "}
    </div>
     {" "}
  </div>
);

export default SocialMedia;
