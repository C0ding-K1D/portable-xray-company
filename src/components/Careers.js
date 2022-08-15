import React from "react";
import Footer from "./Footer";
import Header from "./Navbar";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "./Careers.module.css";

const Careers = () => {
  return (
    <>
      <Header />
      <h1 className={classes["heading-primary"]}>We Are Hiring!</h1>
      <h2 className={classes["sub-heading"]}>
        Specialty Portable X-Ray is always looking for professionals to join our
        team.
      </h2>
      <p style={{ textAlign: "center" }}>
        Click on a career below to find out more about the position
      </p>
      <p style={{ textAlign: "center" }}>
        Email us at Naresa@SpecialtyXray.com
      </p>
      <p style={{ textAlign: "center" }}>or</p>
      <h1
        className={classes["heading-primary"]}
        style={{ marginTop: "-.5rem", marginBottom: "2.5rem" }}
      >
        Give us a call 888-XRAY-NOW
      </h1>
      <Tabs
        style={{
          boxShadow: "0 0 .5rem rgba(0,0,0,0.25)",
          overflow: "scroll",
          margin: "3rem",
        }}
      >
        <TabList
          style={{
            backgroundColor: "#033c96",
            // borderRadius: ".4rem",
            color: "#fff",
          }}
        >
          <Tab style={{ marginLeft: ".5rem", padding: ".8rem" }}>X-Ray</Tab>
          <Tab style={{ padding: ".8rem" }}>Ultrasound</Tab>
        </TabList>

        <TabPanel
          style={{
            backgroundColor: "#fff",
            paddingTop: "1rem",
          }}
        >
          <h1 className={classes.title}>Portable X-Ray Technologist</h1>
          <h1 className={classes["heading-primary"]}>
            Full and Part-Time Positions Available!
          </h1>
          <p style={{ margin: "1rem 3rem" }}>
            <span style={{ fontWeight: "bold" }}>Specialty Portable X-Ray</span>{" "}
            has been providing X-Ray service to patient's in need since 1978. At
            SPX, we pride ourselves on our accountability and willingness to get
            the job done. We are searching for enthusiastic and friendly
            professionals who are eager to succeed and grow with our
            organization. As a pay by the case employer you can be confident
            that your hard-work, dedication extra efforts are rewarded.
          </p>
        </TabPanel>
        <TabPanel
          style={{
            backgroundColor: "#fff",
            paddingTop: "1rem",
          }}
        >
          <h1 className={classes.title}>Portable Ultrasound Technologist</h1>
          <h1 className={classes["heading-primary"]}>
            Full and Part-Time Positions Available!
          </h1>
          <p style={{ margin: "1rem 3rem" }}>
            <span style={{ fontWeight: "bold" }}>Specialty Portable X-Ray</span>{" "}
            has been providing X-Ray service to patient's in need since 1978. At
            SPX, we pride ourselves on our accountability and willingness to get
            the job done. We are searching for enthusiastic and friendly
            professionals who are eager to succeed and grow with our
            organization. As a pay by the case employer you can be confident
            that your hard-work, dedication extra efforts are rewarded.
          </p>
        </TabPanel>
      </Tabs>
      <Footer />
    </>
  );
};

export default Careers;
