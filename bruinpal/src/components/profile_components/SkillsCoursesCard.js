import React from "react";
import {MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle,MDBCheckbox} from 'mdb-react-ui-kit';


function SkillsCoursesCard() {
  return (
    <MDBCard className="mb-4">
    <MDBCardTitle style={{margin:"10px"}}>
      Skills & Courses Taken (check to show to others)
    </MDBCardTitle>
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Skill 1</MDBCardText> </MDBCol>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Skill 2</MDBCardText> </MDBCol>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Skill 3</MDBCardText> </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Course 1</MDBCardText> </MDBCol>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Course 2</MDBCardText> </MDBCol>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Course 3</MDBCardText> </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Course 4</MDBCardText> </MDBCol>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Course 5</MDBCardText> </MDBCol>
          <MDBCol sm="3" style={{display:"flex"}}> <MDBCheckbox /><MDBCardText>Course 6</MDBCardText> </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default SkillsCoursesCard;
