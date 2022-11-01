import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Auth from "../components/Auth";

function LoginSignup() {
  return (
    <React.Fragment>
      <Navbar />
      <Auth />
      <Footer />
    </React.Fragment>
  );
}

export default LoginSignup;
