import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-upperLeft">
          <Link to="/">
            <img src={logo} alt="logo" className="logoImage" />
          </Link>
        </div>
        <div className="footer-link-upperRight">
          <div className="footer-link-items">
            <span>About Us</span>
            <Link to="/">How it works</Link>
          </div>
          <div className="footer-link-items">
            <span>Tasks</span>
            <Link to="/">Tutoring</Link>
            <Link to="/">Swipe Trade</Link>
            <Link to="/">Ride Share</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
