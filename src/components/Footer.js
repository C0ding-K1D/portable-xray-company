import React from "react";
import classes from "./Footer.module.css";
import navLogo from "../assets/portable_x-ray_nav-logo-copy.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={classes["footer-container"]}
      //   style={{
      //     backgroundColor: "#ddd",
      //     width: "100vw",
      //     height: "15rem",
      //     borderTop: ".2rem solid #033c96",
      //   }}
    >
      <div className={classes.address}>
        <img className={classes["footer-nav-logo"]} src={navLogo} alt="" />
        <p className={classes["footer-text"]}>
          410 Jericho Turnpike, Suite 320 Jericho, New York 11753
        </p>
        <p className={classes["footer-text"]}>1-888-XRAY-NOW</p>
        <p className={classes["footer-text"]}>Fax: 1-516-897-3915</p>
        <p className={classes["footer-text"]}>Info@888XrayNow.com</p>
      </div>
      <div>
        <ul className={classes["footer-nav-container"]}>
          <Link to="/home" className={classes["footer-nav-link"]}>
            Home
          </Link>
          <Link to="/about" className={classes["footer-nav-link"]}>
            About
          </Link>
          <Link to="/services" className={classes["footer-nav-link"]}>
            Services
          </Link>
          <Link to="/media" className={classes["footer-nav-link"]}>
            Media
          </Link>
        </ul>
      </div>
      <div>
        <ul className={classes["footer-nav-container_2"]}>
          <Link to="/faq" className={classes["footer-nav-link"]}>
            FAQ
          </Link>
          <Link to="/contact" className={classes["footer-nav-link"]}>
            Contact
          </Link>
          <Link to="/careers" className={classes["footer-nav-link"]}>
            Careers
          </Link>
          <li to="/" className={classes["footer-nav-link"]}>
            Order Exam
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
