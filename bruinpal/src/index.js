import React from "react";
import * as ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom/client";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Tasks from "./pages/Tasks";
import LoginSignup from "./pages/LoginSignup";
import Tutoring from "./pages/Tutoring";
import SwipeTrade from "./pages/SwipeTrade";
import RideShare from "./pages/RideShare";
import Profile from "./pages/Profile";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/loginsignup" element={<LoginSignup />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/tutoring" element={<Tutoring />} />
      <Route path="/tasks/swipetrade" element={<SwipeTrade />} />
      <Route path="/tasks/rideshare" element={<RideShare />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
