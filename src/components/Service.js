import React from "react";
import Footer from "./Footer";
import Header from "./Navbar";
import Partners from "./Partners";
import heroImage from "../assets/in-homexray.png";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <>
      <Header />
      <img className={classes["hero-image"]} src={heroImage} alt="" />
      <h1 className={classes["heading-primary"]}>
        SPX provides in home digital x-rays, ultrasounds, Dopplers,
        echocardiograms & EKG exams, including:
      </h1>
      <ul className={classes["services-list"]}>
        <li>Abdominal ultrasounds</li>
        <li>Liver / spleen ultrasounds</li>
        <li>Carotid and thyroid sonograms</li>
        <li>
          Color Doppler studies of the upper and lower extremities, venous &
          arterial
        </li>
        <li>Echocardiograms</li>
        <li>
          All exams are interpreted by board-certified radiologists and
          cardiologists
        </li>
      </ul>
      <p className={classes["main-text"]}>All at the Patient's Bedside!</p>
      <p style={{ color: "#033c96" }}>
        SPX has been providing service throughout the 5 Boroughs, Nassau &
        Suffolk Counties for over 35 years to:
      </p>
      <ul className={classes["services-list"]}>
        <li>Nursing homes</li>
        <li>Assisted living facilities</li>
        <li>Home-bound patients</li>
        <li>Dialysis centers</li>
        <li>Correctional facilities</li>
        <li>Corporate settings</li>
        <li>Tuberculosis testing</li>
        <li>Asbestosis Screening</li>
        <li>Clinics</li>
      </ul>
      <Partners />
      <Footer />
    </>
  );
};

export default Service;
