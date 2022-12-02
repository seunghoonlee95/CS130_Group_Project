import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TaskList from "../components/tasks_components/TaskList.js";
import { Select } from "@mui/material";

//TODO should read from database and map them into a table
//react-table  https://kalacloud.com/blog/best-react-table-component/
//Search bar reference: https://juejin.cn/post/7061863419636351006

function Tasks() {
  return (
    <React.Fragment>
      <div data-testid="tasks-navbar">
      <Navbar />
      </div>
      <h2>Task List</h2>
      <div data-testid="tasks-list">
      <TaskList/>
      </div>
      <div data-testid="tasks-footer">
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default Tasks;
