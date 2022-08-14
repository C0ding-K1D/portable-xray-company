import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/portable_x-ray_logo.png";
import classes from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes["logo-container"]}>
          <img className={classes.logo} src={logo} alt="" />
          <Link to="/home" className={classes["margin-top"]}>
            <button className={classes.button}>Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
};
