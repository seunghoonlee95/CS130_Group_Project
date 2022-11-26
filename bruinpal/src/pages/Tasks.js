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
      <Navbar />
      <h2>Task List</h2>
      <TaskList/>
      <Footer />
    </React.Fragment>
  );
}

export default Tasks;
