import React from "react";
import myImg from "./mypicnew.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Body from "./body";
const Information = () => {
  return (
    <div className="main--back">
      <img src={myImg} width="287px" height="377px" />
      <div
        style={{
          backgroundColor: "#1A1B21",
          marginTop: "-24.7px",
          width: "287px",
          height: "369px",
          textAlign: "center",
          lineHeight: "5px",
          paddingTop: "20px ",
        }}
      >
        <h2 style={{ color: "#FFFFFF", fontSize: 25 }}>Ali Raza</h2>
        <h3 style={{ color: "#F3BF99" }}>Frontend Developer</h3>
        <p style={{ color: "#F5F5F5" }}>laurasmith.website</p>
        <div style={{ margin: "20px" }}>
          <button
            style={{
              border: "none",
              width: "97px",
              height: "27px",
              color: "#374151",
              borderRadius: "2px",
              margin: "10px",
              padding: "5px",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ padding: "0px 8px" }} />
            Email
          </button>
          <button
            style={{
              width: "97px",
              height: "27px",
              backgroundColor: "#5093E2",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ padding: "0px 10px" }}
            />
            Linkedin
          </button>
        </div>
        <div>
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Information;
