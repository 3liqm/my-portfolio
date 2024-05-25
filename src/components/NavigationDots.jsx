import React from "react";
//Navication Dots (css in app.scss)
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#a6cdcf" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
