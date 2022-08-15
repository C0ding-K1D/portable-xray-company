import React, { useState } from "react";
import Header from "./Navbar";
import classes from "./HomeComponent.module.css";
import heroImage from "../assets/XRayatHome.png";
import apdaLogo from "../assets/apdaLogo.png";
import Announcements from "./Announcments";
import Partners from "./Partners";
import Footer from "./Footer";

export const HomeComponent = () => {
  return (
    <>
      <Header />
      <section>
        <img className={classes["hero-image"]} src={heroImage} alt="" />
        <h1 className={classes["heading-primary"]}>
          Specialty Portable X-Ray, Inc. is here to help
        </h1>

        <p className={classes["main-text"]}>
          SPX is a medical diagnostic X-Ray and Ultrasound imaging company with
          a specialization in In-Home care.We provide services to private homes,
          nursing facilities and anyone who cannot get to a hospital due to
          their physical or psychological limitations. Our state-of-the-art
          technology allows us to be faster, safer and more accurate than
          available alternatives.
        </p>
        <Announcements />
        {/* <img className={classes["apda-image"]} src={apdaLogo} alt="" /> */}
        <Partners />
        <Footer />
      </section>
    </>
  );
};
