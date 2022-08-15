import React from "react";
import Counter from "./Counter";
import classes from "./Announcements.module.css";

const Announcements = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes["sub-heading"]}>spx announcements</h2>
      <p className={classes.counter}>
        Over +{<Counter />} exams and counting !!!
      </p>
      <p className={classes.counter}>
        The First 100% All Digital X-Ray / Ultrasound Provider !!!
      </p>
      <p style={{ padding: "1rem" }}>
        Specialty Portable X-Ray specializes in delivering the best In-Home care
        for those looking to find X-Rays and Ultrasounds in the convenience and
        privacy of one's home.
      </p>
      <p className={classes.counter}>
        Avoid Unnecessary Trips To The Hospital Use Specialty Portable X-Ray
      </p>
      <p style={{ padding: "1rem" }}>
        At Specialty Portable X-Ray we provide the very best in Portable X-Ray
        and Ultrasound service on Long Island and the Metropolitan Area.
      </p>
    </div>
  );
};

export default Announcements;
