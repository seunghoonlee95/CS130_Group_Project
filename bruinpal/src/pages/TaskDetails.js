import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function TaskDetails(props) {
  const location = useLocation();
  // console.log("location : ", location);

  // console.log("location.state : ", location.state);

  const [category, setCategory] = useState(location.state.task_category);
  const [customerName, setCustomerName] = useState(
    location.state.task_customername
  );
  const [description, setDescription] = useState(
    location.state.task_description
  );
  const [price, setPrice] = useState(location.state.task_price);
  const [status, setStatus] = useState(location.state.task_status);
  const [timeLocation, setTimeLocation] = useState(
    location.state.task_timeLocation
  );

  console.log("category", category);
  console.log("customerName", customerName);
  console.log("description", description);
  console.log("price", price);
  console.log("status", status);
  console.log("timeLocation", timeLocation);

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
      <h1>Task timeLocation</h1>
      <h3>{timeLocation}</h3>

      <Footer />
    </React.Fragment>
  );
}

export default TaskDetails;
