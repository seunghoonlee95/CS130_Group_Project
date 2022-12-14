import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Tasks from "./pages/Tasks";
import LoginSignup from "./pages/LoginSignup";
// import Tutoring from "./pages/Tutoring";
// import SwipeTrade from "./pages/SwipeTrade";
// import RideShare from "./pages/RideShare";
import TaskDetails from "./pages/TaskDetails";
import TaskCRUD from "./components/tasks_components/taskCRUD";
import EditProfile from "./components/profile_components/EditProfile";
import UserCard from "./components/profile_components/UserCard";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/loginsignup" element={<LoginSignup />} />
      <Route path="/tasks" element={<Tasks category="all" />} />
      <Route path="/taskdetails" element={<TaskDetails />} />
      <Route path="/profile" element={<UserCard />} />
      <Route path="/taskCRUD" element={<TaskCRUD />} />
      <Route path="/editprofile" element={<EditProfile />} />
    </Routes>
  </BrowserRouter>
);
