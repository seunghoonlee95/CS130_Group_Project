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
import Navbar from "../Navbar";
import Footer from "../Footer";
import MyAcceptedTasksCard from "./InProgressCard.js";
import MyPostingsCard from "./MyPostingsCard.js";
import SkillsCoursesCard from "./SkillsCoursesCard.js";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Stars from "./Stars";
import { Link } from "react-router-dom";

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
      profileInformation: {
        courses: [],
        skills: [],
        bio: "",
        phonenumber: "",
        socialmedia: "",
        website: "",
      },
    };
    this.state.tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
    this.renderUserInfo = this.renderUserInfo.bind(this);
  }

  //update tasks
  componentDidMount() {
    if (this.state.tasks.length === 0) {
      async function getTasks() {
        const requestOptions = {
          method: "get",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
        };
        fetch("api/tasks/all", requestOptions)
          .then((res) => res.json())
          .then((result) => {
            if (result.error) {
              console.log("Error getting tasks. Please try again.");
              console.log(result);
            } else {
              window.localStorage.setItem(
                "tasks",
                JSON.stringify(result.tasks)
              );
              return result.tasks;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      getTasks().then(() => {
        this.state.tasks = JSON.parse(window.localStorage.getItem("tasks"));
        console.log("got tasks");
        //window.location.reload(false);
      });
    }
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
            {this.state.username}
          </p>
          <p className="text-muted mb-4">{this.state.profileInformation.bio}</p>
          <div className="d-flex justify-content-center mb-2">
            <Link to="/editprofile">
              <MDBBtn className="profile-button mx-2">Edit Profile</MDBBtn>
            </Link>
            <Link to="/taskCRUD">
              <MDBBtn className="profile-button mx-2">Create New Task</MDBBtn>
            </Link>
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
              {this.state.email}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBIcon fas icon="phone" style={{ margin: "3px" }} />{" "}
              {this.state.profileInformation.phonenumber}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBIcon fas icon="dove" style={{ margin: "3px" }} />
              {this.state.profileInformation.socialmedia}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBIcon fas icon="globe" style={{ margin: "3px" }} />{" "}
              {this.state.profileInformation.website}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    );
  }

  render() {
    const courses = this.state.profileInformation.courses;
    const skills = this.state.profileInformation.skills;
    const tasks = this.state.tasks;
    const taskAccepted = this.state.taskAccepted;
    const taskCreated = this.state.taskCreated;
    return (
      <React.Fragment>
        <Navbar />
        <section style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4">{this.renderUserInfo()}</MDBCol>
              <MDBCol lg="8">
                <SkillsCoursesCard courses={courses} skills={skills} />
                <MDBRow>
                  <MDBCol md="6">
                    {this.state.tasker === true && (
                      <MyAcceptedTasksCard
                        tasks={tasks}
                        taskAccepted={taskAccepted}
                      />
                    )}
                  </MDBCol>
                  <MDBCol md="6">
                    <MyPostingsCard tasks={tasks} taskCreated={taskCreated} />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UserCard;
