import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Stars from "./Stars";
import { Button } from "bootstrap";

//need to add more fields for user info: make sure to update backend register/login calls and frontend Auth.js also when adding these
//fields!!!!!

/*
each user has taskCreated, taskAccepted: 
if session storage of tasks is null: call tasks/all and populate it
cross reference keys in taskCreated, taskAceepted to keys is all tasks tog enerate list of tasks
display in link format just like tasklist does
edit taskDescription card to include 2 buttons
:if user created task: can change status to Complete
:if tasker is viewing tasks and task is Open: can accept task and move to In Progress

*/
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("userInfo")) || {
      username: "",
      email: "",
      tasker: false,
      taskAccepted: [],
      taskCreated: [],
    };
  }

  updateUserInfo() {
    console.log("TODO");
    //make easy form to fill in tasker or now, skill list?
  }
  renderUserInfo() {
    return (
      <MDBCard className="mb-4">
        <MDBCardBody className="text-center">
          <MDBCardImage
            src="http://media2.s-nbcnews.com/i/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
            alt="avatar"
            className="rounded-circle  border border-5"
            style={{ width: "60%" }}
            fluid
          />
          <p className="text-muted mb-1" style={{ fontWeight: "bold" }}>
            Polar Bruin
          </p>
          <p className="text-muted mb-4">
            Senior CS student willing to help with CS hw/projects.
          </p>
          <div className="d-flex justify-content-center mb-2">
            <MDBBtn>Follow</MDBBtn>
            <MDBBtn outline className="ms-1">
              Message
            </MDBBtn>
          </div>
        </MDBCardBody>

        <MDBCardBody className="text-center">
          <MDBCardTitle>Ratings from Bruin Pals</MDBCardTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              As a customer <br /> <Stars />
            </div>
            <div>
              As a tasker <br /> <Stars />
            </div>
          </div>
        </MDBCardBody>

        <MDBCardBody>
          <MDBListGroup>
            <MDBListGroupItem>
              <MDBIcon fas icon="envelope-square" style={{ margin: "3px" }} />{" "}
              pbruin@g.ucla.edu.test
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBIcon fas icon="phone" style={{ margin: "3px" }} /> (097)
              234-5678
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBIcon fas icon="dove" style={{ margin: "3px" }} /> @polar_bruin
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBIcon fas icon="globe" style={{ margin: "3px" }} />{" "}
              http://www.polarbruin.com
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    );
  }

  render() {
    return <div>{this.renderUserInfo()}</div>;
  }
}

export default UserCard;
