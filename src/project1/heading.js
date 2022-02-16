import React from "react";
import logo from "../react_logo.png";
import "./style.css";
const Head = () => {
  const headerstyle = {
    padding: "25px",
    textAlign: "center",
    justifyContent: "end",
    cursor: "pointer",
    display: "flex",
    color: "white",
    fontSize: "30px",
    listStyleType: "none",
  };
  const newHeader = () => {
    return (
      <header>
        <nav>
          <ul style={headerstyle}>
            <li>Pricing</li>
            <li>About </li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  };
  const headfunc = () => {
    return (
      <header>
        <nav>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              style={{
                height: "72px",
                width: "65px",
                margin: "10px",
              }}
              alt="react image"
            />{" "}
            <p style={{ fontSize: "22px", color: "black" }}>ReactFacts</p>
          </div>
        </nav>
      </header>
    );
  };
  return (
    <div
      style={{
        height: "100px",

        background: "grey",
        display: "flex",
        justifyContent: "space-between",

        boxShadow:
          "box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;",
      }}
    >
      {headfunc()}
      {newHeader()}
    </div>
  );
};

export default Head;
