import React from "react";
import {MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle,MDBCheckbox} from 'mdb-react-ui-kit';


function changeShown(){
    console.log("[TODO] grab the course/skill whose checkbox get clicked and change its shownToOthers state");
}

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
        shownToOthers:true
    },{
        skillName:"Ada",
        shownToOthers:true
    },{
        skillName:"Design Patterns",
        shownToOthers:true
    },{
        skillName:"Model Training",
        shownToOthers:true
    },{
        skillName:"Archery",
        shownToOthers:true
    },{
        skillName:"Soulslike Games",
        shownToOthers:true
    },
];

let courses=dummyCourses.map((dummyCourse)=>
    <MDBCol sm="3" display="flex"><MDBCheckbox onClick={changeShown}/><MDBCardText>{dummyCourse.courseName}</MDBCardText> </MDBCol>
);
let skills=dummySkills.map((dummySkill)=>
    <MDBCol sm="3" display="flex"><MDBCheckbox onClick={changeShown}/><MDBCardText>{dummySkill.skillName}</MDBCardText> </MDBCol>
);

function ProfileToSelf() {
    return (
        <MDBCard className="mb-4">
        <MDBCardTitle style={{margin:"10px"}}>
          Skills & Courses Taken (check to show to others)
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

export default ProfileToSelf;
