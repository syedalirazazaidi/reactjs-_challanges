import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: " -20px 20px",
        color: "#FFF",
        padding: "10px",
        width: "650px",
        height: "90px",
        margin: "30px auto",

        background:
          "linear-gradient(90deg, rgba(1,0,36,1) 0%, rgba(103,34,128,1) 35%, rgba(0,210,250,1) 100%)",
      }}
    >
      <h2>Meme Generator</h2>
      <h3>React Practice</h3>
    </header>
  );
};

export default Header;
