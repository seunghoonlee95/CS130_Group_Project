import React from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardTitle,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function SkillsCoursesCard({ courses, skills }) {
  let c = courses.split(",").map((dummyCourse) => (
    <MDBCol sm="3" display="flex">
      <MDBCardText>{dummyCourse}</MDBCardText>{" "}
    </MDBCol>
  ));
  let s = skills.split(",").map((dummySkill) => (
    <MDBCol sm="3" display="flex">
      <MDBCardText>{dummySkill}</MDBCardText>{" "}
    </MDBCol>
  ));
  return (
    <MDBCard className="mb-4">
      <MDBCardTitle style={{ margin: "10px" }}>Skills</MDBCardTitle>
      <MDBCardBody>
        <MDBRow>{s}</MDBRow>
      </MDBCardBody>
      <MDBCardTitle style={{ margin: "10px" }}>Courses Taken</MDBCardTitle>
      <MDBCardBody>
        <MDBRow>{c}</MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default SkillsCoursesCard;
