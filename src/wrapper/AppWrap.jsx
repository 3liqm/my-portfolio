import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
// social media and navigation dots in left and right side (css in app.scss)
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2024 ALI</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
