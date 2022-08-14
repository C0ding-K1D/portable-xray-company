import { useState } from "react";
import { Link } from "react-router-dom";

import navLogo from "../assets/portable_x-ray_nav-logo-copy.png";
import classes from "./Navbar.module.css";
import Button from "./Button";
import Dropdown from "./Dropdown";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <header>
      <nav className={classes.nav}>
        <div>
          <Link to="/">
            <img className={classes["navbar-logo"]} src={navLogo} alt="" />
          </Link>
        </div>
        <div className={classes["nav-link_container"]}>
          <ul
            className={click ? classes["nav-list active"] : classes["nav-list"]}
            onClick={closeMobileMenu}
          >
            <li className={classes["nav-item"]}>
              <Link
                to="/home"
                className={classes["nav-link"]}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={classes["nav-item"]} onMouseEnter={onMouseEnter}>
              <Link
                to="/home"
                style={{ display: "flex" }}
                className={classes["nav-link"]}
                onClick={closeMobileMenu}
              >
                About
                <i
                  className="fas fa-caret-down"
                  style={{ marginLeft: ".3rem" }}
                />
                {dropdown && <Dropdown onMouseLeave={onMouseLeave} />}
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/media"
                className={classes["nav-link"]}
                onClick={closeMobileMenu}
              >
                Media
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/faq"
                className={classes["nav-link"]}
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/contact"
                className={classes["nav-link"]}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/careers"
                className={classes["nav-link"]}
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>
          </ul>
          <div onClick={handleClick}>
            {/* <Link
              to="/login"
              className={classes["nav-links-mobile"]}
              onClick={closeMobileMenu}
            >
              Login
            </Link> */}
            <Button />
            <div className={classes.hamburger}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

{
  /* <div className={classes["nav-link_container"]}>
          <ul className={classes["nav-list"]}>
            <li>
              <Link to="/home" className={classes["nav-link"]}>
                Home
              </Link>
            </li>
            <li className={classes["nav-dropdown"]}>
              <Link to="/about" className={classes["nav-link"]}>
                About
              </Link>
            </li>
            {/* <ul>
            <li>History</li>
            <li>Services</li>
          </ul> */
}
{
  /* <li>
              <Link to="/home" className={classes["nav-link"]}>
                Media
              </Link>
            </li>
            <li>
              <Link to="/home" className={classes["nav-link"]}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/home" className={classes["nav-link"]}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/home" className={classes["nav-link"]}>
                Careers
              </Link>
            </li>
          </ul>
          <div className={classes.hamburger} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div> */
}
