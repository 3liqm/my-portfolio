import React, { useState, useEffect } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./app.scss";

const App = () => {
  //Dark mode 
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
