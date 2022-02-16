import React from "react";
import relogo from "./logo_react.png";
import "./styles.css";
const NavBar = () => {
  return (
    <nav>
      <img src={relogo} alt="reactlogo" />
      <h3>ReactFonts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
};

export default NavBar;
