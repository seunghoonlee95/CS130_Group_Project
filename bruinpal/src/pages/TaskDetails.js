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
  const [taskeremail] = useState(loc.state.task_taskeremail);
  const [taskername] = useState(loc.state.task_taskername);
  const [key] = useState(loc.state.task_key);

  let userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {
    username: "",
    email: "",
    tasker: false,
    taskAccepted: [],
    taskCreated: [],
  };
  console.log("tasker", userInfo.tasker);

  //if key exists in taskCreated and status is inProgress: customer can set status as Finshed

  //todo tmrw final grind:
  //1. tasker accepts task and update task and send email
  //2. customer can mark in-progress task they create as fisnished and update on backend to status: Finished
  //3. Profile page display each taskCreated, taskAcceppted and let user click into task details here
  //need to make slides and 6 minute video

  //things other members can do: I will not be able to help much since I have so much to get done, please colloboarte amongst yourselves first
  //profile pages, automatic testing, diagrams, about us page, connect Rheas update user settings to update user call and link to on profile button
  //diagrams and slides

  //accept task, update task, update user taskAccepted list, then call email
  //quick change: get rid of counter in task list just callall
  /*
  function acceptTask(event) {
    console.log("lots of work");
  }
  */

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
      {userInfo.tasker && status === "Open" && (
        <div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Accept Task
            </button>
          </div>
        </div>
      )}
      _{}
      <Footer />
    </React.Fragment>
  );
}

export default TaskDetails;
