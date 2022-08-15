import React from "react";
import classes from "./Button.module.css";

function Button({ children }) {
  return (
    <a
      className={classes.link}
      href="https://www.dropbox.com/sm/password?cont=https%3A%2F%2Fwww.dropbox.com%2Fsh%2Fhoxsrdrfi6vc8rm%2FAAAXIeqnpmVMIJxw6H01X-eKa%3Fdl%3D0&content_id=AU3LGJgZGNT_czFJxFWPOlk7hbc5LDDYjk4"
    >
      <button className={classes["custom-btn"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 528 512"
          width="40"
          fill="#fff"
          style={{ marginRight: ".4rem" }}
          className={classes["dropbox-icon"]}
        >
          <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z" />
        </svg>
        {children}
      </button>
    </a>
  );
}

export default Button;
