import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="aboutUs">
        <h1>About BruinPal</h1>
        <h2>Life at UCLA can be difficult.</h2>
        <h4>BruinPal is a service that connects Bruins with each other<br />to make everyone's lives a bit easier.<br /><br /></h4>
        <div className="aboutUsList">
          <div>
            <h4>Tutoring</h4>
            We've all needed help in a class but never knew where to get it. Offer to help others or ask for help yourself.
          </div>
          <div>
            <h4>Meal Swipes</h4>
            Use too many swipes or have some extra? Exchange them here.
          </div>
          <div>
            <h4>Rides</h4>
            It's tough to get around Los Angeles without a car. Find rideshares or make your own here.
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AboutUs;
