import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logoImageWrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="logoImage" />
        </Link>
      </div>
      <div className="navbarMenu">
        <div>
          <NavLink to="/" className="linkmenuItem">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/tasks" className="linkmenuItem">
            Tasks
          </NavLink>
        </div>
        <div>
          <NavLink to="/loginsignup" className="linkmenuItem">
            Login / Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;