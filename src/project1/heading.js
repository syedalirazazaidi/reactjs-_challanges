import React from "react";
import logo from "../react_logo.png";
const Head = () => {
  return (
    <div style={{ height: "100px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
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
      <p
        style={{
          display: "flex",
          justifyContent: "right",
          margin: "-50px",
          marginRight: "60px",
          color: "black",
          letterSpacing: "0.6px",
        }}
      >
        React Course - Project 1
      </p>
    </div>
  );
};

export default Head;
