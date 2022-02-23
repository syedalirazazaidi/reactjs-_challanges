import React from "react";
import relogo from "./logo_react.png";
import "./styles.css";
const NavBar = () => {
  const [light, dark] = React.useState(true);
  const togglebutton = () => {
    dark(!light);
  };

  return (
    <nav>
      <img src={relogo} alt="reactlogo" />
      {/* <h3>ReactFonts</h3>
      <h4>React Course - Project 1</h4> */}
      <div>
        <button type="button" onClick={togglebutton}></button>
        {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
        <button type="button">Dark</button>
        {/* <label
          style={{ background: light && "red" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        ></label> */}
      </div>
    </nav>
  );
};

export default NavBar;
