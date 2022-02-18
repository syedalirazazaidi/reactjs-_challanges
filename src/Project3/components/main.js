import React from "react";
import danc from "./danc.png";
import "../styles.css";
const Main = () => {
  return (
    <section className="hero">
      <img src={danc} />
      <h1 className="hero-header">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Main;
