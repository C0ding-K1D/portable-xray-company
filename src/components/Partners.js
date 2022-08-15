import React from "react";
import classes from "./Partners.module.css";
import nyfsha from "../assets/nyfsha.png";
import intercounty from "../assets/intercounty.png";
import hippa from "../assets/hippa.png";
import esaal from "../assets/esaal.png";
import arrt from "../assets/arrt.png";
import apdaLogo from "../assets/apdaLogo.png";

const Partners = () => {
  return (
    <>
      <h1>A Proud Member</h1>
      <p>of</p>
      <img className={classes["apda-image"]} src={apdaLogo} alt="" />
      <div className={classes.container}>
        <img
          className={classes.logos}
          style={{ marginRight: "2rem" }}
          src={hippa}
          alt=""
        />
        <img
          className={classes.logos}
          style={{ marginRight: "2rem" }}
          src={intercounty}
          alt=""
        />
        <img className={classes.logos} src={esaal} alt="" />
      </div>
      <div className={classes.container} style={{ marginTop: "-5rem" }}>
        <img className={classes.logos} src={nyfsha} alt="" />
        <img className={classes.logos} src={arrt} alt="" />
      </div>
    </>
  );
};

export default Partners;
