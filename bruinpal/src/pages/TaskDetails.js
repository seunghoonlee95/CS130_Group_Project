import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { renderMatches, useLocation, Link } from "react-router-dom";

function TaskDetails(props) {
  const loc = useLocation();

  const [category, setCategory] = useState(loc.state.task_category);
  const [customerName, setCustomerName] = useState(loc.state.task_customername);
  const [customerEmail, setCustomerEmail] = useState(
    loc.state.task_customeremail
  );
  const [description, setDescription] = useState(loc.state.task_description);
  const [price, setPrice] = useState(loc.state.task_price);
  let [status, setStatus] = useState(loc.state.task_status);
  const [datetime, setTimeLocation] = useState(loc.state.task_datetime);
  const [location] = useState(loc.state.task_location);
  let [taskeremail] = useState(loc.state.task_taskeremail);
  let [taskername] = useState(loc.state.task_taskername);
  const [key] = useState(loc.state.task_key);
  const [eventOccurred, setEventOccurred] = useState(false);
  const [event2Occurred, setEvent2Occurred] = useState(false);

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

  //two calls: first update task, then update user taskAccepted array
  function accept(e) {
    e.preventDefault();
    console.log("accept task");
    const taskUpdate = {};
    taskUpdate.taskername = userInfo.username;
    taskUpdate.taskeremail = userInfo.email;
    taskUpdate.status = "In Progress";
    taskUpdate.key = parseInt(key);
    console.log("taskUpdate", taskUpdate);

    var data = JSON.stringify(taskUpdate);
    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch("api/tasks/update", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        async function getTasks() {
          const requestOptions = {
            method: "get",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
          };
          fetch("api/tasks/all", requestOptions)
            .then((res) => res.json())
            .then((result) => {
              if (result.error) {
                console.log("Error getting tasks. Please try again.");
                console.log(result);
              } else {
                window.localStorage.setItem(
                  "tasks",
                  JSON.stringify(result.tasks)
                );
                return result.tasks;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }

        getTasks()
          .then(() => {
            let data = JSON.parse(window.localStorage.getItem("tasks"));
            userInfo.taskAccepted.push(parseInt(key));
            let userUpdate = {};
            userUpdate.taskAccepted = userInfo.taskAccepted;
            userUpdate.email = userInfo.email;
            const userUpdateOptions = {
              method: "post",
              credentials: "same-origin",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userUpdate),
            };
            console.log("userData", userUpdateOptions.body);
            fetch("api/user/update", userUpdateOptions)
              .then((res) => res.json())
              .then((result) => {
                if (result.error) {
                  console.log(result.error);
                } else {
                  console.log(result);
                }
              })
              .catch((err) => {
                console.log(err);
                console.log("handle errors later plz");
              });
          })
          .then(() => {
            let emailBody = {};
            emailBody.customername = customerName;
            emailBody.customeremail = customerEmail;
            emailBody.description = description;
            emailBody.taskername = userInfo.username;
            emailBody.taskeremail = userInfo.email;
            const emailOptions = {
              method: "post",
              credentials: "same-origin",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(emailBody),
            };
            fetch("api/lib/notifyTaskTaken", emailOptions)
              .then((res) => res.json())
              .then((result) => {
                if (result.error) {
                  console.log(result.error);
                } else {
                  console.log(result);
                }
              })
              .catch((err) => {
                console.log(err);
                console.log("handle errors later plz");
              });
          });
      });

    setStatus("In Progress");
    setEventOccurred(true);
  }

  function complete(e) {
    e.preventDefault();
    const taskUpdate = {};
    taskUpdate.status = "Complete";
    taskUpdate.key = parseInt(key);
    console.log("taskUpdate", taskUpdate);

    var data = JSON.stringify(taskUpdate);
    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch("api/tasks/update", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        async function getTasks() {
          const requestOptions = {
            method: "get",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
          };
          fetch("api/tasks/all", requestOptions)
            .then((res) => res.json())
            .then((result) => {
              if (result.error) {
                console.log("Error getting tasks. Please try again.");
                console.log(result);
              } else {
                window.localStorage.setItem(
                  "tasks",
                  JSON.stringify(result.tasks)
                );
                return result.tasks;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }

        getTasks().then(() => {
          setStatus("Complete");
          console.log("complete task");
          setEvent2Occurred(true);
        });
      });
  }

  return (
    <React.Fragment>
      <Navbar />
      {!eventOccurred && (
        <center>
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
          {userInfo.tasker &&
            status === "Open" &&
            userInfo.username !== customerName && (
              <div>
                <div className="d-grid gap-2 mt-3">
                  <form onSubmit={accept}>
                    <button type="submit" className="btn btn-primary">
                      Accept Task
                    </button>
                  </form>
                </div>
              </div>
            )}
          {userInfo.username === customerName && status === "In Progress" && (
            <div>
              <div className="d-grid gap-2 mt-3">
                <form onSubmit={complete}>
                  <button type="submit" className="btn btn-primary">
                    Mark Task as Completed
                  </button>
                </form>
              </div>
            </div>
          )}
        </center>
      )}
      {eventOccurred && (
        <div>
          <center>
            <h1>Task Accepted</h1>
            <Link to="/profile">
              <button type="submit" className="btn btn-primary">
                Go to Profile
              </button>
            </Link>
          </center>
        </div>
      )}
      {event2Occurred && (
        <div>
          <center>
            <h1>Task Marked as Complete. Congratualtions</h1>
            <Link to="/profile">
              <button type="submit" className="btn btn-primary">
                Go to Profile
              </button>
            </Link>
          </center>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
}

export default TaskDetails;
