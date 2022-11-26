import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function TaskDetails(props) {
  const loc = useLocation();

  const [category, setCategory] = useState(loc.state.task_category);
  const [customerName, setCustomerName] = useState(loc.state.task_customername);
  const [description, setDescription] = useState(loc.state.task_description);
  const [price, setPrice] = useState(loc.state.task_price);
  const [status, setStatus] = useState(loc.state.task_status);
  const [datetime, setTimeLocation] = useState(loc.state.task_datetime);
  const [location] = useState(loc.state.task_location);

  const [username, useremail, tasker, taskAccepted] = useState("userInfo");

  return (
    <React.Fragment>
      <Navbar />
      <h1>Task category</h1>
      <h3>{category}</h3>
      <h1>Task Customer</h1>
      <h3>{customerName}</h3>
      <h1>Task description</h1>
      <h3>{description}</h3>
      <h1>Task price</h1>
      <h3>{price}</h3>
      <h1>Task status</h1>
      <h3>{status}</h3>
      <h1>Task time</h1>
      <h3>{datetime}</h3>
      <h1>Task location</h1>
      <h3>{location}</h3>

      <Footer />
    </React.Fragment>
  );
}

export default TaskDetails;
