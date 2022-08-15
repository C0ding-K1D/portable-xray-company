import React from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Navbar";
import classes from "./ContactComponent.module.css";

const ContactComponent = () => {
  return (
    <>
      <Header />
      <h1 className={classes["heading-primary"]}>Contact us</h1>
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactComponent;
