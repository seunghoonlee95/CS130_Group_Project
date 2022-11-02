import React, { Component } from "react";
import Navbar from "../Navbar";
import TaskList from "./tasks_components/TaskList";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userId: 0,
      isTasker: false,
      phoneNumber: "",
      email: "",
      taskHistory: "",
      paymentInfo: "",
      taskStatus: 0,
    };
  }

  viewTasks = () => {
    return this.taskHistory;
  };

  updateTaskStatus = (status) => {
    this.setState({
      taskStatus: status,
    });
  };

  createTask = (task) => {
    this.setState({
      taskHistory: this.taskHistory.concat(task),
    });
  };

  updateTask = (taskId, task) => {
    this.setState({
      // TODO
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1 className="comingSoon">CustomerObj. coming soon</h1>
      </React.Fragment>
    );
  }
}

export default Customer;
