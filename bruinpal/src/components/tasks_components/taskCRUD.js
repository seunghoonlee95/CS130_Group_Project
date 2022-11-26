import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class TaskCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("userInfo")) || {
      username: "",
      email: "",
      tasker: false,
      taskAccepted: [],
      taskCreated: [],
    };
  }
  /*
    Task Info:
    category
    "Swipe Trade"
    customername
    description

    key(autogenerated for new tasks)

    price
    "$8"
    status
    "Open" for new tasks
    taskId
    timelocation
    "10/13/2022 13:30 Anywhere on campus"



    */

  submitNewTask(event) {}

  newTaskForm() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.submitNewTask}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">New Task</h3>
            <div className="form-group mt-3">
              <label>Category</label>
              <select name="categories" id="cat-select">
                <option value="all">
                  {category
                    ? "Current Choice: " + category
                    : "Please Choose A Category"}
                </option>
                <option value="all">All</option>
                <option value="Tutoring">Tutoring</option>
                <option value="Swipe Trade">Swipe Trade</option>
                <option value="Ride Share">Ride Share</option>
              </select>
              <input
                type="text"
                name="username"
                className="form-control mt-1"
                placeholder="Username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Date and Time</label>
              <input
                type="datetime-local"
                name="datetime"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Password"
                minLength={6}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.state.email !== "" && this.newTaskForm()}
        {this.state.email === "" && <div>Please Login To Create a Task</div>}
        <Footer />
      </React.Fragment>
    );
  }
}