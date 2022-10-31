import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from "./components/Footer";
import roycehall from "../src/images/roycehall.jpeg"

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
