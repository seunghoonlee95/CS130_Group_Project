import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Auth from "../components/Auth";

function LoginSignup() {
  return (
    <React.Fragment>
      <div data-testid="loginsignup-navbar">
      <Navbar />
      </div>
      <div data-testid="loginsignup-auth">
      <Auth />
      </div>
      <div data-testid="loginsignup-footer">
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default LoginSignup;
