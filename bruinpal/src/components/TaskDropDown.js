import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function TaskDropDown() {
  return (
    <div>
      <Dropdown className="taskDropDown">
        <Dropdown.Toggle variant="success">Tasks</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/tasks/tutoring">Tutoring</Dropdown.Item>
          <Dropdown.Item href="/tasks/swipetrade">Swipe Trade</Dropdown.Item>
          <Dropdown.Item href="/tasks/rideshare">Ride Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
