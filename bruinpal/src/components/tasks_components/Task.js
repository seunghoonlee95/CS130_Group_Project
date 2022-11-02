import React, { Component } from "react";
import Navbar from "../Navbar";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      numInstance: 0,
      description: "",
      latitude: 0.0,
      longitude: 0.0,
      tasker: 0,
    };
  }

  getPrice = () => {
    return this.price;
  };

  getNumInstance = () => {
    return this.numInstance;
  };

  getDescription = () => {
    return this.price;
  };

  getLatitude = () => {
    return this.latitude;
  };

  getLongitude = () => {
    return this.longitude;
  };

  getTasker = () => {
    return this.tasker;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1 className="comingSoon">(Task page)Coming Soon!</h1>
      </React.Fragment>
    );
  }
}

export default Task;
