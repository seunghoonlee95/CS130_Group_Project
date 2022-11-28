import React from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
  MDBSwitch,
  MDBRow,
} from "mdb-react-ui-kit";
import SmallTask from "./SmallTasks";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//TODO search bar

function MyPostingsCard({ tasks, taskCreated }) {
  let CreatedTasks = [];
  taskCreated.map((key) => {
    tasks.map((task) => {
      if (task.key === parseInt(key)) {
        CreatedTasks.push(task);
      }
    });
  });
  let userTaskList = CreatedTasks.map((t) => (
    <MDBRow sm="3" display="flex">
      <Link
        to="/taskDetails"
        state={{
          task_customername: `${t.customername}`,
          task_category: `${t.category}`,
          task_price: `${t.price}`,
          task_description: `${t.description}`,
          task_datetime: `${t.datetime}`,
          task_location: `${t.location}`,
          task_status: `${t.status}`,
          task_customeremail: `${t.customeremail}`,
          task_taskeremail: `${t.taskeremail}`,
          task_taskername: `${t.taskername}`,
          task_key: `${t.key}`,
        }}
        className="taskLink"
      >
        <SmallTask
          category={t.category}
          datetime={t.datetime}
          price={t.price}
          status={t.status}
        />
      </Link>
    </MDBRow>
  ));

  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4 small-task-list-title">
          <span className="text-primary font-italic me-1">
            Tasks You Created
          </span>
        </MDBCardText>
        {userTaskList}
      </MDBCardBody>
    </MDBCard>
  );
}

export default MyPostingsCard;
