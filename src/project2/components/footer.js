import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={faTwitter} className="icon" />
      <FontAwesomeIcon icon={faFacebook} className="icon" />

      <FontAwesomeIcon icon={faInstagram} className="icon" />

      <FontAwesomeIcon icon={faGithub} className="icon" />
    </footer>
  );
};

export default Footer;
