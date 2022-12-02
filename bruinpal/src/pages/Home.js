import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import roycehall from "../images/roycehall.jpeg";
import tutoring from "../images/tutoring.jpg";
import swipetrade from "../images/swipetrade.jpg";
import rideshare from "../images/rideshare.jpg";
import uclaLogo from "../images/uclaLogo.jpeg";

import { NavLink, BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div data-testid="home-navbar">
      <Navbar />
      </div>
      {/* <h1 className="homepageBannerTitle">UCLA Koreans</h1>
      <img src={roycehall} alt="homepageBanner" className="homepageBannerImg" /> */}
      <div data-testid="home-banner"
        className="homepageBanner"
        style={{ backgroundImage: `url(${roycehall})` }}
      >
        <div className="homepageBannerTitle">
          <h1>Need Help?</h1>
          <NavLink to="/aboutus" className="linkmenuItem">
            Bruins will be there for you ➜
          </NavLink>
        </div>
      </div>
      <h1 className="serviceIntro">Our Services</h1>
      <div data-testid="home-services" className="serviceWrapper">
        <div className="serviceCat">
          <NavLink to="/tasks/tutoring" className="linkmenuItem">
            <img src={tutoring} alt="tutoringImg" className="serviceImg" />
            <div className="description">
              <h3>Tutoring</h3>
              <span>
                Do you need help with assignments? We have students to assist
                you!
              </span>
            </div>
          </NavLink>
        </div>
        <div className="serviceCat">
          <NavLink to="/tasks/swipetrade" className="linkmenuItem">
            <img src={swipetrade} alt="swipeTreadeImg" className="serviceImg" />
            <div className="description">
              <h3>Swipe Trade</h3>
              <span>
                Do you have unused meal swipes? We have students looking to buy
                from you!
              </span>
            </div>
          </NavLink>
        </div>
        <div className="serviceCat">
          <NavLink to="/tasks/rideshare" className="linkmenuItem">
            <img src={rideshare} alt="rideshareImg" className="serviceImg" />
            <div className="description">
              <h3>Ride Share</h3>
              <span>
                Are you planning to take Uber/Lyft on your own? Find someone to
                share the ride and save expenses
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      <div data-testid="home-trust" className="trustWrapper">
        <h1>Trusted by BruinHelp</h1>
        <img src={uclaLogo} alt="uclaLogo" className="uclaLogoImg" />
      </div>
      <div data-testid="home-loginsignup">
      <NavLink to="/loginsignup" className="signupLink">
        <div>
          <h1>Sign up to get/provide help! → </h1>
        </div>
      </NavLink>
      </div>
      <div data-testid="home-footer">
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
