import React from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBSwitch
} from 'mdb-react-ui-kit';
import SmallTask from "./SmallTasks";

//TODO search bar

function MyPostingsCard() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">My Postings</span>
          <div className="small-task-switch">Show to others<MDBSwitch /></div>
        </MDBCardText>
        <SmallTask />
        <SmallTask />
        <SmallTask />
        <SmallTask />
      </MDBCardBody>
    </MDBCard>
  );
}

export default MyPostingsCard;
