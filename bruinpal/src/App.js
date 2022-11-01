import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import roycehall from "../src/images/roycehall.jpeg";


function App() {
  return (
    <div>
      <Navbar />
      <h1>Need help?</h1>
      <p>Bruins are here for you!</p>
      <img src={roycehall} alt="roycehall" className="mainpageImage" />
      <Footer />
    </div>
  );
}

export default App;
