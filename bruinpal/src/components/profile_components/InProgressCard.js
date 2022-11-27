import React from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
  MDBSwitch,
} from 'mdb-react-ui-kit';
import SmallTask from "./SmallTasks";

//TODO search bar

function InProgressCard() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4 small-task-list-title">
          <span className="text-primary font-italic me-1">Tasks in Progress</span>
        </MDBCardText>
        <SmallTask />
        <SmallTask />
        <SmallTask />
      </MDBCardBody>
    </MDBCard>
  );
}

export default InProgressCard;
