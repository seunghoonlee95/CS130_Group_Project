import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import roycehall from "../images/roycehall.jpeg";
import { NavLink, BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <h1 className="homepageBannerTitle">UCLA Koreans</h1>
      <img src={roycehall} alt="homepageBanner" className="homepageBannerImg" /> */}
      <div
        className="homepageBanner"
        style={{ backgroundImage: `url(${roycehall})` }}
      >
        <div className="homepageBannerTitle">
          <h1>Need Help?</h1>
          <NavLink to="/aboutus" className="linkmenuItem">
            Someone will be there for you ➜
          </NavLink>
        </div>
      </div>
      <h1>Contents </h1>
      <h1>Contents </h1>
      <h1>Contents </h1>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
