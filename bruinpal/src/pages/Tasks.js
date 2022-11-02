import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TaskList from "../components/tasks_components/TaskList.js";

//TODO should read from database and map them into a table
//react-table  https://kalacloud.com/blog/best-react-table-component/
//Search bar reference: https://juejin.cn/post/7061863419636351006

function Tasks() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="comingSoon">Tasks page under construction. </h1>
      <h1 className="comingSoon">Coming Soon!</h1>
      <p>Note to self: this looks ugly I'll beautify it soon</p>
      <h2>Task List</h2>
      <input type="text" id="search" name="search" />
      <input type="submit" value="Search" placeholder="Task" />
      <label>Category</label>
      <select name="Categories" id="lang">
        <option value="tutoring">Tutoring</option>
        <option value="swipetrade">Swipe Trade</option>
        <option value="rideshare">Ride Share</option>
      </select>
      <input type="submit" value="Submit" />
      <TaskList />
      <Footer />
    </React.Fragment>
  );
}

export default Tasks;
