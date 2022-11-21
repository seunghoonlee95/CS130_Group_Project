import React from "react";
import {MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle,MDBCheckbox} from 'mdb-react-ui-kit';

let dummyCourses=[
    {
        courseName:"Data Structure and Algorithms",
        shownToOthers:true
    },{
        courseName:"Software Engineering",
        shownToOthers:false
    },{
        courseName:"Computer Graphics",
        shownToOthers:true
    }
];
let dummySkills=[
    {
        skillName:"C++",
        shownToOthers:true
    },{
        skillName:"Java",
        shownToOthers:false
    },{
        skillName:"Ada",
        shownToOthers:true
    },{
        skillName:"Design Patterns",
        shownToOthers:false
    },{
        skillName:"Model Training",
        shownToOthers:true
    },{
        skillName:"Archery",
        shownToOthers:false
    },{
        skillName:"Soulslike Games",
        shownToOthers:true
    },
];

let courses=dummyCourses.map((dummyCourse)=>
    dummyCourse.shownToOthers && <MDBCol sm="3" display="flex"><MDBCardText>{dummyCourse.courseName}</MDBCardText> </MDBCol>
);
let skills=dummySkills.map((dummySkill)=>
    dummySkill.shownToOthers && <MDBCol sm="3" display="flex"><MDBCardText>{dummySkill.skillName}</MDBCardText> </MDBCol>
);

function ProfileToOthers() {
    return (
        <MDBCard className="mb-4">
        <MDBCardTitle style={{margin:"10px"}}>
          Skills & Courses Taken
        </MDBCardTitle>
          <MDBCardBody>
            <MDBRow>
              {courses}
            </MDBRow>
            <hr />
            <MDBRow>
              {skills}
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        );
}

export default ProfileToOthers;
