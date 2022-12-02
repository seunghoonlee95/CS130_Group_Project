import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import TaskDropDown from "./TaskDropDown";

function Navbar() {
  let loggedIn = false;
  if (window.localStorage.getItem("loggedIn") !== null) {
    loggedIn = window.localStorage.getItem("loggedIn");
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logoImageWrapper">
          <Link data-testid="navbar-logo" to="/">
            <img src={logo} alt="logo" className="logoImage" />
          </Link>
        </div>
        <div className="navbarMenu">
          <div>
            <NavLink data-testid="navbar-aboutus-navlink" to="/aboutus" className="linkmenuItem">
              About Us
            </NavLink>
          </div>
          <div>
            <TaskDropDown />
            {/* <NavLink to="/tasks" className="linkmenuItem">
              Tasks
            </NavLink> */}
          </div>
          {loggedIn !== "true" && (
            <div>
              <NavLink data-testid="navbar-loginsignup-navlink" to="/loginsignup" className="linkmenuItem">
                Login / Sign Up
              </NavLink>
            </div>
          )}
          {loggedIn === "true" && (
            <div>
              <NavLink data-testid="navbar-createnewtask-navlink" to="/taskCRUD" className="linkmenuItem">
                Create New Task
              </NavLink>
            </div>
          )}
          {loggedIn === "true" && (
            <div>
              <NavLink data-testid="navbar-logout-navlink" to="/loginsignup" className="linkmenuItem">
                Logout
              </NavLink>
            </div>
          )}
          {loggedIn === "true" && (
            <div>
              <NavLink data-testid="navbar-profile-navlink" to="/profile" className="linkmenuItem">
                Profile
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
