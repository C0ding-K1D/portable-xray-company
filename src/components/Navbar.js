import { useState } from "react";
import { Link } from "react-router-dom";

import navLogo from "../assets/portable_x-ray_nav-logo-copy.png";
import classes from "./Navbar.module.css";
import Button from "./Button";
import Dropdown from "./Dropdown";
import TabComponent from "./Tabs";

const Header = () => {
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const hideModalHandler = () => {
    setShowModal(false);
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
                className={classes["header-nav-link"]}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={classes["nav-item"]} onMouseEnter={onMouseEnter}>
              <Link
                to="/about"
                style={{ display: "flex" }}
                className={classes["header-nav-link"]}
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
                className={classes["header-nav-link"]}
                onClick={closeMobileMenu}
              >
                Media
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/faq"
                className={classes["header-nav-link"]}
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/contact"
                className={classes["header-nav-link"]}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/careers"
                className={classes["header-nav-link"]}
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>
          </ul>
          <div>
            {showModal && <TabComponent onClick={hideModalHandler} />}
            <button className={classes["exam-btn"]} onClick={showModalHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                fill="#5cabff"
                className={classes.icon}
              >
                <path d="M160 320h12v16c0 8.875 7.125 16 16 16h40c8.875 0 16-7.125 16-16V320H256c17.62 0 32-14.38 32-32V64c0-17.62-14.38-32-32-32V16C256 7.125 248.9 0 240 0h-64C167.1 0 160 7.125 160 16V32C142.4 32 128 46.38 128 64v224C128 305.6 142.4 320 160 320zM464 448h-1.25C493.2 414 512 369.2 512 320c0-105.9-86.13-192-192-192v64c70.63 0 128 57.38 128 128s-57.38 128-128 128H48C21.5 448 0 469.5 0 496C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16C512 469.5 490.5 448 464 448zM104 416h208c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-208C99.63 384 96 387.6 96 392v16C96 412.4 99.63 416 104 416z" />
              </svg>
              <p className={classes["orderBtn-text"]}>Order</p>
              <p className={classes["orderBtn-text_2"]}>Exam</p>
            </button>
            <Button className={classes["login-btn"]}>
              <p className={classes["btn-text"]}>Login</p>
              <p className={classes["btn-text_2"]}>Dropbox</p>
            </Button>
            <div className={classes.hamburger} onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

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
