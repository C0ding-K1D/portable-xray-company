import React from "react";
import Footer from "./Footer";
import Header from "./Navbar";
import Partners from "./Partners";
import classes from "./About.module.css";
import crossImg from "../assets/nurses.png";

const About = () => {
  return (
    <section>
      <Header />
      <h1 className={classes["heading-primary"]}>
        Specialty Portable X-Ray, Inc. Founded 1978
      </h1>
      <div className={classes.container}>
        <img className={classes["cross-image"]} src={crossImg} alt="" />
        <p className={classes["opening-text"]}>
          <span>Paul J. Fowler, RT, LRT</span> began his x-ray career in 1978
          after graduating, with high honors, from Albany Memorial Hospital
          School of Radiologic Technology. Shortly thereafter, Mr. Fowler
          founded Specialty Portable X-Ray, Inc. During the 35 year history, SPX
          has initiated many major changes in the portable x-ray industry.
          Innovating and adapting to new technologies as soon as they emerged
          has kept Specialty Portable x-ray at the forefront of the x-ray
          industry.
        </p>
      </div>
      <p className={classes["main-text"]}>
        In 1990, Specialty Portable X-Ray was the first to design and offer
        mobile developing units, x-rays could now be developed immediately at
        remote locations which allowed for consistent, high-quality x-ray films,
        much faster results than industry standards and for the first time,
        allowed copies of x-rays to be transported with the patient via
        ambulance in emergent situations.
      </p>
      <p className={classes["main-text"]}>
        In 1993, Specialty Portable X-Ray was the first company to combine
        mobile film developing with teleradiology, the ability to transmit
        x-rays over phone lines, allowing for near-instant results.
      </p>
      <p className={classes["main-text"]}>
        In 2000, Speciality Portable X-Ray was the first portable x-ray provider
        to invest in and utilize CR (computer radiology), which allowed for
        comprehensive archiving of all patient images, and immediate review of
        images from any online location. Initially intended for stationary, or
        non-mobile settings, CR quickly became the industry standard following
        Specialty Portable X-Ray's adoption of this technology.
      </p>
      <p className={classes["main-text"]}>
        In 2010, Specialty Portable X-Ray again upgraded and went 100%
        direct-digital capture taking advantage of the reliability and speed of
        the internet. All x-rays were now being transmitted instantly and
        securely in seconds from the patient's bedside.
      </p>
      <p className={classes["main-text"]}>
        In 2011, Specialty Portable X-Ray began providing emergency exam results
        within minutes of completed exams. Exam images are transmitted
        electronically from the patient's bedside to waiting radiologists who
        provide near-instant exam results. This was and still is unprecedented
        in the portable x-ray industry and is even faster than many hospital
        turnaround times to this day!
      </p>
      <p className={classes["main-text"]}>
        In 2014, SPX implemented the use of its custom EHR. (electronic health
        records) software which will enable doctors to order and view exams
        instantly from any internet-connected device 24 hours a day, streaming
        vital information directly from the patient's bedside.
      </p>
      <p className={classes["main-text"]}>
        IIn 2017, Specialty Portable X-Ray now provides service in all of New
        Jersey and is in the process of expansion to Connecticut, Pennsylvania
        and Florida. Exam images are transmitted electronically from the
        patient's bedside to waiting radiologists who provide near-instant exam
        results. This was and still is unprecedented in the portable x-ray
        industry and is even faster than many hospital turnaround times to this
        day!
      </p>
      <h1 className={classes["heading-secondary"]}>
        SPECIALTY PORTABLE X-RAY IS COMMITTED TO REMAINING ON THE FOREFRONT OF
        RADIOGRAPHIC TECHNOLOGY
      </h1>
      <Partners />
      <Footer />
    </section>
  );
};

export default About;
