import React, { useState } from "react";
import { Navbar } from "./Navbar";
import classes from "./HomeComponent.module.css";
import heroImage from "../assets/XRayatHome.png";
import apdaLogo from "../assets/apdaLogo.png";

export const HomeComponent = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* <h1>Specialty Portable X-Ray, Inc.</h1> */}
        <img className={classes["hero-image"]} src={heroImage} alt="" />

        <p className={classes["main-text"]}>
          SPX is a medical diagnostic X-Ray and Ultrasound imaging company with
          a specialization in In-Home care.We provide services to private homes,
          nursing facilities and anyone who cannot get to a hospital due to
          their physical or psychological limitations. Our state-of-the-art
          technology allows us to be faster, safer and more accurate than
          available alternatives.
        </p>
        <h1>A Proud Member</h1>
        <p>of</p>
        <img className={classes["apda-image"]} src={apdaLogo} alt="" />
      </section>
    </>
  );
};
