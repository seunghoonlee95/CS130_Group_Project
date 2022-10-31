import React from "react";
import Navbar from "../components/Navbar";
import SingleTask from "../components/tasks_components/SingleTask.js";

//TODO should read from database and map them into a table

function Tasks() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="comingSoon">(Tasks page)Coming Soon!</h1>
      <p>Note to self: this looks ugly I'll beautify it soon</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Money</th>
          <th>Task title</th>
          <th>Task details</th>
          <th>Status</th>
        </tr>
      </table>

    </React.Fragment>
  );
}

export default Tasks;
