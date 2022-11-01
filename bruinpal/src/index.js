import React from "react";
import * as ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Tasks from "./pages/Tasks";
import LoginSignup from "./pages/LoginSignup";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// const root = document.getElementById("root");
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/loginsignup" element={<LoginSignup />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </BrowserRouter>
);
