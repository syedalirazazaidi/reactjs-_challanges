import React from "react";
import airbnb from "./new.png";
import "../styles.css";
const Navbar = () => {
  return (
    <nav>
      <img src={airbnb} alt="airbnb" className="logo" />
    </nav>
  );
};

export default Navbar;
