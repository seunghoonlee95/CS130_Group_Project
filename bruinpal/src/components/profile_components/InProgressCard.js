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

// profile reference: https://mdbootstrap.com/docs/react/extended/profiles/
//star rating reference: https://www.npmjs.com/package/react-star-ratings, https://juejin.cn/post/6844903858523783176
//TODO search bar

function InProgressCard() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4 small-task-list-title">
          <span className="text-primary font-italic me-1">Tasks in Progress</span>
          <div className="small-task-switch">Show to others<MDBSwitch /></div>
        </MDBCardText>
        <SmallTask />
        <SmallTask />
        <SmallTask />
      </MDBCardBody>
    </MDBCard>
  );
}

export default InProgressCard;
